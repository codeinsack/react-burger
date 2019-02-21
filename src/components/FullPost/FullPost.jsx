import React, { Component } from 'react';

import Wrapper from './FullPostStyled';


class FullPost extends Component {
  render() {
    let post = <p>Please select a Post!</p>;
    post = (
      <Wrapper>
        <h1>Title</h1>
        <p>Content</p>
        <div className="Edit">
          <button type="button" className="Delete">Delete</button>
        </div>
      </Wrapper>

    );
    return post;
  }
}

export default FullPost;
