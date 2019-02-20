import React, { Component } from 'react';

import Wrapper from './LayoutStyled';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state;

    return (
      <>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <Wrapper>
          {children}
        </Wrapper>
      </>
    );
  }
}

export default Layout;
