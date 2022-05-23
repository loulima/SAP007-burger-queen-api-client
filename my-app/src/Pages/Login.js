import {BtnSubmit} from "../Components/ButtonSubmit";
import {Input} from "../Components/Input";
import logotipo from '../img/logotipo.svg';
// import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  
  return (
    <section className="loginContainer">

        <img  className="Bq-logo"
        alt="Burguer Queen logotipo"
        src={logotipo}/>

        <form className="loginForm">
          <h2 className="titulo-page"> Login </h2>
          <br />
            <Input
            type="email"
            className="input"
            label= "E-mail"
            placeholder="user@email.com"
            // onChange={onChange}
            title = "Insira um formato de email válido"
            // pattern = {"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"}
            autoFocus = "autoFocus"
            required = "required"
            />
            <br />
            <Input
            type="password"
            className="input"
            label="Senha"
            placeholder="*****"
            required = "required"
            />
            
            
            <br />

            <BtnSubmit
            type="submit"
            value="Entrar"
            text="Entrar"
            />
            <br />
            <p> Não tem uma conta? Cadastre-se
            <Link className="text-link" to="/Register">
            Cadastre-se
          </Link>
            </p>
        </form>
    </section>
  );
}

export default Login;