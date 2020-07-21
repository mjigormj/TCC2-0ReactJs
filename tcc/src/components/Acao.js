import React from 'react';
import {NavLink} from 'react-router-dom'
import Modal, {RadBtn} from './Modal'
import "../css/acao.css";

const Acao = () => (
    <div>
        <section className="container">
            
            <NavLink to="/moradores" className="opcao" id="">
                <h3 className="opt-icon">family_restroom</h3>
                <p>Moradores</p>
            </NavLink>
            <NavLink to="/pessoas" className="opcao" id="">
                <h3 className="opt-icon">person</h3>
                <p>Pessoas</p>
            </NavLink>
            <NavLink to="/funcionarios" className="opcao" id="">
                <h3 className="opt-icon">work</h3>
                <p>Funcionários</p>
            </NavLink>
            <NavLink to="/encomendas" className="opcao" id="">
                <h3 className="opt-icon">local_shipping</h3>
                <p>Encomendas</p>
            </NavLink>

            <NavLink to="/eventos" className="opcao" id="">
                <h3 className="opt-icon">cake</h3>
                <p>Eventos</p>
            </NavLink>
            <NavLink to="/historico" className="opcao" id="">
                <h3 className="opt-icon">history</h3>
                <p>Histórico</p>
            </NavLink>
        </section>
        <script src="./Modal"/>
    </div>

);

export default Acao;