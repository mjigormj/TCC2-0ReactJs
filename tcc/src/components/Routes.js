import React from 'react';
import {isAuthenticated} from '../auth';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from '../pages/Login'
import Home from '../pages/Home'
import BD from '../pages/BD'
import Historico from '../pages/Historico'
import Moradores from '../pages/Moradores'
import NotFound from './NotFound'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Login} exact path="/" />
            <PrivateRoute component={Home} exact path="/Home" />
            <PrivateRoute component={BD} exact path="/BD" />
            <PrivateRoute component={Historico} exact path="/Historico" />
            <PrivateRoute component={Moradores} exact path="/Moradores" />
            <Route component={NotFound} />
        </Switch>

    </BrowserRouter>
);

export default Routes;