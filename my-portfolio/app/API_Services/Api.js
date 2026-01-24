import axios from 'axios'

const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // or your API URL
    timeout: 10000,
})

/* ===============================
   REQUEST INTERCEPTOR
================================ */
Api.interceptors.request.use(
    (config) => {
        // get token & user from storage (or cookies)
        const token = localStorage.getItem('x-auth-token')
        const userType = localStorage.getItem('x-user-type')

        if (token) {
            config.headers['x-auth-token'] = token || "TOKEN_DUMMY"
        }

        if (userType) {
            config.headers['x-user-type'] = userType || "Admin"
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

/* ===============================
   RESPONSE INTERCEPTOR (optional)
================================ */
Api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.log('Unauthorized - logout user')
            // optional: redirect to login
        }
        return Promise.reject(error)
    }
)

export default Api
