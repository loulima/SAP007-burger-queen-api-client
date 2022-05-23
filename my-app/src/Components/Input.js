export const Input = ({
        type,
        value,
        placeholder,
        onChange,
        label,
        title,
        pattern,
        required,
        autoFocus,
        ...props
      }) => {
        return (
          <>
              <label className="input-label">{label}</label>
              <input
              type={type}
              className="input"
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              title = {title}
              pattern = {pattern}
              autoFocus = {autoFocus}
              required ={required}
              {...props} 
              />
          </>
        );
      };

          // <input type="email" placeholder="Email" autoFocus required 
      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" 
      // title="Insira um formato de email válido: exemplo@email.com"
      // />