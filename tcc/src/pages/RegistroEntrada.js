import React, {useEffect, useState} from 'react'
import '../css/historico.css'
import NavBar from '../components/NavBar'
import axios from 'axios'
import CardHistorico from '../components/CardEntrada'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar'

export default function RegistroEntrada(){
    const[entradas, setEntradas] = useState([])
    useEffect(function(){load()}, [])
    
    async function load(){
        try {
            const resposta =  await axios.get("http://localhost:5000/acesso/entrada/mostrar")
            console.log(resposta.data)
            setEntradas(resposta.data)
            }
        catch(erro){
            console.log(erro)
        }
    }


    return(
        <div>
        <NavBar/>
        <h1 className="title_tab">Entradas</h1>
        <div className="tabncontent">
        <div className="tab_options">
            <NavLink to="/historico/entrada/registros"className="tab_text">Histórico</NavLink>
            <NavLink to="/historico/entrada/criar"className="tab_text">Criar registro</NavLink>
        </div>
        <div className="content">
        {entradas.map(
            function (entrada){
                return <CardHistorico data = {entrada}/>               
            }
        )}
         </div>
         </div>
         <Endbar/>
    </div>
    )
}