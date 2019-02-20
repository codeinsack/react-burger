import React from 'react';

import Wrapper from './LayoutStyled';

const layout = ({ children }) => (
  <>
    <div>
      Toolbar, SideDrawer, Backdrop
    </div>
    <Wrapper>
      {children}
    </Wrapper>
  </>
);

export default layout;
