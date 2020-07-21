import React, {Component, useState} from 'react'
import axios from 'axios'
import '../css/NovoRegistro.css'
import NavBar from '../components/NavBar'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default function AlterarFuncionario(props){

    const idFuncionario = props.match.params.idFuncionario

    const [funcao, setFuncao] = useState('')

    function handleFuncaoChange (event) {
        setFuncao(event.target.value)
    }

    function handleSubmit (event)  {
        event.preventDefault();

        const registro = {
            funcao:funcao
        };

        const {history} = props

        axios.put(`http://127.0.0.1:5000/funcionario/alterar/${idFuncionario}`, {funcao: registro.funcao})
            .then(res=>{
                if(res.data.status === 200) { history.push('/funcionarios' ); return 200 }
            })
        
    };

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
                    <strong className="titulo">Alterar informações do funcionário</strong>
                    <form onSubmit={handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="apartamento">Função</label>
                            <input name="funcao" id="funcao" onChange={handleFuncaoChange}/>
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
