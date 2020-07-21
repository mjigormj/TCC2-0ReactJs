import React, {useEffect, useState} from 'react'
import "../css/Card.css"
import '../css/moradores.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Endbar from '../components/Endbar'


export default function Pessoa(props){
    const {idPessoa} = props.match.params
    const[pessoa, setPessoa] = useState([])
    useEffect(function(){load()}, [])
    const AbsPath = 'C:/Users/Pedro Lima/Pictures'
    const {history} = props

    function HandleDelete(){
        try {
            axios.delete(`http://localhost:5000/user/deletar/${idPessoa}`)
            .then(res=>{
                if(res.data.status === 200) { history.push('/pessoas' ); return 200 }
                console.log(res.data.message)
            })
        }
        catch(erro) {
            console.log(erro)
        }
    }

    async function load(){
        try {
            const response = await axios.get(`http://localhost:5000/user/mostrar/${idPessoa}`)
            setPessoa(response.data)
            ////${AbsPath}/${pessoa.foto}
            console.log(response.data)
        }
        catch(erro){
            console.log(erro)
        }
    }
    return(
        <>
        <NavBar/>
            <div className="perfil">
                <div className="registro">
                    <img src={'/'+ `${pessoa.foto}`} className="foto"/>
                </div>
                <div className="perfil-content">
                    <div className="registro">
                        <h1 className="text-registro">ID:</h1>
                        <h1 className="text-registro">{pessoa.id}</h1>
                    </div>
                    <div className="registro">
                        <h1 className="text-registro">Nome:</h1>
                        <h1 className="text-registro">{pessoa.nome}</h1>
                    </div>
                    <div className="registro">
                        <h1 className="text-registro">CPF:</h1>
                        <h1 className="text-registro">{pessoa.cpf}</h1>
                    </div>
                    <div className="registro">
                        <h1 className="text-registro">RG:</h1>
                        <h1 className="text-registro">{pessoa.rg}</h1>
                    </div>
                    <div className="registro">
                        <h1 className="text-registro">Tipo:</h1>
                        <h1 className="text-registro">{pessoa.tipo}</h1>
                    </div>
                    <div className="options">
                        <button class="delete" onClick={HandleDelete}>delete</button>
                        <NavLink to={`/alterar/pessoa/${pessoa.id}`} class="alterar">history_edu</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}