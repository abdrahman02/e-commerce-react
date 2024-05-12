import PropTypes from "prop-types";

const Card = ({ children, className }) => {
  return (
    <div className={`card w-96 bg-base-100 shadow-xl ${className}`}>
      {children}
    </div>
  );
};
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Body = ({ children, className }) => {
  return <div className={`card-body ${className}`}>{children}</div>;
};
Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Title = ({ children, className }) => {
  return <h2 className={`card-title ${className}`}>{children}</h2>;
};
Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Action = ({ children, className }) => {
  return (
    <div className={`card-actions justify-end ${className}`}>{children}</div>
  );
};
Action.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.Body = Body;
Card.Title = Title;
Card.Action = Action;

export default Card;
