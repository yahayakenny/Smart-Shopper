import generateToken from './token'

const setToken = () => {
    return localStorage.setItem('token', generateToken())
}

const getToken = () => {
    return localStorage.getItem('token')
}

export {getToken, setToken}