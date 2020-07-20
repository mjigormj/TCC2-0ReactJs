import React from 'react'
import "../css/Card.css"
import {NavLink} from 'react-router-dom'
import axios from 'axios'


export default function CardPessoa(props){
    const history = props
        
    function HandleDelete(event){
        var id = event.target.value
        try {
            
            axios.delete(`http://localhost:5000/user/deletar/${id}`)
            .then(res=>{
                window.location.reload()
                console.log(res.data)
                console.log(res.data.message)
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
                <h1 className="text-registro">Nome:</h1>
                <h1 className="text-registro">{props.data.nome}</h1>
            </div>
            <br></br>
            <div className="registro">
                <h1 className="text-registro">Tipo:</h1>
                <h1 className="text-registro">{props.data.tipo}</h1>
            </div>
            <br></br>

            <div className="options">
                <NavLink to={`/pessoa/${props.data.id}`} className="detalhes">read_more</NavLink>
                <button value={props.data.id} className="delete" onClick={HandleDelete}>delete</button> 
                <NavLink to={`/alterar/pessoa/${props.data.id}`} className="alterar">history_edu</NavLink>
            </div>
        </div>
    );
}