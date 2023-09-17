import axios from 'axios'

const baseURL = 'https://router.project-osrm.org'
const baseURLRoute = `${baseURL}/route/v1`
const instances = {}

const getInstance = (baseURL) => {
    if (!instances[baseURL]) {
        const config = {
            baseURL,
            timeout: 1000,
            withCredentials: false,
        }
        instances[baseURL] = axios.create(config)
        instances[baseURL].interceptors.response.use(undefined, error => {
            throw error
        })

    }

    return instances[baseURL]
}

export const osrmApiRoute = getInstance(baseURLRoute)
