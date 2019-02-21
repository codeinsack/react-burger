import React, { Component } from 'react';

import Wrapper from './ModalStyled';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    const { show, children } = this.props;
    return show !== nextProps.show || nextProps.children !== children;
  }

  render() {
    const { modalClosed, show, children } = this.props;
    return (
      <>
        <Backdrop clicked={modalClosed} show={show} />
        <Wrapper show={show}>
          {children}
        </Wrapper>
      </>
    );
  }
}

export default Modal;
