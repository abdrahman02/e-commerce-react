import { Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from "../fragments/Navbar";

const FoLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};
FoLayout.propTypes = {
  children: PropTypes.node,
};

export default FoLayout;
