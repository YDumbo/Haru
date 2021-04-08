interface IPost {
  id: number,
  writer: {
    id: string,
    nickName: string
  },
  title: string
  contents: string,
  writeDate: string;
}

export default IPost;
