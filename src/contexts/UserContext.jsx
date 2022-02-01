/**
 * Dependencies
 * @ignore
 */

import { createContext, useContext, useReducer } from "react";
import { apiAddTranslation, apiLoginUser, apiUpdateTranslations } from "../Api/TranslationAPI";
import { STORAGE_KEY_USER } from "../const/storageKeys";

// action tags
export const ACTION_LOGIN_USER = "[user] loginUser"
export const ACTION_LOGOUT_USER = "[user] logoutUser"
export const ACTION_ADD_TRANSLATION = "[user] addTranslation"
export const ACTION_DELETE_TRANSLATION = "[user] deleteTranslation"

const UserContext = createContext()

// Actions
export const loginUser = async (username) => {
    // get user object
    const [ error, loggedUser ] = await apiLoginUser(username)

    if (error !== null) {
        return {type: 'error'}
    }

    // return object for reducer function
    return {type: ACTION_LOGIN_USER, user: loggedUser}
}

export const logoutUser = () => {
    // return object for reducer function
    return {type: ACTION_LOGOUT_USER}
}

export const addTranslation = async (user, translation) => {
    const translationObj = {translation, deleted: false};
    // Fetch in middleware
    const [ error, newUser ] = await apiAddTranslation(user, translationObj)

    if (error !== null) {
        return {type: 'error'}
    }

    // return object for reducer function
    return {type: ACTION_ADD_TRANSLATION, translation: translationObj}
}

export const deleteTranslations = async (userId, translations) => {
    // copy of passed translations
    const newTranslations = [...translations]
    // max amount of "deletions"
    const deletions = newTranslations.length > 10 ? 10 : newTranslations.length
    // temp array
    const deletedTranslations = []

    let count = 0;
    while (count < deletions) {
        const removedTranslation = newTranslations.pop()
        if (typeof removedTranslation === 'object' && removedTranslation.deleted === false) {
            // if object and not deleted, set deleted
            removedTranslation.deleted = true
            deletedTranslations.push(removedTranslation)
            count++
        } else if (typeof removedTranslation !== 'object'){ 
            // if not object, make into object and set deleted true
            deletedTranslations.push({translation: removedTranslation, deleted: true})
            count++
        } else {
            deletedTranslations.push(removedTranslation)
        }
    }

    // put the deleted elements back into the array, now as objects
    for (let i = 0; i < deletedTranslations.length; i++) {
        const element = deletedTranslations[i];
        if (element.translation !== undefined) {
            newTranslations.push(element)
        }
    }

    // update api user
    await apiUpdateTranslations(userId, newTranslations)

    // return object for reducer function
    return {type: ACTION_DELETE_TRANSLATION , translations: newTranslations}
}

// return use context for ease of use
export const useUserContext = () => {
    return useContext(UserContext);
}

// reducer function
const userReducer = (oldUser, action) => {
    switch (action.type) {
        case ACTION_LOGIN_USER:
            // save to local storage
            localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(action.user))
            return action.user
        case ACTION_LOGOUT_USER:
            // delete from local storage
            localStorage.removeItem(STORAGE_KEY_USER)
            return {username: "", translations: []}
        case ACTION_ADD_TRANSLATION:
            // format updated user
            const updatedUser = {...oldUser,
                translations : [...oldUser.translations,
                                action.translation]}
            // update local storage
            localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(updatedUser))
            return updatedUser
        case ACTION_DELETE_TRANSLATION:
            // format translated user
            const translatedUser = {...oldUser,
                translations: action.translations}
            // update local storage
            localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(translatedUser))
            return translatedUser
        default:
            return oldUser;
    }
}

/**
 * Component
 * @ignore
 */
const UserProvider = ({ children }) => {

    // check if user exist in local storage, else set standard user obj
    const initUser = localStorage.getItem(STORAGE_KEY_USER) ? JSON.parse(localStorage.getItem(STORAGE_KEY_USER)) : { username: "", translations: [] }

    // create reducer with reducer function and initial user
    const [user, dispatch] = useReducer(userReducer, initUser)

    // pass related as an object for easier deconstruction
    const state = { user, dispatch }

    return (
        <UserContext.Provider value={ state }>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider