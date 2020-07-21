import React, {Component, useState} from 'react'
import axios from 'axios'
import '../css/NovoRegistro.css'
import NavBar from '../components/NavBar'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default function AlterarEvento(props){

    const idEvento = props.match.params.idEvento

    const [cpf, setCpf] = useState('')
    const [data, setData] = useState('')
    const [inicio, setInicio] = useState('')
    const [final, setFinal] = useState('')
    const [predio, setPredio] = useState('')


    function handleCpfChange (event) {
        setCpf(event.target.value)
    }

    function handleDataChange (event) {
        setData(event.target.value)
    }

    function handleInicioChange (event) {
        setInicio(event.target.value)
    }

    function handleFinalChange (event) {
        setFinal(event.target.value)
    }

    function handlePredioChange (event) {
        setPredio(event.target.value)
    }


    function handleSubmit (event)  {
        event.preventDefault();

        const registro = {
            cpf:cpf,
            data:data,
            inicio:inicio,
            final:final,
            predio:predio
        };

        const {history} = props

        axios.put(`http://127.0.0.1:5000/evento/alterar/${idEvento}`, {cpf: registro.cpf, data: registro.data, inicio: registro.inicio, final:registro.final, predio:registro.predio})
            .then(res=>{
                if(res.data.status === 200) { history.push('/eventos' ); return 200 }
            })
        
    };

        return(
        <>  
            <NavBar/>
            <h1 className="title_tab">Eventos</h1>
            <div className="tab_options">
                    <NavLink to="/eventos"className="tab_text">Registro de eventos</NavLink>
                    <NavLink to="/criar/evento"className="tab_text">Novo evento</NavLink>
            </div>
            <div className="modalNovoRegistro">
                <div id="NovoRegistroSaida">
                    <strong className="titulo">Alterar informações do evento</strong>
                    <form onSubmit={handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="cpf">CPF do organizador</label>
                            <input name="cpf" id="cpf" onChange={handleCpfChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="data">Data</label>
                            <input type="date" name="data" id="data" onChange={handleDataChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="inicio">Início</label>
                            <input type="time" max="23:59" name="inicio" id="inicio" onChange={handleInicioChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="final">Final</label>
                            <input type="time" max="23:59" name="final" id="final" onChange={handleFinalChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="predio">Local</label>
                            <input type="number" min="1" max="20" name="predio" id="predio" placeholder="Número do predio" onChange={handlePredioChange}/>
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
