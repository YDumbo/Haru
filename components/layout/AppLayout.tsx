import styled from 'styled-components';
import Header from '../common/Header';

interface IAppLayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  height: 100vh;
`;
const Footer = styled.footer``;
const Contents = styled.div`
  width: 90%;
  margin: auto;
  height: 80%;
  margin-top: 80px;
`;

function AppLayout({ children }: IAppLayoutProps):JSX.Element {
  return (
    <Wrapper>
      <Header isMyPage={true} />
      <Contents>{children}</Contents>
      <Footer></Footer>
    </Wrapper>
  );
}

export default AppLayout;
