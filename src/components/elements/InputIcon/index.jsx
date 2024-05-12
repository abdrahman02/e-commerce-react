import PropTypes from "prop-types";
const InputIcon = ({ children, className }) => {
  return (
    <label className={`input input-bordered ${className}`}>
      {children}
      &nbsp;
      <input
        type="text"
        className={"grow"}
        name="keyword"
        placeholder="Search"
      />
    </label>
  );
};

InputIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default InputIcon;
