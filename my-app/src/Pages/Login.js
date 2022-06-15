/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { statusCode } from '../Services/error';
import { setToken } from '../Services/localStorage';
import { userLogin } from '../Services/auth';
import { ErrorMessage } from '../Components/ErrorMessage';
import { Button } from '../Components/Button';
import { Input } from '../Components/Input';
import logotipo from '../img/logotipo.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErrorMessage(statusCode(response));
      })
      .then((data) => {
        setToken(data.token);
        navigate(data.role === 'saloon' ? '/menu' : '/kitchen');
        // saveToken(data.token);
        // saveRole(data.role);
        // if (data.role == "saloon") {
        //   navigate("/Menu");
        // } else if (data.role == "kitchen") {
        //   navigate("/Kitchen");
        // } else {
        //   navigate("/Register");
        // }
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="loginContainer">

      <img
        className="Bq-logo"
        alt="Burguer Queen logotipo"
        src={logotipo}
      />

      <form className="loginForm">
        <h2 className="titulo-page"> Login </h2>
        <br />
        <label htmlFor="emailInputId" className="input-label">Email </label>
        <Input
          id="emailInputId"
          type="email"
          className="input-text"
          label="E-mail"
          placeholder="user@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="passwordInputId" className="input-label">Senha </label>
        <Input
          id="passwordInputId"
          type="password"
          className="input-text"
          label="Senha"
          placeholder="*****"

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
          disable={!errorMessage}
          message={errorMessage}
        />

        <br />
        <p className="text-link">
          {' '}
          Não tem uma conta?
          <Link
            className="text-link"
            to="/register"
          >
            Cadastre-se
          </Link>
        </p>
      </form>
    </section>
  );
}
