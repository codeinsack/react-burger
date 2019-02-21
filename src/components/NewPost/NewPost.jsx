import React, { Component } from 'react';

import Wrapper from './NewPostStyled';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
  };

  render() {
    const { title, content, author } = this.state;

    return (
      <Wrapper>
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button type="button">Add Post</button>
      </Wrapper>
    );
  }
}

export default NewPost;
