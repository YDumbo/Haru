interface IUser {
  isLoggedIn: boolean,
  profileImg: string,
  nickName: string,
  social: 'naver' | 'google' | 'kakao',
}
export default IUser;
