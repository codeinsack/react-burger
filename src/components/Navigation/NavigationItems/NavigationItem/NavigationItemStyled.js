import styled from 'styled-components';

const Wrapper = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  
  a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    
    color: ${props => (props.active ? '#40a4c8' : null)};
    
    :hover,
    :active {
      color: #40a4c8;
    }
  }
  
  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
    
    a {
      color: white;
      text-decoration: none;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;
      background-color: ${props => (props.active ? '#8f5c2c' : null)};
      border-bottom: ${props => (props.active ? '4px solid #40a4c8' : null)};
      
      :hover,
      :active,
      .active {
        background-color:#8f5c2c;
        border-bottom: 4px solid #40a4c8;
      }
    }
  }
`;

export default Wrapper;
