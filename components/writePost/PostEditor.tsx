import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';

const PostEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  border: none;
  font-size: 40px;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
  &:focus {
    outline: none;
  }
`;

function PostEditor():JSX.Element {
  return (
    <PostEditorWrapper>
      <TitleInput placeholder="제목을 입력하세요" />
      <Editor
        initialValue="글을 작성하세요!"
        previewStyle="tab"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </PostEditorWrapper>
  );
}

export default PostEditor;
