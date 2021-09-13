import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius:  0.25rem;
  border: 2px solid #d7d7d7;
  width: 100%;
  display:flex;

  & + div{
    margin-top: 8px;
  }
  ${props => props.isErrored && css`
    color:#c53030;
    border-color: #c53030;
  `}

  ${props => props.isFocused && css`
  color:rgba(68, 78, 114, 1);
    border-color: rgba(68, 78, 114, 1);
  `}

  ${props => props.isFilled && css`
    color: rgba(68, 78, 114, 1);
  `}

  input {
    width:100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: 0px;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--test-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  svg {
    margin-right: 16px;
  }

`;