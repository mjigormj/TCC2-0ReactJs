import React from 'react';

import { BrowserRouter, Route, Router, Switch, Redirect } from "react-router-dom";

import Login from '../pages/Login'
import Home from '../pages/Home'
import NotFound from './NotFound'

import {history} from '../history'

const Routes = () => (
    //<BrowserRouter>
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/" />
            <Route component={Home} exact path="/Home" />
            <Route component={NotFound}/>
        </Switch>
    </Router>
    //</BrowserRouter>
);

export default Routes;