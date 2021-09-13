import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1125px;
  height:calc(100vh - 120px);
  margin: auto;
  border-radius: 10px;
  padding: 20px;
  
  display: grid; 	
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  
  @media only screen and (max-width: 1000px) {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 570px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;