import React from 'react';

const PanelLeft = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <rect x="2" y="3" width="20" height="18" rx="2"></rect>
      <path d="M9 3v18"></path>
    </svg>
  );
};

if (process.env.NODE_ENV !== 'production') {
  const PropTypes = require('prop-types');

  PanelLeft.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
}

export default PanelLeft;
