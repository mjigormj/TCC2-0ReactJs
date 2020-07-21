import React, { Component, useState, useEffect } from 'react';
import "../css/moradores.css";
import NavBar from '../components/NavBar' 
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import CardFuncionario from '../components/CardFuncionario'
import Endbar from '../components/Endbar';

export default function Funcionarios() {

    const[funcionarios, setFuncionarios] = useState([])
    useEffect(function(){load()}, [])
    
    async function load(){
        try {
            const response =  await axios.get("http://localhost:5000/funcionario/mostrar")
            console.log(response.data)
            setFuncionarios(response.data)
            }
        catch(erro){
            console.log(erro)
        }
    }
    return(
        <>
            <NavBar />
            <h1 className="title_tab">Funcionários</h1>
            <div className="tab_options">
                    <NavLink to="/funcionarios"className="tab_text">Registro de Funcionários</NavLink>
                    <NavLink to="/criar/funcionario"className="tab_text">Novo funcionário</NavLink>
            </div>
            <div className="morador_content">
                {funcionarios.map(
                                function (funcionario){
                                    return <CardFuncionario data={funcionario}/>             
                                }
                            )}
            </div>
            <Endbar/>
        </>
        );   
}

