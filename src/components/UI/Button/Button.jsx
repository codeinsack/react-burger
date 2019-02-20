import React from 'react';

import Wrapper from './ButtonStyled';

const button = ({ children, btnType, clicked }) => (
  <Wrapper type={btnType} onClick={clicked}>
    {children}
  </Wrapper>
);

export default button;
