/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line import/prefer-default-export
export function Button({
  onClick,
  type,
  value,
  text,
  className,
}) {
  return (
    <button
      type={type}
      value={value}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>

  );
}
