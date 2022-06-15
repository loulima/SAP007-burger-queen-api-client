/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
export function Input({
  name,
  type,
  value,
  placeholder,
  onChange,
  className,
  required,
}) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
