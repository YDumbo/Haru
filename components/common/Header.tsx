import styled from 'styled-components';
import Link from 'next/link';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useContext } from 'react';
import { Button } from 'elpo-ui';
import { ThemeContext } from '../../pages/_app';

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  padding: 0px 10px;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
  background-color: ${({ theme }) => theme.black100};
  z-index: 100;
`;
const Logo = styled.img`
  width: 80px;
  margin: 10px;
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
const Icon = styled.img`
  width: 20px;
`;

function Header():JSX.Element {
  const theme = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <Logo src='/images/logo.png' alt="logo" />
      <MyPageHeader>
          <Link href="/login">
            <Button
              theme="fill"
              mobileViewButton = {{
                icon: <Icon src="/images/logout.png" alt="home_icon" />,
                viewSize: '700',
              }}
            >
              로그아웃
            </Button>
          </Link>
        <StyledDarkModeToggle size={70} onChange = {theme.onToggleDark} checked={theme.dark} />
      </MyPageHeader>
    </HeaderWrapper>
  );
}

export default Header;
