import React, {Component} from 'react'
import '../css/historico.css'
import NavBar from '../components/NavBar'
import '../css/NovoRegistro.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

export default class CriarEntrada extends React.Component{
    
    state = {
        apartamento:'',
        cpf:'',
        predio:''
    };

    handleChange = event =>{
        this.setState({cpf: event.target.value, apartamento: event.target.value, predio: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const registro = {
            cpf: this.state.cpf,
            apartamento: this.state.apartamento,
            predio: this.state.predio

        };

        const {history} = this.props

        axios.post(`http://127.0.0.1:5000/acesso/entrada/criar`, {cpf: registro.cpf, apartamento: registro.apartamento, predio: registro.predio})
            .then(res=>{
                console.log(res.data.message)
            })
        
    };

    render (){
        return(
        <>
            <NavBar/>
            <h1 className="title_tab">Entradas</h1>
            <div className="tabncontent">
            <div className="tab_options">
                    <NavLink to="/historico/entrada/registros"className="tab_text">Histórico</NavLink>
                    <NavLink to="/historico/entrada/criar"className="tab_text">Criar registro</NavLink>
            </div>
            <div className="modalNovoRegistro">
                <div id="NovoRegistro">
                    <strong className="titulo">Novo registro</strong>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="cpf">CPF</label>
                            <input name="cpf" id="cpf" required onChange={this.handleChange}/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="apartamento">Apartamento</label>
                            <input type="number" name="apartamento" min="1" max="20" id="apartamento" required onChange={this.handleChange}/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="predio">Prédio</label>
                            <input type="number" name="predio" min="1" max="20" id="predio" required onChange={this.handleChange}/>
                        </div>

                        <div id="btn-container" >
                            <button id="entrar" type="submit">Entrar</button>
                        </div>

                    </form>
                </div>
                </div>
            </div>
            <script src="btn.js"></script>
        </>
        )
    }
}