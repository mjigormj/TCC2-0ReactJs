import React from 'react';
import "../css/acao.css";
import cadIcon from "../img/cad.png";
import editIcon from "../img/edit.png";

const Acao = () => (
    <div>
        <section className="container">
            
            <div className="opcao">
                <img src={cadIcon} alt="cadIcon"/>
                <p>Cadastrar</p>
            </div>

            <div className="opcao">
                <img src={editIcon} alt="editIcon"/>
                <p>Editar</p>
            </div>

            <div className="opcao">
                <img src={cadIcon} alt="cadIcon"/>
                    
            </div>        

            <div className="opcao">
                <img src={cadIcon} alt="cadIcon"/>
            </div>
            
            <div className="opcao">
                <img src={cadIcon} alt="cadIcon"/>
            </div>

            <div className="opcao">
                <img src={cadIcon} alt="cadIcon"/>
            </div>
        </section>
    </div>
);

export default Acao;