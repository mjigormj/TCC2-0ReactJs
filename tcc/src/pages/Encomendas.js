import React, { Component, useState, useEffect } from 'react';
import "../css/moradores.css";
import NavBar from '../components/NavBar' 
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import CardEncomenda from '../components/CardEncomenda'
import Endbar from '../components/Endbar';

export default function Encomendas() {

    const[encomendas, setEncomendas] = useState([])
    useEffect(function(){load()}, [])
    
    async function load(){
        try {
            const response =  await axios.get("http://localhost:5000/mail/mostrar")
            console.log(response.data)
            setEncomendas(response.data)
            }
        catch(erro){
            console.log(erro)
        }
    }
    return(
        <>
            <NavBar />
            <h1 className="title_tab">Encomendas</h1>
            <div className="tab_options">
                    <NavLink to="/encomendas"className="tab_text">Registro de encomendas</NavLink>
                    <NavLink to="/criar/encomenda"className="tab_text">Nova encomenda</NavLink>
            </div>
            <div className="morador_content">
                {encomendas.map(
                                function (encomenda){
                                    return <CardEncomenda data={encomenda}/>             
                                }
                            )}
            </div>
            <Endbar/>
        </>
        );   
}

