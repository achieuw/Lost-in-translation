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

export async function apiAddTranslation(user, translation) {
    const newTranslations = [...user.translations]
    newTranslations.push(translation)

    try {
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