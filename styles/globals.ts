import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumBarunpen';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumBarunpen.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'NanumBarunpen', sans-serif;
  }
  ul, li {
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  button {
    background-color: inherit;
    border: none;
  }
  li {
    list-style:none;
  }
`;

export default GlobalStyle;
