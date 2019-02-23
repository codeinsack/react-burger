import React from 'react';

import Wrapper from './NavigationItemsStyled';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuthenticated }) => (
  <Wrapper>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    { isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
    { !isAuthenticated
      ? <NavigationItem link="/auth">Authenticate</NavigationItem>
      : <NavigationItem link="/logout">Logout</NavigationItem> }
  </Wrapper>
);

export default navigationItems;
