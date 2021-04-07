const size = {
  pc: '75em', // 1200px
  tab: '56.25em', // 900px
  mobile: '31.25em', // 500px
  mobileS: '23.125em', // 370px
};
const window = {
  pc: `@media screen and (max-width: ${size.pc}px)`,
  tab: `@media screen and (max-width: ${size.tab}px)`,
  mobile: `@media screen and (max-width: ${size.mobile}px)`,
  mobileS: `@media screen and (max-width: ${size.mobileS}px)`,
};
const color = {
  black: '#000000',
  white: '#FFFFFF',
  green: '#30a14e',
  red: '#dc3636',
  blue: '#3677dc',
};
const buttonSize = {
  small: '100px',
  medium: '200px',
  large: '400px',
};
const theme = {
  window,
  color,
  buttonSize,
};

export default theme;
