import logotipo from '../img/logotipo.svg';
import {BtnSubmit} from "../Components/ButtonSubmit";
import {Input} from "../Components/Input";

function Register() {
    return(
        <>
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
                <BtnSubmit text="Cadastrar"/>
        </form></>
    );
    };
    export default Register;