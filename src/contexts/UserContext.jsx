/**
 * Dependencies
 * @ignore
 */

import { createContext, useContext, useReducer } from "react";
import { apiAddTranslation, apiLoginUser } from "../Api/TranslationAPI";
import { STORAGE_KEY_USER } from "../const/storageKeys";

export const ACTION_LOGIN_USER = "[user] loginUser"
export const ACTION_LOGOUT_USER = "[user] logoutUser"
export const ACTION_ADD_TRANSLATION = "[user] addTranslation"
export const ACTION_DELETE_TRANSLATION = "[user] deleteTranslation"

const UserContext = createContext()

// Actions
export const loginUser = async (username) => {
    const [ error, loggedUser ] = await apiLoginUser(username)

    if (error !== null) {
        return {type: 'error'}
    }

    return {type: ACTION_LOGIN_USER, user: loggedUser}
}

export const logoutUser = () => {
    return {type: ACTION_LOGOUT_USER}
}

export const addTranslation = async (user, translation) => {
    const translationObj = {translation, deleted: false};
    // Fetch in middleware
    const [ error, newUser ] = await apiAddTranslation(user, translationObj)

    if (error !== null) {
        return {type: 'error'}
    }

    return {type: ACTION_ADD_TRANSLATION, translation: translationObj}
}

export const deleteTranslations = (translations) => {

    const deletions = translations.length > 10 ? 10 : translations.length
    const deletedTranslations = []

    let count = 0;
    while (count < deletions) {
        const removedTranslation = translations.pop()
        if (typeof removedTranslation === 'object' && removedTranslation.deleted === false) {
            removedTranslation.deleted = true
            deletedTranslations.push(removedTranslation)
            count++
        } else if (typeof removedTranslation !== 'object'){
            deletedTranslations.push({translation: removedTranslation, deleted: true})
            count++
        } else {
            deletedTranslations.push(removedTranslation)
        }
    }

    for (let i = 0; i < deletedTranslations.length; i++) {
        const element = deletedTranslations[i];
        if (element.translation !== undefined) {
            translations.push(element)
        }
    }

    return {type: ACTION_DELETE_TRANSLATION , translations: translations}
}

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
            //format updated user
            const updatedUser = {...oldUser,
                translations : [...oldUser.translations,
                                action.translation]}
            localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(updatedUser))
            return updatedUser
        case ACTION_DELETE_TRANSLATION:
            return {
                ...oldUser,
                translations: action.translations
            }
        default:
            return oldUser;
    }
}

/**
 * Component
 * @ignore
 */
const UserProvider = ({ children }) => {

    const initUser = localStorage.getItem(STORAGE_KEY_USER) ? JSON.parse(localStorage.getItem(STORAGE_KEY_USER)) : { username: "", translations: [] };

    const [user, dispatch] = useReducer(userReducer, initUser)

    const state = { user, dispatch }

    return (
        <UserContext.Provider value={ state }>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider