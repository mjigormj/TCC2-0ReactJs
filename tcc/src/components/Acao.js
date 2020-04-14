import React from 'react';
import Modal from '../components/Modal'
import "../css/acao.css";


import cadIcon from "../img/cad.png";
import editIcon from "../img/edit.png";
import histIcon from "../img/hist.png";
import entrIcon from "../img/entr.png";
import msgIcon from "../img/msg.png";

const Acao = () => (
    <div>
        <section className="container">
            
            <div className="opcao">
                <img src={cadIcon} alt="cadIcon" />
                <p>Cadastrar</p>
            </div>

            <div className="opcao">
                <img src={editIcon} alt="editIcon" />
                <p>Editar</p>
            </div>

            <div className="opcao">
                <img src={histIcon} alt="histIcon" />
                <p>Historico</p>
            </div>

            <div className="opcao">
                <img src={entrIcon} alt="entrIcon" />
                <p>Entrega</p>
            </div>

            <div className="opcao">
                <img src={msgIcon} alt="msgIcon" />
                <p>Caixa de Mensagens</p>
            </div>

            <div className="opcao">
                <img src={cadIcon} alt="cadIcon" />
                <p></p>
            </div>
        </section>
    </div>

);

export default Acao;