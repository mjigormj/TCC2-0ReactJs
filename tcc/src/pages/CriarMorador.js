import React, {Component} from 'react'
import axios from 'axios'
import '../css/NovoRegistro.css'
import NavBar from '../components/NavBar'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default class CriarMorador extends React.Component{
       
    state = {
        cpf:'',
        apartamento:'',
        predio:''
    };

    handleCPFChange = event =>{
        this.setState({cpf: event.target.value})
    }

    handleApartamentoChange = event =>{
        this.setState({apartamento: event.target.value})
    }

    handlePredioChange = event =>{
        this.setState({predio: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const registro = {
            cpf: this.state.cpf,
            apartamento: this.state.apartamento,
            predio: this.state.predio
        };

        const {history} = this.props

        axios.post(`http://127.0.0.1:5000/morador/criar`, {cpf: registro.cpf, apartamento: registro.apartamento, predio: registro.predio})
            .then(res=>{
                console.log(res.data.message)
                history.push('/moradores')
            })
        
    };

    render (){
        return(
        <>
            <NavBar/>
            <h1 className="title_tab">Moradores</h1>
            <div className="tab_options">
                    <NavLink to="/moradores"className="tab_text">Registro de moradores</NavLink>
                    <NavLink to="/criar/morador"className="tab_text">Novo morador</NavLink>
            </div>
            <div className="modalNovoRegistro">
                <div id="NovoRegistroSaida">
                    <strong className="titulo">Novo morador</strong>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="cpf">CPF</label>
                            <input name="cpf" id="cpf" required onChange={this.handleCPFChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="apartamento">Apartamento</label>
                            <input type="number" min="1" max="20" name="apartamento" id="apartamento" required onChange={this.handleApartamentoChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="predio">Prédio</label>
                            <input type="number" name="predio" id="predio" min="1" max="20" required onChange={this.handlePredioChange}/>
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