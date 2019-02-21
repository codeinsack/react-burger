import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 20px;
  }
  
  a {
    text-decoration: none;
    color: black;
    
    :hover,
    :active {
      color: #fa923f;
    }
  }
  
  .active {
    color: #fa923f;
  }
`;

export default Wrapper;
