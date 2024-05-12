import PropTypes from "prop-types";

const Input = ({ className, type, placeholder, name }) => {
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    className={`input input-bordered w-full max-w-xs ${className}`}
  />;
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
