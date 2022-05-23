function InputEmail() {
    return (
      <input type="email" placeholder="Email" autoFocus required 
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" 
      title="Insira um formato de email válido: exemplo@email.com"
      />
    );
  }
  
  export default InputEmail;