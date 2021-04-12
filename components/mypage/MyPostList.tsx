import styled from 'styled-components';
import IPost from '../../types/post';
import StyledButton from '../common/StyledButton';

interface IMyPostList {
  post: IPost[];
}

const PostListWrapper = styled.div``;
const PostList = styled.ul`
  padding: 10px;
`;
const PostListItem = styled.li`
  padding: 35px 0px;
  font-size: 20px;
  border-bottom: 1px solid #e8e8e8;
`;
const MyPostListHeader = styled.div`
  font-size: 30px;
  font-weight: 200;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    padding-right: 30px;
    background: linear-gradient(180deg,rgba(255,255,255,0) 60%, #d9e4ff 50%);
  }
`;

function MyPostList({ post }: IMyPostList):JSX.Element {
  return (
    <PostListWrapper>
      <MyPostListHeader>
        <span>나의 하루들</span>
        <StyledButton
          text="글 추가"
          color="blue"
          size="small"
          variant="outline"
          label={<img src="/images/write.png" alt="icon" width={20} height={20} />}
        />
      </MyPostListHeader>
      <PostList>
        {post.length !== 0 && post.map((v) => (
          <PostListItem key={v.id}>{v.title}</PostListItem>
        ))}
      </PostList>
    </PostListWrapper>
  );
}

export default MyPostList;
