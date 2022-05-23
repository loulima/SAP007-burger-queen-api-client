function InputPassword() {
    return (
        <input type="password" placeholder="Senha" required 
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
        title="m"
        />
        );
  }
  
  export default InputPassword;