import React, { Component, useState, useEffect } from 'react';
import "../css/moradores.css";
import "../css/convidados.css"
import NavBar from '../components/NavBar' 
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import CardConvidado from '../components/CardConvidado'
import Endbar from '../components/Endbar';

export default function Convidados(props) {

    const {idEvento} = props.match.params

    const[convidados, setConvidados] = useState([])
    useEffect(function(){load()}, [])
    
    async function load(){
        try {
            const response = await axios.get(`http://localhost:5000/convidado/${idEvento}/mostrar`)
            console.log(response.data)
            setConvidados(response.data)
            }
        catch(erro){
            console.log(erro)
        }
    }
    return(
        <>
            <NavBar />
            <h1 className="title_tab">Convidados</h1>
            <NavLink to={`/evento/${idEvento}/criar/convidado`} className="add_convidado">Adicionar convidado<span>person_add</span></NavLink>
            <div className="morador_content">
                {convidados.map(
                                function (convidado){
                                    return <CardConvidado data={convidado}/>             
                                }
                            )}
            </div>
            <Endbar/>
        </>
        );   
}

