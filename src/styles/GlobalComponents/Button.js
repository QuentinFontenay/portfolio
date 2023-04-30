import React from 'react';
import PropTypes from 'prop-types';
import { ButtonFront } from './index';

function Button({ onClick, disabled, children }) {
  return (
    <ButtonFront onClick={onClick} disabled={disabled}>
      {children}
    </ButtonFront>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
