import React from 'react';

const Logo = ({ variant = 'default', className = '' }) => {
  return (
    <img 
      src="/assets/images/logo_converted.svg"
      alt="Gatwick Tuning"
      className={`h-8 w-auto ${className}`}
      loading="eager"
      width="160"
      height="32"
    />
  );
};

export default Logo;
