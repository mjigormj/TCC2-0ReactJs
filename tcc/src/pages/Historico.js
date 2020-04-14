import React, { Component } from 'react';
import "../css/Home.css";
import NavBar from '../components/NavBar'
import Modal from '../components/Modal'

class Historico extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Modal />
            </div>
        );
    }
}

export default Historico;