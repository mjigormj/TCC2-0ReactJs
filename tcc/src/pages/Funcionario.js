import React, {useEffect, useState} from 'react'
import "../css/Card.css"
import '../css/moradores.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import NavBar from '../components/NavBar'



export default function Funcionario(props){
    const {idFuncionario} = props.match.params
    const[funcionario, setFuncionario] = useState([])
    useEffect(function(){load()}, [])
    
    const {history} = props

    function HandleDelete(){
        try {
            axios.delete(`http://localhost:5000/funcionario/deletar/${idFuncionario}`)
            .then(res=>{
                if(res.data.status === 200) { history.push('/funcionarios' ); return 200 }
                console.log(res.data.message)
            })
        }
        catch(erro) {
            console.log(erro)
        }
    }

    async function load(){
        try {
            const response = await axios.get(`http://localhost:5000/funcionario/mostrar/${idFuncionario}`)
            setFuncionario(response.data)
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
                <h1 className="text-registro">{funcionario.foto}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">ID:</h1>
                <h1 className="text-registro">{funcionario.id}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Nome:</h1>
                <h1 className="text-registro">{funcionario.nome}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Função:</h1>
                <h1 className="text-registro">{funcionario.funcao}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">CPF:</h1>
                <h1 className="text-registro">{funcionario.cpf}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">RG:</h1>
                <h1 className="text-registro">{funcionario.rg}</h1>
            </div>
            <div className="options">
                <button class="delete" onClick={HandleDelete}>delete</button>
                <NavLink to={`/alterar/morador/${funcionario.id}`} class="alterar">history_edu</NavLink>
            </div>
        </div>
        </>
    );
}