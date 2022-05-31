import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { createUser } from "../Services/auth";
import { statusCode } from "../Services/error";
import { setToken } from "../Services/localStorage";
import { MessageStatusCode } from "../Components/MessageStatusCode";
import { BtnSubmit } from "../Components/ButtonSubmit";
import { Input } from "../Components/Input";
import logotipo from '../img/logotipo.svg';



function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("saloon");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    ///Função para entrar no sistema:
    const signUp = (e) => {
        e.preventDefault();
        createUser(name, email, password, role)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            }
            setErrorMessage(statusCode(response));
          })
          .then((data) => {
            console.log(data.token);
            setToken(data.token);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return(
        <>
        <div className="registerContainer">
        <img className="Bq-logo"
        alt="Burguer Queen logotipo"
        src={logotipo} />
        
        <form className="register-form">
            <h2 className="titulo-page"> Criar Conta </h2>
            
                    <Input
                    type="text"
                    label="Nome"
                    className="input-text"
                    value={name}
                    placeholder="Digite o seu nome completo"
                    required = "required"
                    onChange={(e) => setName(e.target.value)}

                    />
                    <br />
                    <Input
                    type="email"
                    label="E-mail"
                    className="input-text"
                    value={email}
                    name="input"
                    placeholder="user@user.com"
                    required = "required"
                    // pattern = {"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"}
                    // title = "Insira um formato de email válido"
                    onChange={(e) => setEmail(e.target.value)}

                    
                    />
                    <br />
                    <Input
                    type="password"
                    label="Senha"
                    className="input-text"
                    value={password}
                    name="input"
                    placeholder="******"
                    required = "required"
                    onChange={(e) => setPassword(e.target.value)}

                    />
                    <br />

                    <section className="role-register">
                    <h3 className="titulo-page"> Escolha seu cargo:</h3>
                    <br />
                    <label className="input-label"> Atendente </label>
                    
                    <Input
                    type="radio"
                    className="input-radio"
                    label="Atendente"
                    value="saloon"
                    name="role"
                    checked={role === "saloon"}
                    onChange={(e) => setRole(e.target.value)}
                    />
                    <br />
                    <label className="input-label"> Cozinha </label>
                    <Input
                    type="radio"
                    className="input-radio"
                    label="Cozinha"
                    value="kitchen"
                    name="role"
                    checked={role === "kitchen"}
                    onChange={(e) => setRole(e.target.value)}
                    />
                    <br />
                    </section>

                    <MessageStatusCode
                    disable={errorMessage ? false : true}
                    message={errorMessage}
                    />
                <BtnSubmit
                type="submit"
                className="button-submit"
                text="Cadastrar"
                onClick={signUp}/>
                <br />
                <p>
                    <Link
                        className="text-link"
                        to="/">
                        Voltar para Página Inicial
                    </Link>
                </p>
        </form>
        </div>
        </>
    );
    };
    export default Register;