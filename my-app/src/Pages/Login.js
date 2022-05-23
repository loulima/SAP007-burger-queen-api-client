import BtnSubmitLogin from "../Components/ButtonSubmitLogin";
import InputEmail from "../Components/InputEmail";
import InputPassword from "../Components/InputPassword";
import logotipo from '../img/logotipo.svg';

function Login() {
  return (
    <div className="loginContainer">

        <img  className="Bq-logo"
        alt="Burguer Queen logotipo"
        src={logotipo}/>

        <form className="loginForm">
        <br />
            <InputEmail/>
            <br />
            <InputPassword/>
            <br />
            <BtnSubmitLogin/>
            <br />
            <p> Não tem uma conta? 
            <a
            className="Register-link"
             href=""
            >
             Cadastre-se
            </a>
            </p>
        </form>
    </div>
  );
}

export default Login;