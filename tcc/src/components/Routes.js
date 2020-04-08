import React, { Component } from 'react';
import {isAuthenticated} from '../auth';

import { BrowserRouter, Route, Router, Switch, Redirect } from "react-router-dom";

import Login from '../pages/Login'
import Home from '../pages/Home'
import NotFound from './NotFound'
import { history } from '../history'

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
            <Route component={NotFound} />
        </Switch>

    </BrowserRouter>
);

export default Routes;