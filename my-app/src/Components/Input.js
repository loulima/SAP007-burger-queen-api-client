export const Input = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  className,
  required,
}) => {
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
};
