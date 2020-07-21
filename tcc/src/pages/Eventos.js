import React, { Component, useState, useEffect } from 'react';
import "../css/moradores.css";
import NavBar from '../components/NavBar' 
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import CardEvento from '../components/CardEvento'
import Endbar from '../components/Endbar';

export default function Eventos() {

    const[eventos, setEventos] = useState([])
    useEffect(function(){load()}, [])
    
    async function load(){
        try {
            const response =  await axios.get("http://localhost:5000/evento/mostrar")
            console.log(response.data)
            setEventos(response.data)
            }
        catch(erro){
            console.log(erro)
        }
    }
    return(
        <>
            <NavBar/>
            <h1 className="title_tab">Eventos</h1>
            <div className="tab_options">
                    <NavLink to="/eventos" className="tab_text">Registro de eventos</NavLink>
                    <NavLink to="/criar/evento" className="tab_text">Novo evento</NavLink>
            </div>
            <div className="morador_content">
                {eventos.map(
                            function (evento){
                                return <CardEvento data={evento}/>             
                                }
                            )}
            </div>
            <Endbar/>
        </>
        );   
}

