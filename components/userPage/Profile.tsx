import styled from 'styled-components';

interface IProfileProps {
  profileImage: string,
  nickName: string
}

const MyProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const MyProfileImage = styled.img`
  border-radius: 45%;
  width: 80px;
  height: 80px;
`;
const MyProfileNickName = styled.div`
  padding: 20px;
  font-size: 20px;
`;

function Profile({ profileImage, nickName }: IProfileProps):JSX.Element {
  return (
    <MyProfileWrapper>
      <MyProfileImage src={profileImage} alt="profileImage" />
      <MyProfileNickName>{nickName}</MyProfileNickName>
    </MyProfileWrapper>
  );
}

export default Profile;
