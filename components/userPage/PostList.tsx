import Link from 'next/link';
import styled from 'styled-components';
import IPost from '../../types/post';
import StyledButton from '../common/StyledButton';
import StyledInput from '../common/StyledInput';

interface IPostList {
  post: IPost[];
}

const PostListWrapper = styled.div``;
const List = styled.ul`
  padding: 10px;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 35px 0px;
  font-size: 20px;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  &:hover {
    
  }
`;
const PostListHeader = styled.div`
  font-size: 30px;
  font-weight: 200;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    padding-right: 30px;
    background: ${({ theme }) => `linear-gradient(180deg,rgba(255,255,255,0) 60%, ${theme.highlightBlue} 50%)`}
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const PostListHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

function PostList({ post }:IPostList):JSX.Element {
  return (
    <PostListWrapper>
      <PostListHeader>
        <span>나의 하루들</span>
        <PostListHeaderRight>
          <StyledInput />
          <Link href="/writePage">
            <StyledButton
              text="글 추가"
              color="blue"
              size="small"
              variant="outline"
              label={<img src="/images/write.png" alt="icon" width={20} height={20} />}
            />
          </Link>
        </PostListHeaderRight>
      </PostListHeader>
      <List>
        {post.length !== 0 && post.map((v:IPost) => (
          <ListItem key={v.id}>
            <Link href={`/post/${v.id}`}>
              <a href={`/post/${v.id}`}>
                <div>{v.title}</div>
                <div>{v.writeDate}</div>
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    </PostListWrapper>
  );
}

export default PostList;
