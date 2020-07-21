import React, {useEffect, useState} from 'react'
import "../css/Card.css"
import '../css/moradores.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import NavBar from '../components/NavBar'



export default function Encomenda(props){
    const {idEncomenda} = props.match.params
    const[encomenda, setEncomenda] = useState([])
    useEffect(function(){load()}, [])
    
    const {history} = props

    function HandleDelete(){
        try {
            axios.delete(`http://localhost:5000/mail/deletar/${idEncomenda}`)
            .then(res=>{
                if(res.data.status === 200) { history.push('/encomendas' ); return 200 }
                console.log(res.data.message)
            })
        }
        catch(erro) {
            console.log(erro)
        }
    }

    async function load(){
        try {
            const response = await axios.get(`http://localhost:5000/mail/mostrar/${idEncomenda}`)
            setEncomenda(response.data)
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
                <h1 className="text-registro">ID:</h1>
                <h1 className="text-registro">{encomenda.id}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Destinatário:</h1>
                <h1 className="text-registro">{encomenda.destinatario}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">CPF do destinatário:</h1>
                <h1 className="text-registro">{encomenda.cpf}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Apartamento:</h1>
                <h1 className="text-registro">{encomenda.apartamento}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Prédio:</h1>
                <h1 className="text-registro">{encomenda.predio}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Data/hora:</h1>
                <h1 className="text-registro">{encomenda.datahora}</h1>
            </div>
            <div className="options">
                <button class="delete" onClick={HandleDelete}>delete</button>
                <NavLink to={`/alterar/encomenda/${encomenda.id}`} class="alterar">history_edu</NavLink>
            </div>
        </div>
        </>
    );
}