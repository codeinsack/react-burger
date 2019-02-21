import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
  
  .Edit {
    label {
      display: block;
      color: grey;
    }
    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      outline: none;
      color: #fa923f;
      
      :hover,
      :active {
        color: #521751;
      }
      
      .Delete {
        color: red;
        
        :hover,
        :active {
          color: darkred;
        }
      }
    }
  }
`;

export default Wrapper;
