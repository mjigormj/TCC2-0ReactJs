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
                    <div className="input-block">
                        <label htmlFor="usuario">Usuário</label>
                        <input name="usuario" id="usuario" required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" required />
                    </div>

                    <div id="btn-container">
               <button id="entrar" type="submit"> <a href="/Home"> Entrar</a></button>
                    </div>

                </form>
            </div>
        </div>
        <script src="btn.js"></script>

        
    </div>


);
//}

export default Login;