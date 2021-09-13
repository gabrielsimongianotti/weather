import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px auto;
  padding: 20px;
  max-width: 1125px;
  display: flex;

  height: 100px;
  align-items: center;
  justify-content: space-between;
  background: var(--background);
  p {
    color: #fff;
    font-size: 40px;
  }
  button{
    background: #80bbf9;
    color: #fff;
    p {
      color: var(--light-yellow);
      font-size: 26px;
    }
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    height: 50px;
    width: 70px;
    justify-content: space-around;
    flex-direction: row;
    border: 0px
  }
`;