import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import Wrapper from './AppStyled';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Blog />
      </Wrapper>
    );
  }
}

export default App;
