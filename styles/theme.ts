const size = {
  pc: '75em', // 1200px
  tab: '56.25em', // 900px
  mobile: '31.25em', // 500px
  mobileS: '23.125em', // 370px
};
const window = {
  pc: `@media only screen and (max-width: ${size.pc}px)`,
  tab: `@media screen and (max-width: ${size.tab}px)`,
  mobile: `@media screen and (max-width: ${size.mobile}px)`,
  mobileS: `@media screen and (max-width: ${size.mobileS}px)`,
};
const darkTheme = {
  backgroundColor: '#18181a',
  fontColor: '#F0F4F8',
  pointColor: '#FFFFFF',
  green: '#b0ed97',
  red: '#dc3636',
  blue: '#3585f6',
  highlightBlue: '#627d98',
  gray: '#cdd4d7',
  black100: '#34343a',
  black200: '#18181a',
  black300: '#20202c',
  black400: '#292831',
  black500: '#f8f9fa',
  black600: '#f2f2f2',
  black700: '#ffffff',
};
const lightTheme = {
  backgroundColor: '#f8f9fa',
  fontColor: '#3D3B51',
  pointColor: '#102A43',
  green: '#30a14e',
  red: '#dc3636',
  highlightBlue: '#d9e4ff',
  blue: '#3585f6',
  gray: '#f7f8fa',
  black100: '#ffffff',
  black200: '#f2f2f2',
  black300: '#f8f9fa',
  black400: '#292831',
  black500: '#20202c',
  black600: '#18181a',
  black700: '#0b0b0d',
};
const fontSizes = {
  xsm: '10px',
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  xxl: '28px',
};

export {
  window,
  darkTheme,
  lightTheme,
  fontSizes,
};
