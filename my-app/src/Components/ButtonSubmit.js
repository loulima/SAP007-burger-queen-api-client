export const BtnSubmit = ({
    type,
    value,
    onChange,
    text,
    ...props
}) => {
    return (
    <>
        <button
        type={type}
        className="button-submit"
        value={value}
        onChange={onChange}
        {...props} 
        >
        {text}
      </button>
        </>
    
    );
};