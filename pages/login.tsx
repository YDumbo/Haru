import styled from 'styled-components';
import { NaverLoginButton, KakaoLoginButton, GoogleLoginButton } from '../components/login/SocialButton';
import LoginLayout from '../components/layout/LoginLayout';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h3 {
    background: linear-gradient(180deg,rgba(255,255,255,0) 60%, #afe8af 50%);
  }
`;
const SocialLoginButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  & button {
    margin: 10px;
  }
`;
function login():JSX.Element {
  return (
    <LoginLayout>
      <LoginWrapper>
        <h3>간편 로그인으로 하루 서비스를 이용해보세요</h3>
        <SocialLoginButtonWrapper>
          <NaverLoginButton />
          <KakaoLoginButton />
          <GoogleLoginButton />
        </SocialLoginButtonWrapper>
      </LoginWrapper>
    </LoginLayout>
  );
}

export default login;
