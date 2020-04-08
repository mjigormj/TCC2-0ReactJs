import React from 'react';
import "../css/login.css";
import "../css/global.css";


const Login = () => (
    //function App() {
    //return (

    <div id="app">
        <div className="modalLogin">
            <div id="login">
                <strong className="titulo">Login</strong>
                <form>
                    <div class="input-block">
                        <label htmlFor="usuario">Usuário</label>
                        <input name="usuario" id="usuario" required />
                    </div>

                    <div class="input-block">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" required />
                    </div>

                    <div id="btn-container">
                <a src=""><button id="entrar" type="submit">Entrar</button></a>
                    </div>

                </form>
            </div>
        </div>
        <script src="btn.js"></script>
    </div>


);
//}

export default Login;