import React, {Component, useState} from 'react'
import axios from 'axios'
import '../css/NovoRegistro.css'
import NavBar from '../components/NavBar'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default function AlterarConvidado(props){

    const idEvento = props.match.params.idEvento
    const idConvidado = props.match.params.idConvidado

    const [nome, setNome] = useState('')
    const [rg, setRg] = useState('')

    function handleNomeChange (event) {
        setNome(event.target.value)
    }

    function handleRgChange (event) {
        setRg(event.target.value)
    }

    function handleSubmit (event)  {
        event.preventDefault();

        const registro = {
            nome:nome,
            rg:rg
        };

        const {history} = props

        axios.put(`http://127.0.0.1:5000/convidado/${idEvento}/alterar/${idConvidado}`, {nome: registro.nome, rg: registro.rg})
            .then(res=>{
                if(res.data.status === 200) { history.push(`/evento/${idEvento}/convidados`); return 200 }
            })
        
    };

        return(
        <>  
            <NavBar/>
            <h1 className="title_tab">Convidados</h1>
            <div className="modalNovoRegistro">
                <div id="NovoRegistroSaida">
                    <strong className="titulo">Alterar informações do convidado</strong>
                    <form onSubmit={handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="nome">Nome</label>
                            <input name="nome" id="nome" onChange={handleNomeChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="rg">RG</label>
                            <input name="rg" id="rg" onChange={handleRgChange}/>
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
