import BtnSubmitLogin from "../Components/ButtonSubmitLogin";
import InputEmail from "../Components/InputEmail";
import InputPassword from "../Components/InputPassword";

function Login() {
  return (
    <div className="loginForm">
        <img  className="Bq-logo" alt="logo" />

        <form>
            <InputEmail/>
            <InputPassword/>
            <BtnSubmitLogin/>
            <br />
            <p>Não tem uma conta? 
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