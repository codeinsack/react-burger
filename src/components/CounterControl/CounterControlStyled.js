import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150px;
  padding: 20px;
  box-sizing: border-box;
  margin: 16px;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  display: inline-block;

  :hover,
  :active {
    background-color: #eee;
}
`;

export default Wrapper;
