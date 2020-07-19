import React from 'react'
import "../css/Card.css"


export default function CardSaida(props){
    return(
        <div className="card">
            <div className="registro">
                <h1 className="text-registro">Tipo:</h1>
                <h1 className="text-registro">{props.data.tipo}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">ID:</h1>
                <h1 className="text-registro">{props.data.idsaida}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">ID da entrada:</h1>
                <h1 className="text-registro">{props.data.entrada}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Pessoa:</h1>
                <h1 className="text-registro">{props.data.pessoa}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Data/hora:</h1>
                <h1 className="text-registro">{props.data.datahora}</h1>
            </div>
        </div>
    );
}