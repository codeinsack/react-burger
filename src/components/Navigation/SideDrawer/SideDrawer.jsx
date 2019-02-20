import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Wrapper from './SideDrawerStyled';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ({ open, closed }) => (
  <>
    <Backdrop show={open} clicked={closed} />
    <Wrapper open={open}>
      <div className="Logo">
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </Wrapper>
  </>
);

export default sideDrawer;
