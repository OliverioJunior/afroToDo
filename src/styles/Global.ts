import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Inter",  Arial, Helvetica, sans-serif;
  }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }
  :root {
    --blue-100:#C8E6D2;
    --red-400:#FE5F55;
    --green-300: #70AE6E;
    --green-500: #466E45;
    --gray-900: #0F0A0A;
    --gray-700: #4F4F4F;
    --gray-500: #707070;
    --gray-200: #EFF1F3;
    --gray-100: #F1F7ED;
    --white: #FFFFFF;
  }
  body {
    background-color:var(--gray-200);
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor:pointer;
  }
  #root{
    min-height: 100vh;
  }
  a {
    color: initial;
    text-decoration:none;
  }
  input {

  }

`;
