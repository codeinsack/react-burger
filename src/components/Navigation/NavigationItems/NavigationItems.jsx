import React from 'react';

import Wrapper from './NavigationItemsStyled';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <Wrapper>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </Wrapper>
);

export default navigationItems;
