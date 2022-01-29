/**
 * Dependencies
 * @ignore
 */
import { useReducer } from "react";
import { useUserContext } from "../contexts/UserContext";
import { apiLoginUser } from '../Api/TranslationAPI'

//Action creators
export const loginUser = async (username) => {
    const [ error, loggedUser ] = await apiLoginUser(username)

    if (error !== null) {
        return {type: 'error'}
    }

    return {type: 'loginUser', user: loggedUser}
}



export const UserReducer = () => {

    const { user } = useUserContext();

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
    
    return useReducer(userReducer, user)
}