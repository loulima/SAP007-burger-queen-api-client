import logotipo from '../img/logotipo.svg';
import {BtnSubmit} from "../Components/ButtonSubmit";
import {Input} from "../Components/Input";
import { Link } from "react-router-dom";

function Register() {
    return(
        <>
        <div className="registerContainer">
        <img className="Bq-logo"
        alt="Burguer Queen logotipo"
        src={logotipo} />
        
        <form className="register-form">
            <h2>Criar Conta </h2>
                <section>
                    <Input
                    type="text"
                    label="Nome"
                    // value={name}
                    placeholder="Digite o seu nome completo"
                    required = "required"
                    />
                    <br />
                    <Input
                    type="email"
                    label="E-mail"
                    // value={email}
                    name="input"
                    placeholder="user@user.com"
                    required = "required"
                    pattern = {"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"}
                    title = "Insira um formato de email válido"
                    />
                    <br />
                    <Input
                    type="password"
                    label="Senha"
                    // value={password}
                    name="input"
                    placeholder="******"
                    required = "required"
                    />
                    <br />
                </section>

                <section className="role-register">
                    <h3> Escolha seu cargo:</h3>
                    <br />
                    <Input
                    type="radio"
                    className="input-radio"
                    label="Atendente"
                    // value="saloon"
                    // name="role"
                    // checked={role === "saloon"}
                    // onChange={(e) => setRole(e.target.value)}
                    />
                    <br />
                    <Input
                    type="radio"
                    className="input-radio"
                    label="Cozinha"
                    // value="kitchen"
                    // name="role"
                    // checked={role === "kitchen"}
                    // onChange={(e) => setRole(e.target.value)}
                    />
                    <br />
                </section>

                <BtnSubmit
                type="submit"
                className="button-submit"
                text="Cadastrar"/>
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