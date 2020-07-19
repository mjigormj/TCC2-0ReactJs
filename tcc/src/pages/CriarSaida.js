import React, {Component} from 'react'
import '../css/historico.css'
import NavBar from '../components/NavBar'
import '../css/NovoRegistro.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default class CriarEntrada extends React.Component{
    
    state = {
        cpf:'',
    };

    handleChange = event =>{
        this.setState({cpf: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const registro = {
            cpf: this.state.cpf,
        };

        const {history} = this.props

        axios.post(`http://127.0.0.1:5000/acesso/saida/criar`, {cpf: registro.cpf})
            .then(res=>{
                console.log(res.data.message)
            })
        
    };

    render (){
        return(
        <div>
            <NavBar/>
            <h1 className="title_tab">Saídas</h1>
            <div className="tabncontent">
            <div className="tab_options">
                    <NavLink to="/historico/saida/registros"className="tab_text">Histórico</NavLink>
                    <NavLink to="/historico/saida/criar"className="tab_text">Criar registro</NavLink>
            </div>
            <div className="modalNovoRegistro">
                <div id="NovoRegistroSaida">
                    <strong className="titulo">Novo registro</strong>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="cpf">CPF</label>
                            <input name="cpf" id="cpf" required onChange={this.handleChange}/>
                        </div>
                        <div id="btn-container" >
                            <button id="entrar" type="submit">Enviar</button>
                        </div>

                    </form>
                </div>
                </div>
            </div>
            <script src="btn.js"></script>
            <Endbar/>
        </div>
        )
    }
}