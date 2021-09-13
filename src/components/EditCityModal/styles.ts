import styled from 'styled-components';
export const Container = styled.div`
  overflow: scroll;
  width: auto;
  height: 80vh;
  overflow: scroll;

  h2 {
    color: var(--test-body);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div{
    margin-bottom: 1rem;
  }
  
  button[type="submit"] {
    width: 100%;
    padding:0 1.5rem;
    height: 4rem;
    background: #47BFDF;
    color: #E7E9EE;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;