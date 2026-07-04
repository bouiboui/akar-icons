import React from 'react';

const ArrowRightThick = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
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
      <path d="M21 12l-7-9v4.99L3 8v8h11v5l7-9z"></path>
    </svg>
  );
};

if (process.env.NODE_ENV !== 'production') {
  const PropTypes = require('prop-types');

  ArrowRightThick.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
}

export default ArrowRightThick;
