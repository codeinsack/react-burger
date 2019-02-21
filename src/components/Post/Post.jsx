import React from 'react';
import Wrapper from './PostStyled';


const post = () => (
  <Wrapper className="Post">
    <h1>Title</h1>
    <div className="Info">
      <div className="Author">Author</div>
    </div>
  </Wrapper>
);

export default post;
