import React from 'react';
import "../css/login.css";
import "../css/global.css";
import axios from 'axios';



export default class Login extends React.Component{
    
    state = {
        usuario:'',
        senha:'',
    };

    handleChange = event =>{
        this.setState({usuario: event.target.value, senha: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const conta = {
            usuario: this.state.usuario,
            senha: this.state.senha
        };

        axios.post(`http://127.0.0.1:5000/login`, {usuario: conta.usuario, senha: conta.senha})
            .then(res=>{
                console.log(res);
                console.log(res.output)
            })
    };
    
    render(){
        return (
        <div id="app">
            <div className="modalLogin">
                <div id="login">
                    <strong className="titulo">Login</strong>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="usuario">Usuário</label>
                            <input name="usuario" id="usuario" required onChange={this.handleChange}/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" required onChange={this.handleChange}/>
                        </div>

                        <div id="btn-container" >
                            <button id="entrar" type="submit"> <a href="/Home"> Entrar</a></button>
                        </div>

                    </form>
                </div>
            </div>
            <script src="btn.js"></script>
        </div>
        )
    }
    

}