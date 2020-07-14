import React from 'react';
import "../css/NavBar.css";
import logo from "../img/logon.png";

const NavBar = () => (

    <div className="layout">
        <header>
            <img src={logo} alt="logo"/>
            <nav>
                <ul className="nav_links">
                    <li><a className="waves-effect" href="/Home">Home</a></li> <li><a className="waves-effect" href="/Moradores">Moradores</a></li> <li><a className="waves-effect" href="/Historico">Histórico</a></li> <li><a className="waves-effect" href="/BD">Banco de Dados</a></li>
                </ul>
            </nav>
        </header>
    </div>
);


export default NavBar;