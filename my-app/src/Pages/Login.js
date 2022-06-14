import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { statusCode } from "../Services/error";
import { setToken } from "../Services/localStorage";
import { userLogin } from "../Services/auth";
import { ErrorMessage } from "../Components/ErrorMessage";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import logotipo from '../img/logotipo.svg';

export const Login= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  
  const signIn= async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(email, password);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data.token);
        setToken(data.token);
        navigate(data.role === "saloon" ? "/menu" : "/register");
        navigate(data.role === "kitchen" ? "/kitchen" : "/register");
      }
      setErrorMessage(statusCode(response));
    } catch (error) {
      console.log(error);
    }
  };
  // const signIn = (e) => {
  //   e.preventDefault();
  //   loginUser(email, password)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       }
  //       setErrorMessage(statusCode(response));
  //     })
  //     .then((data) => {
  //       console.log(data.token);
  //       setToken(data.token);
  //       navigate(data.role === "saloon" ? "/menu" : "/kitchen");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <section className="loginContainer">

        <img  className="Bq-logo"
        alt="Burguer Queen logotipo"
        src={logotipo}/>

        <form className="loginForm">
          <h2 className="titulo-page"> Login </h2>
          <br />
          <label htmlFor="emailInputId" className="input-label">Email </label>
            <Input
            id="emailInputId"
            type="email"
            className="input-text"
            label= "E-mail"
            placeholder="user@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required = "required"
            />
            <br />
            <label htmlFor="passwordInputId" className="input-label">Senha </label>
            <Input
            id="passwordInputId"
            type="password"
            className="input-text"
            label="Senha"
            placeholder="*****"
            required = "required"
            onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <Button
            type="submit"
            className="button-submit"
            text="Entrar"
            onClick={signIn}
            />

            <ErrorMessage
            disable={errorMessage ? false : true}
            message={errorMessage}
            />

            <br />
            <p className="text-link"> Não tem uma conta?
              <Link
                className="text-link"
                to="/register">
                Cadastre-se
              </Link>
            </p>
        </form>
    </section>
    );
  };

