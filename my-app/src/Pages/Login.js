import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { statusCode } from "../Services/error";
import { setToken } from "../Services/localStorage";
import { loginUser } from "../Services/auth";
import { MessageStatusCode } from "../Components/MessageStatusCode";
import { BtnSubmit } from "../Components/ButtonSubmit";
import { Input } from "../Components/Input";
import logotipo from '../img/logotipo.svg';

export const Login= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErrorMessage(statusCode(response));
      })
      .then((data) => {
        console.log(data.token);
        setToken(data.token);
        navigate(data.role === "saloon" ? "/menu" : "/kitchen");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            className="input-text"
            label= "E-mail"
            placeholder="user@email.com"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus = "autoFocus"
            required = "required"
            />
            <br />
            <Input
            type="password"
            className="input-text"
            label="Senha"
            placeholder="*****"
            required = "required"
            onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <BtnSubmit
            type="submit"
            className="button-submit"
            text="Entrar"
            onClick={signIn}
            />

            <MessageStatusCode
            disable={errorMessage ? false : true}
            message={errorMessage}
            />

            <br />
            <p className="text-link"> Não tem uma conta?
              <Link
                className="text-link"
                to="/Register">
                Cadastre-se
              </Link>
            </p>
        </form>
    </section>
    );
  };

