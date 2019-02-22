import React from 'react';

import Wrapper from './CounterOutputStyled';

const counterOutput = ({ value }) => (
  <Wrapper>
    Current Counter: {value}
  </Wrapper>
);

export default counterOutput;
