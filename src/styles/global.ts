import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --blue: #4A91FF;
    --dark-blue: linear-gradient(20.05deg, rgba(68, 78, 114, 1) 0%, rgba(131, 139, 170, 1) 100%);   
    --test-title: #969Cb3;
    --test-body: #000;
  }
  
  html{
    background: var(--blue);
    
    @media(max-width: 1080px){
      font-size:93.75%
    }

    @media(max-width: 720px){
      font-size:87.5%
    }

    @media(max-width: 1080px){
      font-size:93.75%
    }
 }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smmothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
  }
 
  h1, h2, h3, h4, h5, h6, p, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display:flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: #e7e9ee;
    padding: 3rem;
    position: relative;
    border-radius: 18px;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;