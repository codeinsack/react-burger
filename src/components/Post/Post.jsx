import React from 'react';
import Wrapper from './PostStyled';


const post = ({
  title, author, clicked,
}) => {
  return (
    <Wrapper onClick={clicked}>
      <h1>{title}</h1>
      <div className="Info">
        <div className="Author">{author}</div>
      </div>
    </Wrapper>
  );
};

export default post;
