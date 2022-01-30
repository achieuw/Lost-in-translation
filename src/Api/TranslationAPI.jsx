import { BASE_URL, API_KEY } from ".";

async function apiGetUser(username) {
    try {
        const response = await fetch(`${BASE_URL}?username=${username}`)

        if(!response.ok) {
            throw new Error("Could not fetch user")
        }

        const data = await response.json()

        return [ null, data ]

    } catch (error) {
        return [ error.message, null ]
    }
}

async function apiCreateUser(username) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                translations: []
            })
        })

        if (!response.ok) {
            throw new Error('Could not create new user')
        }

        const data = await response.json()

        return [null, data]

    } catch (error) {
        return [error.message, null]
    }
}

export async function apiLoginUser(username) {
    const [error, user] = await apiGetUser(username)

    if(error !== null) {
        return [error, null]
    }

    if(user.length > 0) {
        return [null, user.pop()]
    }

    return await apiCreateUser(username)
}