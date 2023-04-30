import React from 'react';
import PropTypes from 'prop-types';
import { ButtonFront } from './index';

function Button({ alt, onClick, disabled, children }) {
  return (
    <ButtonFront alt={alt} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonFront>
  );
}

Button.propTypes = {
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
