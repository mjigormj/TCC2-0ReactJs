import React, {Component} from 'react'
import axios from 'axios'
import '../css/NovoRegistro.css'
import NavBar from '../components/NavBar'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default class CriarPessoa extends React.Component{
       
    state = {
        nome:'',
        cpf:'',
        rg:'',
        tipopessoa: '',
        foto:''
    };

    handleNomeChange = event =>{
        this.setState({nome: event.target.value})
    }

    handleCpfChange = event =>{
        this.setState({cpf: event.target.value})
    }

    handleRgChange = event =>{
        this.setState({rg: event.target.value})
    }

    handleTipoPessoaClick = event =>{
        this.setState({tipopessoa: event.target.value})
    }
    handleFotoChange = event =>{
        this.setState({foto: event.target.value})
    }


    handleSubmit = event => {
        event.preventDefault();

        const registro = {
            nome: this.state.nome,
            cpf: this.state.cpf,
            rg: this.state.rg,
            tipopessoa: this.state.tipopessoa,
            foto: this.state.foto
        };

        const {history} = this.props

        axios.post(`http://127.0.0.1:5000/user/criar`, {nome: registro.nome, cpf: registro.cpf, rg: registro.rg, tipopessoa:registro.tipopessoa, foto:this.state.foto})
            .then(res=>{
                console.log(res.data.foto)
                console.log(res.data.message)
                history.push('/pessoas')
            })
        
    };

    render (){
        return(
        <>
            <NavBar/>
            <h1 className="title_tab">Pessoas</h1>
            <div className="tab_options">
                    <NavLink to="/pessoas"className="tab_text">Registro de pessoas</NavLink>
                    <NavLink to="/criar/pessoa"className="tab_text">Nova pessoa</NavLink>
            </div>
            <div className="modalNovoRegistro">
                <div id="NovoRegistroSaida">
                    <strong className="titulo">Nova pessoa</strong>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="nome">Nome</label>
                            <input name="nome" id="nome" required onChange={this.handleNomeChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="cpf">CPF</label>
                            <input name="nome" id="nome" required onChange={this.handleCpfChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="rg">RG</label>
                            <input name="rg" id="rg" required onChange={this.handleRgChange}/>
                        </div>
                        <div className="input-block">
                            <div className="input-tipo-row">
                                <div className="input-tipo">
                                    <input type="radio" id="morador" name="tipo" value="Morador"  onClick={this.handleTipoPessoaClick}/>
                                    <label for="morador">Morador</label>
                                </div>
                                <div className="input-tipo">
                                    <input type="radio" id="visitante" name="tipo" value="Visitante"  onClick={this.handleTipoPessoaClick}/>
                                    <label for="visitante">Visitante</label>
                                </div>
                                <div className="input-tipo">
                                    <input type="radio" id="funcionario" name="tipo" value="Funcionário"  onClick={this.handleTipoPessoaClick}/>
                                    <label for="funcionario">Funcionário</label>
                                </div>
                            </div>
                        </div>
                        <div className="input-block">
                            <div className="input-block-row">
                                <label for="foto" className="lbl-file"><span className="add_photo">publish</span><p>Selecione uma foto</p></label> 
                                <input type="file" name="foto" id="foto" accept="image/*" onChange={this.handleFotoChange}/>
                            </div>
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