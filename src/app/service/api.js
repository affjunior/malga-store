export function api(path, options) {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`, options)
}

export function get(path, options) {
    return api(path, { ...options, method: 'GET' })
}

export function post(path, body) {
    return api(path, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}