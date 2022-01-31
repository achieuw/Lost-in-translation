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

    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(loggedUser))

    return {type: ACTION_LOGIN_USER, user: loggedUser}
}

export const logoutUser = () => {

    // delete from local storage
    localStorage.removeItem(STORAGE_KEY_USER)
    
    return {type: ACTION_LOGOUT_USER, user: { username: "", translations: [] }}
}

export const addTranslation = async (user, translation) => {
    // Fetch in middleware
    const [ error, newUser ] = await apiAddTranslation(user, translation)

    if (error !== null) {
        return {type: 'error'}
    }

    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(newUser))

    return {type: ACTION_ADD_TRANSLATION, user: newUser}
}

export const deleteTranslations = (translations) => {

    const deletions = translations.length > 10 ? 10 : translations.length

    for (let i = 0; i < deletions; i++) {
        translations.pop()
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
            return action.user
        case ACTION_LOGOUT_USER:
            return action.user
        case ACTION_ADD_TRANSLATION:
            return action.user
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