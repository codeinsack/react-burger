import React, { Component } from 'react';

import { connect } from 'react-redux';
import Wrapper from './LayoutStyled';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null,
});

@connect(mapStateToProps)

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
    const { children, isAuthenticated } = this.props;
    const { showSideDrawer } = this.state;

    return (
      <>
        <Toolbar
          isAuth={isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={isAuthenticated}
          open={showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Wrapper>
          {children}
        </Wrapper>
      </>
    );
  }
}

export default Layout;
