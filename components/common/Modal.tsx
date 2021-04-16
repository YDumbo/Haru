import styled from 'styled-components';
import StyledButton from './StyledButton';

interface IModalProps {
  onClose: () => void,
  onConfirm: (e: React.MouseEvent<HTMLButtonElement>) => void,
  title: string,
  content: React.ReactNode;
}
const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0,0,0,0.4);
`;
const ModalWrapper = styled.div`
  position: absolute;
  width: 320px;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  padding: 10px 20px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 8px rgba(0,0,0,0.125);
  background-color: white;
  color: black;
`;
const ModalTitle = styled.h3`
  padding: 10px 0;
`;
const ModalContent = styled.div`
  padding: 10px 0;
`;
const ModalButtonGroup = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`;

function Modal({
  onClose, title, content, onConfirm,
}: IModalProps):JSX.Element {
  return (
    <>
      <Overlay />
      <ModalWrapper>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{content}</ModalContent>
        <ModalButtonGroup>
          <StyledButton text="확인" color="red" variant="outline" size="small" onClick={onConfirm}/>
          <StyledButton text="취소" color="blue" variant="outline" size="small" onClick={onClose}/>
        </ModalButtonGroup>
      </ModalWrapper>
    </>
  );
}

export default Modal;
