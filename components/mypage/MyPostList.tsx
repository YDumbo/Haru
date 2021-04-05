import styled from 'styled-components';
import IPost from '../../interfaces/PostInterface';

interface IMyPostList {
  post: IPost[];
}
const PostListWrapper = styled.div``;
const PostList = styled.ul`
  padding: 10px;
`;
const PostListItem = styled.li`
  padding: 20px 0px;
  font-size: 20px;
  border-bottom: 1px solid #e8e8e8;
`;

function MyPostList({ post }: IMyPostList):JSX.Element {
  return (
    <PostListWrapper>
      <PostList>
        {post.length !== 0 && post.map((v) => (
          <PostListItem key={v.id}>{v.title}</PostListItem>
        ))}
      </PostList>
    </PostListWrapper>
  );
}

export default MyPostList;
