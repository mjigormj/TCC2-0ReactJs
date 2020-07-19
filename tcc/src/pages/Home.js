import React, { Component } from 'react';
import "../css/Home.css";
import NavBar from  '../components/NavBar'
import Acao from '../components/Acao';
import Endbar from '../components/Endbar';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Acao/>
                <Endbar/>
            </div>
        );
    }
}

export default Home;