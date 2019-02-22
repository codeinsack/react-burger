import React from 'react';

import Wrapper from './CounterControlStyled';

const counterControl = ({ clicked, label }) => (
  <Wrapper onClick={clicked}>
    {label}
  </Wrapper>
);

export default counterControl;
