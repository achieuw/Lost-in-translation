/**
 * Dependencies
 * @ignore
 */

import { createContext, useContext, useReducer } from "react";
import { apiAddTranslation, apiLoginUser } from "../Api/TranslationAPI";

export const UserContext = createContext()

export const loginUser = async (username) => {
    const [ error, loggedUser ] = await apiLoginUser(username)

    if (error !== null) {
        return {type: 'error'}
    }

    localStorage.setItem('translate-user', JSON.stringify(loggedUser))

    return {type: 'loginUser', user: loggedUser}
}

export const logoutUser = () => {

    // delete from local storage
    localStorage.removeItem('translate-user')
    
    return {type: 'logoutUser', user: { username: "", translations: [] }}
}

export const addTranslation = async (user, translation) => {
    const [ error, newUser ] = await apiAddTranslation(user, translation)

    console.log(newUser);

    if (error !== null) {
        return {type: 'error'}
    }

    localStorage.setItem('translate-user', JSON.stringify(newUser))

    return {type: 'addTranslation', user: newUser}
}

export const deleteTranslations = (translations) => {

    const deletions = translations.length > 10 ? 10 : translations.length

    for (let i = 0; i < deletions; i++) {
        translations.pop()
    }

    return {type: 'deleteTranslations', translations: translations}
}

export const useUserContext = () => {
    return useContext(UserContext);
}

// reducer function
const userReducer = (oldUser, action) => {
    // console.log(action.user)
    switch (action.type) {
        case 'loginUser':
            return action.user
        case 'logoutUser':
            return action.user
        case 'addTranslation':
            return action.user
        case 'deleteTranslations':
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

    const initUser = localStorage.getItem('translate-user') ? JSON.parse(localStorage.getItem('translate-user')) : { username: "", translations: [] };

    const [user, dispatch] = useReducer(userReducer, initUser)

    const state = { user, dispatch }

    return (
        <UserContext.Provider value={ state }>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider