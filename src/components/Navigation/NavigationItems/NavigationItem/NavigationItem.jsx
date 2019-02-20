import React from 'react';
import Wrapper from './NavigationItemStyled';

const navigationItem = ({ children, link, active }) => (
  <Wrapper active={active}>
    <a href={link}>{children}</a>
  </Wrapper>
);

export default navigationItem;
