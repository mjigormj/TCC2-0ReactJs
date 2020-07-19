import React, { Component, useState, useEffect } from 'react';
import "../css/moradores.css";
import NavBar from '../components/NavBar' 
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import CardMorador from '../components/CardMorador'
import Endbar from '../components/Endbar';

export default function Moradores() {

    const[moradores, setMoradores] = useState([])
    useEffect(function(){load()}, [])
    
    async function load(){
        try {
            const response =  await axios.get("http://localhost:5000/morador/mostrar")
            console.log(response.data)
            setMoradores(response.data)
            }
        catch(erro){
            console.log(erro)
        }
    }
    return(
        <>
            <NavBar />
            <h1 className="title_tab">Moradores</h1>
            <div className="tab_options">
                    <NavLink to="/moradores"className="tab_text">Registro de moradores</NavLink>
                    <NavLink to="/criar/morador"className="tab_text">Novo morador</NavLink>
            </div>
            <div className="morador_content">
            {moradores.map(
                            function (morador){
                                return <CardMorador data={morador}/>               
                            }
                        )}
            </div>
            <Endbar/>
        </>
        );   
}

