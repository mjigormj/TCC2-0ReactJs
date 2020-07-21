import React, {Component, useState} from 'react'
import axios from 'axios'
import '../css/NovoRegistro.css'
import NavBar from '../components/NavBar'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default function AlterarPessoa (props){

    const idPessoa = props.match.params.idPessoa

    const [cpf, setCPF] = useState('')
    const [rg, setRG] = useState('')
    const [tipo, setTipo] = useState('')
    const [foto, setFoto] = useState('')
    const [nome, setNome] = useState('')

    function handleCpfChange (event) {
        setCPF(event.target.value)
    }

    function handleNomeChange (event) {
        setNome(event.target.value)
    }
    
    function handleRgChange (event) {
        setRG(event.target.value)
    }

    function handleFotoChange (event) {
        setFoto(event.target.value)
    }

    function handleTipoPessoaClick(event){
        setTipo(event.target.value)
    }

    function handleSubmit (event)  {
        event.preventDefault();

        const registro = {
            cpf:cpf,
            rg:rg,
            tipo:tipo,
            foto:foto,
            nome:nome
        };
    
        const {history} = props

        axios.put(`http://127.0.0.1:5000/user/alterar/${idPessoa}`, {nome: registro.nome, cpf: registro.cpf, rg: registro.rg, foto: registro.foto, tipopessoa: registro.tipo})
            .then(res=>{
                if(res.data.status === 200) { history.push('/pessoas' ); return 200 }
            })
        
    };

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
                    <strong className="titulo">Alterar informações da pessoa</strong>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="input-block">
                            <label htmlFor="nome">Nome</label>
                            <input name="nome" id="nome" onChange={handleNomeChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="predio">RG</label>
                            <input name="predio" id="predio" onChange={handleRgChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="cpf">CPF</label>
                            <input name="cpf" id="cpf" onChange={handleCpfChange}/>
                        </div>
                        <div className="input-block">
                            <div className="input-tipo-row">
                                <div className="input-tipo">
                                    <input type="radio" id="morador" name="tipo" value="Morador"  onClick={handleTipoPessoaClick}/>
                                    <label for="morador">Morador</label>
                                </div>
                                <div className="input-tipo">
                                    <input type="radio" id="visitante" name="tipo" value="Visitante"  onClick={handleTipoPessoaClick}/>
                                    <label for="visitante">Visitante</label>
                                </div>
                                <div className="input-tipo">
                                    <input type="radio" id="funcionario" name="tipo" value="Funcionário"  onClick={handleTipoPessoaClick}/>
                                    <label for="funcionario">Funcionário</label>
                                </div>
                            </div>
                        </div>
                        <div className="input-block">
                            <div className="input-block-row">
                                <label className="lbl-file"><span className="add_photo">publish</span><p>Selecione uma foto</p></label> 
                                <input type="file" name="foto" id="foto" accept="image/*" onChange={handleFotoChange}/>
                            </div>
                        </div>
                        <div id="btn-container">
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
