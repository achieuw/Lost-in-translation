/**
 * Dependencies
 * @ignore
 */

import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

export const useUserContext = () => {
    return useContext(UserContext);
}

/**
 * Component
 * @ignore
 */
const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        username: ""
    })

    return (
        <UserContext.Provider value={[ user, setUser ]}>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider