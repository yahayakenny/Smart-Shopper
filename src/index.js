import {firebase} from './components/firestore'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { FirestoreProvider } from 'react-firestore';

 
ReactDOM.render(
    <FirestoreProvider firebase = {firebase}>
        <App />
    </FirestoreProvider>
   ,document.getElementById('root'),
)
