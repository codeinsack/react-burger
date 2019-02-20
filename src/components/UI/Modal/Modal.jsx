import React from 'react';

import Wrapper from './ModalStyled';
import Backdrop from '../Backdrop/Backdrop';

const modal = ({ children, show, modalClosed }) => (
  <>
    <Backdrop clicked={modalClosed} show={show} />
    <Wrapper show={show}>
      {children}
    </Wrapper>
  </>
);

export default modal;
