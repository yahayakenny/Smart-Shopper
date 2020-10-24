import React from 'react';
import List from './List';
import {BrowserRouter, Switch, Route} from  'react-router-dom' ;
import { AddItem } from './AddItem';
import Home from './Home';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path = '/' component = {Home} exact />
                    <Route path = '/list' component = {List} />
                    <Route path = '/add' component = {AddItem}/>
                </Switch>
            </div>
        </BrowserRouter>
        
    )
}

export default App;
