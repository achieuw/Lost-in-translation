/**
 * Dependencies
 * @ignore
 */
import { useReducer } from "react";
import { useUserContext } from "../../contexts/UserContext";


export const UserReducer = () => {

    const [ user, setUser ] = useUserContext();

    const userReducer = (user, action) => {
        switch (action.type) {
            case 'setUser':
                return action.user
            default:
                return;
        }
    }
    
    return useReducer(userReducer, user)
}