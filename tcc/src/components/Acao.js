import React from 'react';
import {NavLink} from 'react-router-dom'
import Modal, {RadBtn} from './Modal'
import "../css/acao.css";



import cadIcon from "../img/cad.png";
import editIcon from "../img/edit.png";
import histIcon from "../img/hist.png";
import entrIcon from "../img/entr.png";
import msgIcon from "../img/msg.png";

const Acao = () => (
    <div>
        <section className="container">
            
            <Modal/>

            <div className="opcao" id="">
                <img src={editIcon} alt="editIcon" />
                <p>Editar</p>
            </div>
            <NavLink to="/historico">
            <div className="opcao" id="">
                <img src={histIcon} alt="histIcon" />
                <p>Historico</p>
            </div>
            </NavLink>
            <div className="opcao" id="">
                <img src={entrIcon} alt="entrIcon" />
                <p>Entrega</p>
            </div>

            <div className="opcao"  id="">
                <img src={msgIcon} alt="msgIcon" />
                <p>Caixa de Mensagens</p>
            </div>

            <div className="opcao" id="">
                <img src={cadIcon} alt="cadIcon" />
                <p></p>
            </div>
        </section>
        <script src="./Modal"/>
    </div>

);

export default Acao;