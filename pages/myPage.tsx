import styled from 'styled-components';
import Image from 'next/image';
import postMock from '../mockData/postMock.json';
import AppLayout from '../components/layout/AppLayout';
import HeatMap from '../components/mypage/HeatMap';
import WiseSaying from '../components/mypage/WiseSaying';
import MyPostList from '../components/mypage/MyPostList';
import moment from 'moment';

const MyPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const MyPageLeft = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
`;
const MyPageRight = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;
const MyProfileWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
const MyProfileNickName = styled.div`

`;
const Today = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin: 20px;
`;

const MyProfileImage = styled(Image)`
  border-radius: 45%;
`;
const MyPostListTitle = styled.div`
  font-size: 30px;
  font-weight: 200;
  padding: 10px;
`;
function myPage():JSX.Element {
  const currentDate = new Date();
  const currentDay = moment().format('MM월 DD일');
  const currentYear = currentDate.getFullYear();
  const commitData = postMock.data.map((e) => e.writeDate);
  return (
    <AppLayout>
      <MyPageWrapper>
        <MyPageLeft>
          <MyProfileWrapper>
            <MyProfileImage src="/images/sampleProfile.jpeg" alt="profileImage" width="100" height="100" />
            <MyProfileNickName>CHAN MI</MyProfileNickName>
          </MyProfileWrapper>
          <Today>&quot;오늘은{currentDay}입니다&quot;</Today>
          <WiseSaying />
          <HeatMap currentYear={currentYear} commitData={commitData} />
        </MyPageLeft>
        <MyPageRight>
          <MyPostListTitle>나의 하루들</MyPostListTitle>
          <MyPostList post={postMock.data} />
        </MyPageRight>
      </MyPageWrapper>
    </AppLayout>
  );
}

export default myPage;
