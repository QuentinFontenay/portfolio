import React from 'react'

import { ButtonFront } from './index'

const Button = (props) => (
  <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
);

export default Button