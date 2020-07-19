import React, { Component, useEffect, useState } from 'react'
import "../css/historico.css";
import NavBar from '../components/NavBar'
import axios from 'axios'
import CardEntrada from '../components/CardEntrada'
import CardSaida from '../components/CardSaida'
import {NavLink} from 'react-router-dom'
import Endbar from '../components/Endbar';



export default function Historico (props) {
   
    const[entradas, setEntradas] = useState([])
    const[saidas, setSaidas] = useState([])
    useEffect(function(){load()}, [])
    
    async function load(){
        try {
            const rEntradas =  await axios.get("http://localhost:5000/acesso/entrada/mostrar")
            const rSaidas = await axios.get("http://localhost:5000/acesso/saida/mostrar")
            console.log(rEntradas.data)
            console.log(rSaidas.data)
            setSaidas(rSaidas.data)
            setEntradas(rEntradas.data)
            }
        catch(erro){
            console.log(erro)
        }
    }

    return (
        <div>
            <NavBar/>
            <div className="general_tab">
                <div className="general_content">
                    <NavLink to="/historico/entrada/registros" className="gen_opt">Entradas</NavLink>
                            {entradas.map(
                                function (entrada){
                                    return <CardEntrada data = {entrada}/>               
                                }
                            )}
                </div>
                    <div className="general_content">
                    <NavLink to="/historico/saida/registros" className="gen_opt">Saídas</NavLink>
                        {saidas.map(
                            function (saida){
                                return <CardSaida data= {saida}/>               
                            }
                        )}
                </div>
            </div>
            <Endbar/>
        </div>
    );
}
