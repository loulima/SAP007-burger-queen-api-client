export const Button = ({
  // children,
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


// export const Button = ({
//     children,
//     onClick,
//     type,
//     value,
//     onChange,
//     text,
//     ...props
//   }) => {
//     return (
//         <button
//         {...props}>
//         {children}
//         </button>

//     );
//   };