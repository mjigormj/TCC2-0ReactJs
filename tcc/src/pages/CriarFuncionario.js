import React, {Component} from 'react'
import axios from 'axios'
import '../css/NovoRegistro.css'
import NavBar from '../components/NavBar'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default class CriarFuncionario extends React.Component{
       
    state = {
        cpf:'',
        funcao:''
    };

    handleCPFChange = event =>{
        this.setState({cpf: event.target.value})
    }

    handleFuncaoChange = event =>{
        this.setState({funcao: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const registro = {
            cpf: this.state.cpf,
            funcao: this.state.funcao
        };

        const {history} = this.props

        axios.post(`http://127.0.0.1:5000/funcionario/criar`, {cpf: registro.cpf, funcao: registro.funcao})
            .then(res=>{
                console.log(res.data.message)
                history.push('/funcionarios')
            })
        
    };

    render (){
        return(
        <>
            <NavBar/>
            <h1 className="title_tab">Funcionários</h1>
            <div className="tab_options">
                    <NavLink to="/funcionarios"className="tab_text">Registro de funcionários</NavLink>
                    <NavLink to="/criar/funcionario"className="tab_text">Novo funcionário</NavLink>
            </div>
            <div className="modalNovoRegistro">
                <div id="NovoRegistroSaida">
                    <strong className="titulo">Novo funcionário</strong>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="cpf">CPF</label>
                            <input name="cpf" id="cpf" onChange={this.handleCPFChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="funcao">Função</label>
                            <input name="funcao" id="funcao" required onChange={this.handleFuncaoChange}/>
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