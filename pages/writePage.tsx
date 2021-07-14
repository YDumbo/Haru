import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'elpo-ui';
import styled from 'styled-components';
import Modal from '../components/common/Modal';

const PostEditorWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
`;
const ButtonGroup = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`;
const PostEditor = dynamic(
  () => import('../components/writePost/PostEditor'),
  { ssr: false },
);

function writePost():JSX.Element {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHandleClickModalOpen = () => {
    setIsModalOpen(true);
  };
  const onHandleClickModalClose = () => {
    setIsModalOpen(false);
  };
  const onHandleExitConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };
  return (
    <PostEditorWrapper>
      <PostEditor />
      <ButtonGroup>
        <Button
          theme="outlined"
          mobileViewButton={{
            icon: <img src="/images/logout.png" alt="home_icon" width={20}/>,
            viewSize: '700',
          }}
          onClick={onHandleClickModalOpen}
        >
          나가기
        </Button>
        <Button
          mobileViewButton={{
            icon: <span>게시</span>,
            viewSize: '700',
          }}
        >
          게시하기
        </Button>
      </ButtonGroup>
      {isModalOpen && <Modal
      onClose={onHandleClickModalClose}
      title="정말로 나가시겠습니까?"
      content="나가신 후에는 내용을 복구할 수 없습니다."
      onConfirm={onHandleExitConfirm}
      />}
    </PostEditorWrapper>
  );
}

export default writePost;
