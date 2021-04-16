import styled from 'styled-components';
import { useRouter } from 'next/router';
import StyledButton from '../../components/common/StyledButton';
import postMock from '../../mockData/postMock.json';

const PostWrapper = styled.div`
  width: 90%;
  margin: auto;
`;
const PostHeader = styled.header`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
    width: 50px;
  }
`;
const PostTitle = styled.h1`
  padding: 30px 0;
  border-bottom: 1px solid #e8e8e8;
`;
const PostWriteDate = styled.h3`
  padding: 20px 0;
  border-bottom: 1px solid #e8e8e8;
`;
const PostWriteContent = styled.div`
  padding: 20px 0;
`;
const PostEditButtonGroup = styled.div`
  display: flex;
  width: 220px;
  justify-content: space-between;
`;

function Post():JSX.Element {
  const router = useRouter();
  const isMe = true;
  const { postId } = router.query;
  const onClickBack = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <>
    <PostHeader>
      <button type="button" onClick={onClickBack}>
        <img src="/images/back.png" alt="back_icon" />
      </button>
      {isMe
        && (
        <PostEditButtonGroup>
          <StyledButton text="수정하기" color="blue" size="small" variant="outline"/>
          <StyledButton text="삭제하기" color="red" size="small"/>
        </PostEditButtonGroup>
        )
      }
    </PostHeader>
    {
      postMock.data
        .filter((posts) => posts.id === Number(postId))
        .map((post) => (
          <PostWrapper key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostWriteDate>작성일자: {post.writeDate}</PostWriteDate>
            <PostWriteContent>{post.contents}</PostWriteContent>
          </PostWrapper>
        ))
    }
    </>
  );
}

export default Post;
