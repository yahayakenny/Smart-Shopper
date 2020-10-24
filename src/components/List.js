import React from 'react';
import {FirestoreCollection} from 'react-firestore';
import Navigation from './Navigation';
import { getToken } from './TokenService';

export const List = () => {
    return (
        <div>
            <Navigation/>
            <FirestoreCollection
            path="items"
            filter = {['token', '==', getToken()]}
            render={({ isLoading, data }) => {
                return isLoading ? (
                    <div>Loading</div>
                ) : (
                <div className="container">
                    {console.log(data)}
                    { data[0] ? <ul>
                        {console.log(data[0])}
                        {data[0].items.map(item => (
                            <li key={item.name}>
                                {item.name}
                            </li>
                    ))}
                    </ul> : "No shopping List"} 
                </div>
                );
            }}
            />
        </div>
    )
}

export default List;