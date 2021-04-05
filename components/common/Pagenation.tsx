interface IPagenationProps {
  limit:number,
  currentPage: () => void;
}

function Pagenation({ limit, currentPage }: IPagenationProps):JSX.Element {
  return (
    <div></div>
  );
}

export default Pagenation;
