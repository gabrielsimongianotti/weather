import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  
  div{
    display: flex;
    height: 20px;
    justify-content: space-between;
    & + div {
      height: auto
    }
  }
  
`;