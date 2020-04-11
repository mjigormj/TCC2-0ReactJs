import React, { Component } from 'react';
import "../css/Home.css";
import NavBar from  '../components/NavBar'
import Acao from '../components/Acao';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Acao/>
            </div>
        );
    }
}

export default Home;