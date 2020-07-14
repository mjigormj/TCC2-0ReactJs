import React, { Component, useEffect, useState } from 'react';
import "../css/Home.css";
import NavBar from '../components/NavBar'
import axios from 'axios'
import CardHistorico from '../components/CardHistorico';



export default function Historico (props) {
   
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

    return (
        <div>
            <NavBar/>
            <div className="content">
            {entradas.map(
                function (entrada){
                    return <CardHistorico data = {entrada}/>               
                }
            )}
        </div>
        </div>
    );
}
