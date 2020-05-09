import React, { Component } from 'react';
import "../css/Home.css";
import NavBar from '../components/NavBar'
import Progress from '../components/barraProgreco'

class Historico extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Progress/>
            </div>
        );
    }
}

export default Historico;