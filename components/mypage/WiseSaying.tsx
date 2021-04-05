import styled from 'styled-components';

const WiseSayingWrapper = styled.div`
  margin: 20px 0;
`;
const Highlight = styled.span`
  padding-right: 10px;
  background: linear-gradient(180deg,rgba(255,255,255,0) 60%, #afe8af 50%);
`;

function WiseSaying():JSX.Element {
  return (
    <WiseSayingWrapper>
      <Highlight>&quot;여러분이 보다 보람찬 인생을 살려면 생각하는 방식을 바꿔야 합니다&quot;</Highlight>
    </WiseSayingWrapper>
  );
}

export default WiseSaying;
