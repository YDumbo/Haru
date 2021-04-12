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
  blue: '#3585f6',
  deepBlue: '#3a4961',
  lightGrey: '#f7f8fa',
};
const theme = {
  window,
  color,
};

export default theme;
