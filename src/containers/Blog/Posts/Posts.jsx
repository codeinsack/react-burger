import React, { Component } from 'react';

import Wrapper from './PostsStyled';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    // console.log(this.props);
    axios.get('/posts')
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => ({
          ...post,
          author: 'Eugene',
        }));
        this.setState({ posts: updatedPosts });
      });
  }

  postSelectedHandler = (id) => {
    const { history } = this.props;
    history.push(`/${id}`);
  };


  render() {
    const { posts } = this.state;
    const newPosts = posts.map(post => (
      // <Link to={`/${post.id}`} key={post.id}>
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}
        {...this.props}
      />
      // </Link>
    ));
    return (
      <Wrapper>
        {newPosts}
      </Wrapper>
    );
  }
}

export default Posts;
