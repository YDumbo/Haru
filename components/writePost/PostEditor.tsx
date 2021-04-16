import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';

const PostEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const TitleInput = styled.input`
  border: none;
  font-size: 40px;
  padding: 20px;
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
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </PostEditorWrapper>
  );
}

export default PostEditor;
