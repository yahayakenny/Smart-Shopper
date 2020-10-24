import React, {useState} from 'react';
import Navigation from './Navigation';
import {getToken, setToken} from './TokenService';
import {useHistory } from 'react-router-dom'
import generateToken from './token';
import { db } from './firestore';


export const Home = () => {
    let history = useHistory();
    const [value, setValue] = useState('')

    const handleClick = () => {
        setToken(generateToken())
        history.push('/list')
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection('items')
        .where('token', '==', value)
        .get()
        .then((data) => {
            console.log(data)
            if(data.docs.length){
                setToken(value)
                history.push('/list')
            }
        })

    }

    return (
        <div>
            <Navigation/>
            <div className = "container">
                <button onClick = {handleClick}>Generate New Token</button><br></br>

                <form onSubmit = {handleSubmit}>
                    <input type = "text" onChange= {handleChange} value = {value}/>
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Home;