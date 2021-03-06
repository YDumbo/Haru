import styled from 'styled-components';
import moment from 'moment';
import postMock from '../../mockData/postMock.json';
import AppLayout from '../../components/layout/AppLayout';
import HeatMap from '../../components/userPage/HeatMap';
import WiseSaying from '../../components/userPage/WiseSaying';
import UserPostList from '../../components/userPage/PostList';
import Profile from '../../components/userPage/Profile';

const UserPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserPageIntro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
  align-items: center;
  padding: 50px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.gray};
`;
const UserPagePostList = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
const Today = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin: 20px;
`;
function userPage():JSX.Element {
  const currentDate = new Date();
  const currentDay = moment().format('MM월 DD일');
  const currentYear = currentDate.getFullYear();
  const commitData = postMock.data.map((e) => e.writeDate);
  return (
    <AppLayout>
      <UserPageWrapper>
        <UserPageIntro>
          <Profile profileImage="/images/sampleProfile.jpeg" nickName="chanmi" />
          <Today>&quot;오늘은{currentDay}입니다&quot;</Today>
          <WiseSaying />
          <HeatMap currentYear={currentYear} commitData={commitData} />
        </UserPageIntro>
        <UserPagePostList>
          <UserPostList post={postMock.data} />
        </UserPagePostList>
      </UserPageWrapper>
    </AppLayout>
  );
}

export default userPage;
