import React, {useEffect, useState} from 'react'
import "../css/Card.css"
import '../css/moradores.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import NavBar from '../components/NavBar'



export default function Morador(props){
    const {idMorador} = props.match.params
    const[morador, setMorador] = useState([])
    useEffect(function(){load()}, [])
    
    const {history} = props

    function HandleDelete(){
        try {
            axios.delete(`http://localhost:5000/morador/deletar/${idMorador}`)
            .then(res=>{
                if(res.data.status === 200) { history.push('/moradores' ); return 200 }
                console.log(res.data.message)
            })
        }
        catch(erro) {
            console.log(erro)
        }
    }

    async function load(){
        try {
            const response = await axios.get(`http://localhost:5000/morador/mostrar/${idMorador}`)
            setMorador(response.data)
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
                <h1 className="text-registro">{morador.foto}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">ID:</h1>
                <h1 className="text-registro">{morador.id}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Nome:</h1>
                <h1 className="text-registro">{morador.nome}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">CPF:</h1>
                <h1 className="text-registro">{morador.cpf}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">RG:</h1>
                <h1 className="text-registro">{morador.rg}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Apartamento:</h1>
                <h1 className="text-registro">{morador.apartamento}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Prédio:</h1>
                <h1 className="text-registro">{morador.predio}</h1>
            </div>

            <div className="options">
                <button class="delete" onClick={HandleDelete}>delete</button>
                <NavLink to={`/alterar/morador/${morador.id}`} class="alterar">history_edu</NavLink>
            </div>
        </div>
        </>
    );
}