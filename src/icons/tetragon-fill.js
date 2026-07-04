import React from 'react';

const TetragonFill = ({
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
      fill={color}
      {...otherProps}
    >
      <path d="M10.61 2.576a1.966 1.966 0 0 1 2.78 0l8.034 8.034a1.966 1.966 0 0 1 0 2.78l-8.034 8.034a1.966 1.966 0 0 1-2.78 0L2.576 13.39a1.966 1.966 0 0 1 0-2.78l8.034-8.034z"></path>
    </svg>
  );
};

if (process.env.NODE_ENV !== 'production') {
  const PropTypes = require('prop-types');

  TetragonFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
}

export default TetragonFill;
