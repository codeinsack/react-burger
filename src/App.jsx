import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';
import Wrapper from './AppStyled';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Blog />
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
