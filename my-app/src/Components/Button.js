export const Button = ({
  onClick,
  type,
  value,
  text,
  className,
}) => {
    return (
    <>
        <button
        type={type}
        value={value}
        onClick={onClick}
        className={className}
        >
        {text}
        </button>
        </>
    
    );
};
