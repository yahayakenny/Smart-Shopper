import generateToken from './token'

const setToken = (value) => {
    return localStorage.setItem('token', value)
}

const getToken = () => {
    return localStorage.getItem('token')
}

export {getToken, setToken}