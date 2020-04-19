import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ text }) => <h1 className="header">{text}</h1>;

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
