import axios from 'axios';
import React, { Component } from 'react';

import Wrapper from './FullPostStyled';


class FullPost extends Component {
  state ={
    loadedPost: null,
  };

  componentDidUpdate() {
    const { id } = this.props;
    const { loadedPost } = this.state;

    if (id) {
      if (!loadedPost || (loadedPost && loadedPost.id !== id)) {
        axios.get(`/posts/${id}`)
          .then((response) => {
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }

  render() {
    const { id } = this.props;
    const { loadedPost } = this.state;

    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }
    if (loadedPost) {
      post = (
        <Wrapper>
          <h1>{loadedPost.title}</h1>
          <p>{loadedPost.body}</p>
          <div className="Edit">
            <button type="button" className="Delete">Delete</button>
          </div>
        </Wrapper>

      );
    }
    return post;
  }
}

export default FullPost;
