/**
 * Dependencies
 * @ignore
 */

import { createContext, useContext, useReducer } from "react";
import { apiLoginUser } from "../Api/TranslationAPI";

export const UserContext = createContext()

export const loginUser = async (username) => {
    const [ error, loggedUser ] = await apiLoginUser(username)

    if (error !== null) {
        return {type: 'error'}
    }

    localStorage.setItem('translate-user', JSON.stringify(loggedUser))

    return {type: 'loginUser', user: loggedUser}
}

export const useUserContext = () => {
    return useContext(UserContext);
}

// reducer function
const userReducer = (oldUser, action) => {
    // console.log(action.user)
    switch (action.type) {
        case 'loginUser':
            console.log(action.user);
            return action.user
        default:
            return;
    }
}

/**
 * Component
 * @ignore
 */
const UserProvider = ({ children }) => {

    const initUser = localStorage.getItem('translate-user') ? JSON.parse(localStorage.getItem('translate-user')) : { username: "" };

    console.log(initUser);

    const [user, dispatch] = useReducer(userReducer, initUser)

    const state = { user, dispatch }

    return (
        <UserContext.Provider value={ state }>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider