import { BASE_URL, API_KEY } from ".";

// Fetch user from api
async function apiGetUser(username) {
    try {
        const response = await fetch(`${BASE_URL}?username=${username}`)

        if(!response.ok) {
            throw new Error("Could not fetch user")
        }

        const data = await response.json()

        // return error as null and data
        return [ null, data ]

    } catch (error) {
        // or return error and data as null
        return [ error.message, null ]
    }
}

// post user to api
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

        // return error as null and data
        return [null, data]

    } catch (error) {
        // or return error and data as null
        return [error.message, null]
    }
}

// function that combines get and create
export async function apiLoginUser(username) {
    // fetch username
    const [error, user] = await apiGetUser(username)

    if(error !== null) {
        return [error, null]
    }

    // if user does not exist
    if(user.length > 0) {
        return [null, user.pop()]
    }

    // create user
    return await apiCreateUser(username)
}

// add translation to api
export async function apiAddTranslation(user, translation) {
    // copy translations array
    const newTranslations = [...user.translations]
    // add new translation to it
    newTranslations.push(translation)

    try {
        // patch api
        const response = await fetch(`${BASE_URL}/${user.id}`, {
            method: 'PATCH',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                translations: newTranslations
            })
        })

        if (!response.ok) {
            throw new Error('Could not add translation')
        }

        // Return only for debugging
        const data = await response.json()
        return [null, data]

    } catch (error) {
        return [error.message, null]
    }
}

// update translations (for "deleted")
export async function apiUpdateTranslations(userId, translations) {
    try {
        const response = await fetch(`${BASE_URL}/${userId}`, {
            method: 'PATCH',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                translations: translations
            })
        })

        if (!response.ok) {
            throw new Error('Could not update translations')
        }

        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, null]
    }
}