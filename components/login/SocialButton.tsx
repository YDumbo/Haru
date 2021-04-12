import styled from 'styled-components';

interface ISocialLoginButtonType {
  socialType: string,
}

const socialLoginColor = {
  kakao: '#ffe500',
  naver: '#1fc800',
  google: '#2d8bfe',
};

const Button = styled.button<ISocialLoginButtonType>`
  background-color: ${(props) => props.socialType};
  width: 200px;
  display: flex;
  color: white;
  align-items: center;
  border-radius: 5px;
  & img {
    width: 40px;
    margin-right: 15px;
  }
`;

function KakaoLoginButton():JSX.Element {
  return (
    <Button socialType={socialLoginColor.kakao}>
      <img src="/images/kakao-login.png" alt="kakao-login" />
      <div>카카오로 로그인하기</div>
    </Button>
  );
}

function NaverLoginButton():JSX.Element {
  return (
    <Button socialType={socialLoginColor.naver}>
      <img src="/images/naver-login.png" alt="naver-login" />
      <div>네이버로 로그인하기</div>
    </Button>
  );
}

function GoogleLoginButton():JSX.Element {
  return (
    <Button socialType={socialLoginColor.google}>
      <img src="/images/google-login.png" alt="google-login" />
      <div>구글로 로그인하기</div>
    </Button>
  );
}

export {
  KakaoLoginButton,
  NaverLoginButton,
  GoogleLoginButton,
};
