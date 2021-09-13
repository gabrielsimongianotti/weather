import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

export const Container = styled(Tilt)`
  width: 100%;
  height: 270px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 18px;
  box-shadow: -5px 10px 40px 3px rgba(19, 35, 78, 0.2);
  transform-style: preserve-3d;
  padding-top: 10px;
  .icons{
    width: 100%;
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  height: 50px;
  color: #fff;
  transform: translateZ(30px);
`;

export const TemperaturaCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  width: auto;
  min-height: 150px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 18px;
  box-shadow: -5px 10px 40px 3px rgba(19, 35, 78, 0.2);
  transform: translateZ(30px);
  div {
    p {
      font-size: 37px;
      color: #fff;
      text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
    }
  }
  p {
    font-size: 54px;
    color: #fff;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  }
`;