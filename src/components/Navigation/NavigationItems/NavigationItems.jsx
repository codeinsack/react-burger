import React from 'react';

import Wrapper from './NavigationItemsStyled';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <Wrapper>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </Wrapper>
);

export default navigationItems;
