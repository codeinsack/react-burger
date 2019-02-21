import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Wrapper from './BlogStyled';

class Blog extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Post />
          <Post />
          <Post />
        </Wrapper>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
