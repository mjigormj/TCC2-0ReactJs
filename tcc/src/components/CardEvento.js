import React from 'react'
import "../css/Card.css"
import {NavLink} from 'react-router-dom'
import axios from 'axios'


export default function CardEvento(props){
    const history = props
        
    function HandleDelete(event){
        var id = event.target.value
        try {
            
            axios.delete(`http://localhost:5000/evento/deletar/${id}`)
            .then(res=>{
                window.location.reload()
            })
        }
        catch(erro) {
            console.log(erro)
        }
    }

    return(
        <div className="card">
            <div className="registro">
                <h1 className="text-registro">ID:</h1>
                <h1 className="text-registro" name="id">{props.data.id}</h1>
            </div>
            <br></br>
            <div className="registro">
                <h1 className="text-registro">Data:</h1>
                <h1 className="text-registro">{props.data.data}</h1>
            </div>
            <br></br>
            <div className="registro">
                <h1 className="text-registro">Início:</h1>
                <h1 className="text-registro">{props.data.inicio}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Final:</h1>
                <h1 className="text-registro">{props.data.final}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Local:</h1>
                <h1 className="text-registro">{`Prédio ${props.data.predio}`}</h1>
            </div>
            <div className="options">
                <NavLink to={`/evento/${props.data.id}`} className="detalhes">read_more</NavLink>
                <button value={props.data.id} className="delete" onClick={HandleDelete}>delete</button> 
                <NavLink to={`/alterar/evento/${props.data.id}`} className="alterar">history_edu</NavLink>
            </div>
        </div>
    );
}