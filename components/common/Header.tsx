import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 0px 10px;
  border-bottom: 1px solid #e8e8e8;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
  background-color: white;
  & img {
    width: 80px;
    margin: 10px;
  }
`;

function Header():JSX.Element {
  return (
    <HeaderWrapper>
      <img src='/images/logo.jpeg' alt="logo" />
      <title>나의 하루</title>
    </HeaderWrapper>
  )
}

export default Header;
