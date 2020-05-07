import React, { Component } from 'react';
import "../css/Home.css";
import NavBar from '../components/NavBar'
import Modal, { RadBtn } from '../components/Modal'

class Historico extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <Modal/>
                <button type="button" onClick={<RadBtn setOpen={true}/>}>
                    aqui
                </button>
                
            </div>
        );
    }
}

export default Historico;