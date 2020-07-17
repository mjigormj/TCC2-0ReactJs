import React, { Component, useEffect, useState } from 'react'
import "../css/historico.css";
import NavBar from '../components/NavBar'
import axios from 'axios'
import CardHistorico from '../components/CardEntrada'
import {NavLink} from 'react-router-dom'
import CardSaida from '../components/CardSaida';



export default function RegistroSaida (props) {
   
    const[saidas, setSaidas] = useState([])
    useEffect(function(){load()}, [])
    
    async function load(){
        try {
            const resposta =  await axios.get("http://localhost:5000/acesso/saida/mostrar")
            console.log(resposta.data)
            setSaidas(resposta.data)
            }
        catch(erro){
            console.log(erro)
        }
    }

    return (
        <div>
            <NavBar/>
            <h1 className="title_tab">Saída</h1>
            <div className="tabncontent">
                <div className="tab_options">
                    <NavLink to="/historico/saida/registros"className="tab_text">Histórico</NavLink>
                    <NavLink to="/historico/saida/criar"className="tab_text">Criar registro</NavLink>
                </div>
                <div className="content">
                {saidas.map(
                    function (saida){
                        return <CardSaida data={saida}/>               
                    }
                )}
            </div>
         </div>
        </div>
    );
}
