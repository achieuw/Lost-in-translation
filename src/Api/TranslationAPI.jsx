import { BASE_URL, API_KEY } from ".";

export const apiGetUser = async (username) => {
    try {
        const response = await fetch(`${BASE_URL}?username=${username}`)

        if(!response.ok) {
            throw new Error("Could not fetch user")
        }

        const data = response.json()
        return [ null, data ]

    } catch (error) {
        return [ error.message, null ]
    }
    


}