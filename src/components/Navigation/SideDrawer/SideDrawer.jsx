import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Wrapper from './SideDrawerStyled';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ({ open, closed, isAuth }) => (
  <>
    <Backdrop show={open} clicked={closed} />
    <Wrapper open={open} onClick={closed}>
      <div className="Logo">
        <Logo />
      </div>
      <nav>
        <NavigationItems isAuthenticated={isAuth} />
      </nav>
    </Wrapper>
  </>
);

export default sideDrawer;
