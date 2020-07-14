import React from 'react'
import "../css/CardHistorico.css"


export default function CardHistorico(props){
    return(
        <div className="card">
            <div className="registro">
                <h1 className="text-registro">ID:</h1>
                <h1 className="text-registro">{props.data.id}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Apartamento:</h1>
                <h1 className="text-registro">{props.data.apartamento}</h1>
            </div>
            <div className="registro">
                <h1 className="text-registro">Prédio:</h1>
                <h1 className="text-registro">{props.data.predio}</h1>
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