import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
   
  color: ${(props) => {
    if (props.type === 'danger') {
      return '#944317';
    } if (props.type === 'success') {
      return '#5c9210';
    }
    return 'white';
  }
};

`;

export default Wrapper;
