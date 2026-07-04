import React from 'react';

const Pentagon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M10.75 3a2 2 0 0 1 2.5 0l7.63 6.103a2 2 0 0 1 .63 2.246l-3.031 8.334A2 2 0 0 1 16.599 21H7.401a2 2 0 0 1-1.88-1.317l-3.03-8.334a2 2 0 0 1 .63-2.246L10.75 3z"></path>
    </svg>
  );
};

if (process.env.NODE_ENV !== 'production') {
  const PropTypes = require('prop-types');

  Pentagon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
}

export default Pentagon;
