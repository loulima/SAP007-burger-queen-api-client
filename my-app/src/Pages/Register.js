import logotipo from '../img/logotipo.svg';

function Register() {
    return(
        <>
        <img className="Bq-logo"
        alt="Burguer Queen logotipo"
        src={logotipo} />
        
        <form className="register-form">
            <h2>Criar Conta </h2>
                
                <label className="label-text">Nome</label>
                <label className="label-text">Email</label>
                <label className="label-text">Senha</label>

                <section className="role-register">
                    <h3> Escolha seu cargo:</h3>
                    <label>Atendente</label>
                    <label>Cozinha</label>
                </section>
                {/* <Button type="submit" btnText="Cadastrar" btnOnclick={handleSubmit} /> */}
                <button type="submit" className="btnSubmitRegister"> Registrar </button>
        </form></>
    );
    };
    export default Register;