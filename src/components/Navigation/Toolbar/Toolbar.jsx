import React from 'react';

import Wrapper from './ToolbarStyled';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ({ drawerToggleClicked }) => (
  <Wrapper>
    <DrawerToggle clicked={drawerToggleClicked} />
    <div className="Logo">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </Wrapper>
);

export default toolbar;
