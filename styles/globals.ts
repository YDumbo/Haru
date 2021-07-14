import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'YiSunShinDotumM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YiSunShinDotumM.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: '양진체';
    src: url('https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff') format('woff');
    font-weight: normal;
    font-style: normal; 
  }
  @font-face {
    font-family: 'S-CoreDream-6Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'MapoPeacefull';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoPeacefullA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumBarunpen';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumBarunpen.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
      font-family: 'BMDOHYEON';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  html,
  body {
    background-color: ${({ theme }: {theme}) => theme.backgroundColor};
    padding: 0;
    margin: 0;
    font-family: 'NanumBarunpen', 'IBMPlexSansKR-Regular', sans-serif;
    color: ${({ theme }: {theme}) => theme.fontColor};
  }
  h1,h2,h3,h4,h5 {
    padding: 0;
    margin: 0;
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
