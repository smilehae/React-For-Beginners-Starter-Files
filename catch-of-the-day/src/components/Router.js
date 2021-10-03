import {BrowserRouter,Route,Switch} from 'react-router-dom';
import StorePicker from './StorePicker';
import React from 'react';
import App from './App';
import NotFound from './NotFound';

//stateless function 스타일
const Router=()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            <Route exact path="/store/:storeId" component={App}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;