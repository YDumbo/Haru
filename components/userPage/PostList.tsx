import Link from 'next/link';
import { Button } from 'elpo-ui';
import styled from 'styled-components';
import IPost from '../../types/post';
import StyledInput from '../common/StyledInput';

interface IPostList {
  post: IPost[];
}

const PostListWrapper = styled.div``;
const PostListTitle = styled.span`
  padding-right: 30px;
  background: ${({ theme }) => `linear-gradient(180deg,rgba(255,255,255,0) 60%, ${theme.highlightBlue} 50%)`};
  @media only screen and (max-width: 780px) {
    margin-bottom: 40px;
  }
`;
const List = styled.ul`
  padding: 10px;
`;
const ListItem = styled.li`
  display: flex;
  background-color: ${({ theme }) => theme.black100};
  margin-bottom: 20px;
  justify-content: space-between;
  padding: 20px;
  font-size: 20px;
  border-radius: 5px;
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
  @media only screen and (max-width: 780px) {
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
        <PostListTitle>
          <span role="img" aria-label="emoji">🌿</span>
          나의 하루들
        </PostListTitle>
        <PostListHeaderRight>
          <StyledInput />
          <Link href="/writePage">
            <Button
              theme="outlined"
              endIcon={<img src="/images/write.png" alt="icon" width={20} height={20} />}
              mobileViewButton = {{
                icon: <img src="/images/write.png" alt="icon" width={20} height={20} />,
                viewSize: '700',
              }}
            >
              글 추가
            </Button>
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
