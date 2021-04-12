import styled from 'styled-components';
import Link from 'next/link';
import StyledButton from './StyledButton';

export interface IHeaderProps {
  isMyPage: boolean,
}
const MyPageHeader = styled.div`
  display: flex;
`;
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
  & img {
    width: 80px;
    margin: 10px;
  }
`;

function Header({ isMyPage }:IHeaderProps):JSX.Element {
  return (
    <HeaderWrapper>
      <img src='/images/logo.jpeg' alt="logo" />
      {isMyPage
        ? <MyPageHeader>
            <Link href="/login">
              <StyledButton text= "홈으로 돌아가기" color="blue" size="auto" variant="fill-none" />
            </Link>
            <Link href="/login">
              <StyledButton text= "로그아웃" color="blue" size="auto" />
            </Link>
          </MyPageHeader>
        : <Link href="/login">
            <StyledButton text= "MY PAGE" size="small" color="blue" variant="outline" />
          </Link>
      }
    </HeaderWrapper>
  );
}

export default Header;
