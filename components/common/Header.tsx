import styled from 'styled-components';
import Link from 'next/link';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useContext } from 'react';
import StyledButton from './StyledButton';
import { ThemeContext } from '../../pages/_app';

export interface IHeaderProps {
  isMyPage: boolean,
}
const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  padding: 0px 10px;
  border-bottom: 1px solid #e8e8e8;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
  background-color: white;
  z-index: 100;
  & img {
    width: 80px;
    margin: 10px;
  }
`;
const MyPageHeader = styled.div`
  display: flex;
  align-items: center;
`;
const StyledDarkModeToggle = styled(DarkModeToggle)`
  margin: 0 10px;
  &:focus {
    outline: none;
  }
`;

function Header({ isMyPage }:IHeaderProps):JSX.Element {
  const theme = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <img src='/images/logo.png' alt="logo" />
      <MyPageHeader>
        {isMyPage
          ? <>
              <Link href="/login">
                <StyledButton text= "홈으로 돌아가기" color="blue" size="auto" variant="fill-none" />
              </Link>
              <Link href="/login">
                <StyledButton text= "로그아웃" color="blue" size="auto" />
              </Link>
            </>
          : <Link href="/login">
              <StyledButton text= "MY PAGE" size="small" color="blue" variant="outline" />
            </Link>
        }
        <StyledDarkModeToggle size={70} onChange = {theme.onToggleDark} checked={theme.dark} />
      </MyPageHeader>
    </HeaderWrapper>
  );
}

export default Header;
