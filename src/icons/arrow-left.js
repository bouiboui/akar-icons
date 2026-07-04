import React from 'react';

const ArrowLeft = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M11 5l-7 7 7 7"></path>
      <path d="M4 12h16"></path>
    </svg>
  );
};

if (process.env.NODE_ENV !== 'production') {
  const PropTypes = require('prop-types');

  ArrowLeft.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
}

export default ArrowLeft;
