import React, {Component, useState} from 'react'
import axios from 'axios'
import '../css/NovoRegistro.css'
import NavBar from '../components/NavBar'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default function CriarConvidado (props){

    const idEvento = props.match.params.idEvento
    const [nome, setNome] = useState('')
    const [rg, setRg] = useState('')


    function handleNomeChange (event){
        setNome(event.target.value)
    }

    function handleRgChange (event){
        setRg(event.target.value)
    }

    function handleSubmit (event){
        event.preventDefault();

        const registro = {
            nome: nome,
            rg: rg
        }

        const {history} = props

        axios.post(`http://127.0.0.1:5000/convidado/criar`, {id: idEvento, nome: registro.nome, rg: registro.rg})
            .then(res=>{
                history.push(`/evento/${idEvento}/convidados`)
            })
        
    };

        return(
        <>
            <NavBar/>
            <h1 className="title_tab">Convidados</h1>
            <div className="modalNovoRegistro">
                <div id="NovoRegistroSaida">
                    <strong className="titulo">Novo convidado</strong>
                    <form onSubmit={handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="nome">Nome</label>
                            <input name="nome" id="nome" required onChange={handleNomeChange}/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="rg">RG</label>
                            <input name="rg" id="rg" required onChange={handleRgChange}/>
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
