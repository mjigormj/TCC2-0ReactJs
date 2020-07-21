import React, {Component, useState} from 'react'
import axios from 'axios'
import '../css/NovoRegistro.css'
import NavBar from '../components/NavBar'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default function AlterarEncomenda (props){

    const idEncomenda = props.match.params.idEncomenda

    const [apartamento, setApartamento] = useState('')
    const [predio, setPredio] = useState('')

    function handleApartamentoChange (event) {
        setApartamento(event.target.value)
    }

    function handlePredioChange (event) {
        setPredio(event.target.value)
    }

    function handleSubmit (event)  {
        event.preventDefault();

        const registro = {
            apartamento:apartamento,
            predio:predio
        };

        const {history} = props

        axios.put(`http://127.0.0.1:5000/mail/alterar/${idEncomenda}`, {apartamento: registro.apartamento, predio: registro.predio})
            .then(res=>{
                if(res.data.status === 200) { history.push('/encomendas' ); return 200 }
            })
        
    };

        return(
        <>  
            <NavBar/>
            <h1 className="title_tab">Encomendas</h1>
            <div className="tab_options">
                    <NavLink to="/encomendas"className="tab_text">Registro de encomendas</NavLink>
                    <NavLink to="/criar/encomenda"className="tab_text">Nova encomenda</NavLink>
            </div>
            <div className="modalNovoRegistro">
                <div id="NovoRegistroSaida">
                    <strong className="titulo">Alterar informações da encomenda</strong>
                    <form onSubmit={handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="apartamento">Apartamento</label>
                            <input type="number" min="1" max="20" name="apartamento" id="apartamento" onChange={handleApartamentoChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="predio">Prédio</label>
                            <input type="number" min="1" max="20" name="predio" id="predio" onChange={handlePredioChange}/>
                        </div>
                        <div id="btn-container" >
                            <button id="entrar" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                </div>
                <Endbar/>
            <script src="btn.js"></script>
        </>
        );
    }
