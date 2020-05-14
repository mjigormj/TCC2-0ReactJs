import React, { Component } from 'react';
import "../css/Home.css";
import NavBar from '../components/NavBar'
import Previw from '../components/Previw'

class Morador extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Previw />
            </div >
        );
    }
}

export default Morador;