import React, {Component} from 'react'
import axios from 'axios'
import '../css/NovoRegistro.css'
import NavBar from '../components/NavBar'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default class CriarEvento extends React.Component{
       
    state = {
        cpf:'',
        data:'',
        inicio: '',
        final:'',
        predio: ''
    };

    handleCpfChange = event =>{
        this.setState({cpf: event.target.value})
    }

    handleDataChange = event =>{
        this.setState({data: event.target.value})
    }

    handleInicioChange = event =>{
        this.setState({inicio: event.target.value})
    }

    handleFinalChange    = event =>{
        this.setState({final: event.target.value})
    }
    handlePredioChange = event =>{
        this.setState({predio: event.target.value})
    }


    handleSubmit = event => {
        event.preventDefault();

        const registro = {
            cpf: this.state.cpf,
            data: this.state.data,
            inicio: this.state.inicio,
            final: this.state.final,
            predio: this.state.predio
        };

        const {history} = this.props

        axios.post(`http://127.0.0.1:5000/evento/criar`, {cpf: registro.cpf, data: registro.data, inicio: registro.inicio, final:registro.final, predio:registro.predio})
            .then(res=>{
                history.push('/eventos')
            })
        
    };

    render (){
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
                    <strong className="titulo">Novo evento</strong>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="cpf">CPF do organizador</label>
                            <input name="cpf" id="cpf" required onChange={this.handleCpfChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="data">Data</label>
                            <input type="date" name="data" id="data" required onChange={this.handleDataChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="inicio">Início</label>
                            <input type="time" max="23:59" name="inicio" id="inicio" required onChange={this.handleInicioChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="final">Final</label>
                            <input type="time" max="23:59" name="final" id="final" required onChange={this.handleFinalChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="predio">Local</label>
                            <input type="number" min="1" max="20" name="predio" id="predio" placeholder="Número do predio" required onChange={this.handlePredioChange}/>
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
}