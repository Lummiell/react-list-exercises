import React from 'react'
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from './Pages/Home'
import Sets from './Pages/Sets';
const Router = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path ='/' exact component={Home}/>
                <Route path='/Sets' component={Sets}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;