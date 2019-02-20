import React from 'react';

import Wrapper from './BackdropStyled';

const backdrop = ({ show, clicked }) => (
  show ? <Wrapper onClick={clicked} /> : null
);

export default backdrop;
