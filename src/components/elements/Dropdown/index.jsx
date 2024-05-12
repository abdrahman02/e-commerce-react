import PropTypes from "prop-types";

const Dropdown = ({ children, type, className }) => {
  return (
    <div className={`dropdown ${type}  ${className}`}>{children}</div>
  );
};
Dropdown.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
};

const Trigger = ({ children, className, tabIndex, text }) => {
  return (
    <div className={`flex flex-row justify-around items-center`}>
      <div
        tabIndex={tabIndex}
        role="button"
        className={`btn btn-ghost ${className}`}
      >
        {children}
      </div>
      <p className="text-sm font-normal tracking-wider cursor-pointer">
        {text}
      </p>
    </div>
  );
};
Trigger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tabIndex: PropTypes.string,
  text: PropTypes.string,
};

const ObjectTrigger = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
ObjectTrigger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Content = ({ children, tabIndex, className }) => {
  return (
    <div
      tabIndex={tabIndex}
      className={`z-[1] p-2 menu menu-sm dropdown-content rounded-box ${className}`}
    >
      {children}
    </div>
  );
};
Content.propTypes = {
  children: PropTypes.node,
  tabIndex: PropTypes.string,
  className: PropTypes.string,
};

Dropdown.Trigger = Trigger;
Dropdown.Trigger.ObjectTrigger = ObjectTrigger;
Dropdown.Content = Content;

export default Dropdown;
