import React, {useEffect, useState} from 'react'
import "../css/Card.css"
import '../css/moradores.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import NavBar from '../components/NavBar'



export default function Evento(props){
    const {idEvento} = props.match.params
    const[evento, setEvento] = useState([])
    useEffect(function(){load()}, [])
    
    const {history} = props

    function HandleDelete(){
        try {
            axios.delete(`http://localhost:5000/evento/deletar/${idEvento}`)
            .then(res=>{
                if(res.data.status === 200) { history.push('/eventos' ); return 200 }
                console.log(res.data.message)
            })
        }
        catch(erro) {
            console.log(erro)
        }
    }

    async function load(){
        try {
            const response = await axios.get(`http://localhost:5000/evento/mostrar/${idEvento}`)
            setEvento(response.data)
            console.log(response.data)
        }
        catch(erro){
            console.log(erro)
        }
    }
    return(
        <>
        <NavBar/>
        <div className="morador">
            <div className="registro">
                <h1 className="text-registro">{evento.foto}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">ID:</h1>
                <h1 className="text-registro">{evento.id}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Organizador:</h1>
                <h1 className="text-registro">{evento.organizador}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Data:</h1>
                <h1 className="text-registro">{evento.data}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Início:</h1>
                <h1 className="text-registro">{evento.inicio}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Final:</h1>
                <h1 className="text-registro">{evento.final}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Local:</h1>
                <h1 className="text-registro">{`Prédio ${evento.predio}`}</h1>
            </div>
            <div className="options">
                <NavLink to={`/evento/${evento.id}/convidados`} className="ver_convidados">format_list_bulleted</NavLink>
                <button class="delete" onClick={HandleDelete}>delete</button>
                <NavLink to={`/alterar/evento/${evento.id}`} class="alterar">history_edu</NavLink>
            </div>
        </div>
        </>
    );
}