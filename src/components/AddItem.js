import React from 'react';
import Navigation from './Navigation';
import {useState} from 'react';
import {db, firebase} from './firestore';
import { getToken } from './TokenService'

export const AddItem = () => {
    const [inputValue, setInputValue] = useState('')
    const [radioBtn, setRadioBtn] = useState(7)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleRadioBtn = (e) => {
        setRadioBtn(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const shoppingList = db.collection('items');
        console.log( "You have submitted a value of "  + radioBtn)

        
        var newItem = {
            name: inputValue,
            lastPurchased: null,
            howSoon: radioBtn
        }

        shoppingList
        .where('token', "==", getToken())
        .get()
        .then((data) => {
            console.log(data)
            if(data.docs.length){
                let items = data.docs[0].data().items.map(element => element.name)

                let noCapitals = items.map(element => {
                    return element.trim()
                    .toLowerCase()
                    .replace(/[.,:'?!;\-_)({}[\]¡¿"—*%#^]*/g, '')
                })

                let noCapitalItem = inputValue.trim().toLowerCase().replace(/[.,:'?!;\-_)({}[\]¡¿"—*%#^]*/g, '')
                let filtered = noCapitals.find(element => element == noCapitalItem)
                let found = items.find(element => element == inputValue)

                if(!filtered && !found){
                shoppingList
                .doc(data.docs[0].id)
                .update({
                    items: firebase.firestore.FieldValue.arrayUnion(newItem)
                })
                } 

            } else {
                shoppingList.add({
                    token: getToken(),
                    items: [newItem]
                }).then(()=> {
                    console.log("item saved")
                }).catch((err)=> {
                    console.log(err)
                })
            }
        })
        .catch((err)=> {
            console.log(err)
        }

        )

    }

    return (
        <div>
            <Navigation/>
            <div className = "container">
               <h1>Smart Shopping List</h1>
               <label htmlFor="item-name">Enter Item Name: </label>
               <input 
                id = "item-name"
                onChange = {handleInputChange}
                value = {inputValue}
                type = "text"
                />
                <h4>How soon will you buy this Item?</h4>

                <form onSubmit = {handleSubmit}>
                   
                    <label htmlFor = "soon">
                        <input 
                        type = "radio" 
                        value = "7"
                        name = "soon" 
                        id = "soon"
                        checked = {radioBtn == 7}
                        onChange = {handleRadioBtn}
                        />
                        Soon: Within 7 days
                    </label>
                    <br></br>

                    
                    <label htmlFor = "kind-of-soon">
                         <input 
                         type = "radio"
                          value = "14" 
                         name = "kind-of-soon" 
                         id = "kind-of-soon"
                         checked = {radioBtn == 14}
                         onChange = {handleRadioBtn}
                         /> 
                         Kind of Soon: Within 14 days  
                    </label>
                    <br></br>
                
                   
                    <label htmlFor = "not-soon">
                         <input type = "radio" 
                         value = "30" 
                         name = "not-soon" 
                         id = "not-soon"
                         checked = {radioBtn == 30}
                         onChange = {handleRadioBtn}
                         
                         />
                         Not Soon: Within 30 days
                    </label>

                    <br></br>

                    <button>Add</button>
                </form>
                
               
            </div>
        </div>
    )
}
