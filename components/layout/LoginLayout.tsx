import styled from 'styled-components';

interface ILoginLayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 130px;
`;
const Contents = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LoginLayout({ children }: ILoginLayoutProps):JSX.Element {
  return (
    <Wrapper>
      <Logo src="/images/logo.jpeg" />
      <Contents>{children}</Contents>
    </Wrapper>
  );
}

export default LoginLayout;
