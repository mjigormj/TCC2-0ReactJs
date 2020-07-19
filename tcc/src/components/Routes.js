import React from 'react';
import {isAuthenticated} from '../auth';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from '../pages/Login';
import Home from '../pages/Home';
import BD from '../pages/BD';
import Historico from '../pages/Historico';
import Moradores from '../pages/Moradores';
import NotFound from './NotFound';
import RegistroEntrada from '../pages/RegistroEntrada';
import RegistroSaida from '../pages/RegistroSaida';
import CriarEntrada from '../pages/CriarEntrada';
import CriarSaida from '../pages/CriarSaida';
import CriarMorador from '../pages/CriarMorador';
import AlterarMorador from '../pages/AlterarMorador';
import Morador from '../pages/Morador';



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
            <PrivateRoute component={RegistroEntrada} exact path="/historico/entrada/registros"/>
            <PrivateRoute component={RegistroSaida} exact path="/historico/saida/registros"/>
            <PrivateRoute component={CriarEntrada} exact path="/historico/entrada/criar"/>
            <PrivateRoute component={CriarSaida} exact path="/historico/saida/criar"/>
            <PrivateRoute component={CriarMorador} exact path="/criar/morador"/>     
            <PrivateRoute component={AlterarMorador} exact path="/alterar/morador/:idMorador"/> 
            <PrivateRoute component={Morador} exact path="/morador/:idMorador"/>                     
            <Route component={NotFound} />
        </Switch>

    </BrowserRouter>
);

export default Routes;