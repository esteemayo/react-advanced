import React from "react";
import PropTypes from "prop-types";

const About = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

About.defaultProps = {
  title: "About Page",
};

About.propTypes = {
  title: PropTypes.string,
};

export default About;
