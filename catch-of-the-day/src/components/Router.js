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
            {/*App의 props의 match의 params에 storeId = 123으로 들어있다!  */}
            <Route exact path="/store/:storeId" component={App}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;