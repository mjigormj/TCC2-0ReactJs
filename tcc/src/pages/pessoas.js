import React, { Component, useState, useEffect } from 'react';
import "../css/Home.css";
import NavBar from  '../components/NavBar';
import Endbar from '../components/Endbar';
import {NavLink} from 'react-router-dom';
import axios from 'axios'
import CardPessoa from '../components/CardPessoa'

export default function Pessoas(props) {

    const[pessoas, setPessoas] = useState([])
    useEffect(function(){load()}, [])
    
    async function load(){
        try {
            const response =  await axios.get("http://localhost:5000/user/mostrar")
            console.log(response.data)
            setPessoas(response.data)
            }
        catch(erro){
            console.log(erro)
        }
    }

        return (
            <div>
               <NavBar/>
               <h1 className="title_tab">Pessoas</h1>
                <div className="tab_options">
                        <NavLink to="/pessoas"className="tab_text">Registro de pessoas</NavLink>
                        <NavLink to="/criar/pessoa"className="tab_text">Nova pessoa</NavLink>
                </div>
                <div className="morador_content">
                {pessoas.map(
                            function (pessoa){
                                return <CardPessoa data={pessoa}/>               
                                }
                            )}
                </div>
                <Endbar/>
            </div>
        );
    }
