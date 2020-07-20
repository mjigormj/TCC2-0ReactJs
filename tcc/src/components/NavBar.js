import React from 'react';
import {NavLink} from 'react-router-dom';
import "../css/NavBar.css";
import logo from "../img/logon.png";

const NavBar = () => (

    <div className="layout">
        <header>
            <img src={logo} alt="logo"/>
            <nav>
                <ul className="nav_links">
                    <li><NavLink className="waves-effect" to="/Home">Home</NavLink></li> <li><NavLink className="waves-effect" to="/Moradores">Moradores</NavLink></li> <li><NavLink className="waves-effect" to="/Historico">Histórico</NavLink></li> <li><NavLink className="waves-effect" to="/pessoas">Pessoas</NavLink></li>
                </ul>
            </nav>
        </header>
    </div>
);


export default NavBar;