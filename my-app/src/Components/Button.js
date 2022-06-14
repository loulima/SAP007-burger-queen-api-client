export const Button = ({
    type,
    value,
    onChange,
    text,
   
}) => {
    return (
    <>
        <button
        className="button-submit"
        type={type}
        value={value}
        onChange={onChange}
        >
        {text}
        </button>
        </>
    
    );
};