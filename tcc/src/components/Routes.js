import React from 'react';
import {isAuthenticated} from '../auth';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from '../pages/Login';
import Home from '../pages/Home';
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
import Pessoas from '../pages/pessoas';
import Pessoa from '../pages/pessoa';
import AlterarPessoa from '../pages/AlterarPessoa';
import CriarPessoa from '../pages/CriarPessoa';
import Funcionarios from '../pages/Funcionarios';
import CriarFuncionario from '../pages/CriarFuncionario'
import AlterarFuncionario from '../pages/AlterarFuncionario'
import Funcionario from '../pages/Funcionario'
import Encomendas from '../pages/Encomendas';
import Encomenda from '../pages/Encomenda'
import CriarEncomenda from '../pages/CriarEncomenda'
import AlterarEncomenda from '../pages/AlterarEncomenda'
 

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
            <PrivateRoute component={Pessoas} exact path="/pessoas" />
            <PrivateRoute component={Historico} exact path="/Historico" />
            <PrivateRoute component={Moradores} exact path="/Moradores" />
            <PrivateRoute component={RegistroEntrada} exact path="/historico/entrada/registros"/>
            <PrivateRoute component={RegistroSaida} exact path="/historico/saida/registros"/>
            <PrivateRoute component={CriarEntrada} exact path="/historico/entrada/criar"/>
            <PrivateRoute component={CriarSaida} exact path="/historico/saida/criar"/>
            <PrivateRoute component={CriarMorador} exact path="/criar/morador"/>     
            <PrivateRoute component={AlterarMorador} exact path="/alterar/morador/:idMorador"/> 
            <PrivateRoute component={Morador} exact path="/morador/:idMorador"/> 
            <PrivateRoute component={Pessoa} exact path="/pessoa/:idPessoa"/>     
            <PrivateRoute component={AlterarPessoa} exact path="/alterar/pessoa/:idPessoa"/>  
            <PrivateRoute component={CriarPessoa} exact path="/criar/pessoa"/>     
            <PrivateRoute component={Funcionarios} exact path="/funcionarios"/>   
            <PrivateRoute component={CriarFuncionario} exact path="/criar/funcionario"/>
            <PrivateRoute component={AlterarFuncionario} exact path="/alterar/funcionario/:idFuncionario"/>           
            <PrivateRoute component={Funcionario} exact path="/funcionario/:idFuncionario"/> 
            <PrivateRoute component={Encomendas} exact path="/encomendas"/> 
            <PrivateRoute component={Encomenda} exact path="/encomenda/:idEncomenda"/> 
            <PrivateRoute component={CriarEncomenda} exact path="/criar/encomenda"/> 
            <PrivateRoute component={AlterarEncomenda} exact path="/alterar/encomenda/:idEncomenda"/> 
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;