import { useEffect, useState } from 'react';
import styled from 'styled-components';
import commitDataParser from '../../utils/commitDataParser';

interface IHashMapProps {
  currentYear: number,
  commitData: string[];
}
interface IStyleRect{
  level: number;
}
const GrassBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SvgGrassBox = styled.svg`
  overflow: hidden;
  width: 100%;
  height: 112px;
`;
const ColorStateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 140px;
  & div {
    font-weight: 200;
    font-size: 13px;
  }
`;
const Week = styled.g``;
const Day = styled.rect<IStyleRect>`
  fill: ${(props) => (props.level === 0 ? '#ebedf0'
    : props.level === 1 ? '#9be9a8'
      : props.level === 2 ? '#40c463'
        : props.level === 3 ? '#30a14e'
          : props.level === 4 && '#216e39')
};
`;

function HeatMap({ currentYear, commitData }: IHashMapProps):JSX.Element {
  const [commit, setCommit] = useState([]);
  useEffect(() => {
    setCommit(commitDataParser({ currentYear, commitData }));
  }, []);
  return (
    <GrassBoxWrapper>
      <p>{`${currentYear}년 나의 기록들`}</p>
      <SvgGrassBox>
        <g>
          {commit.length !== 0 && new Array(52).fill(0).map((_el, i) => (
            <Week transform={`translate(${i * 14}, 0)`} key={i}>
              {new Array(7).fill(0).map((_, index) => {
                const current = i * 7;
                const count = commit[current + index].commit;
                const level = count <= 3 ? count : 4;
                return (
                  <Day
                    key={index}
                    y={index * 13}
                    rx={2} ry={2}
                    width={10}
                    height={10}
                    level={level}
                  />
                );
              })}
            </Week>
          ))}
        </g>
      </SvgGrassBox>
      <ColorStateBox>
        <div>Less</div>
        <svg width={10} height={10}>
          <Day width={10} height={10} rx={2} ry={2} level={0} />
        </svg>
        <svg width={10} height={10}>
          <Day width={10} height={10} rx={2} ry={2} level={1}/>
        </svg>
        <svg width={10} height={10}>
          <Day width={10} height={10} rx={2} ry={2} level={2}/>
        </svg>
        <svg width={10} height={10}>
          <Day width={10} height={10} rx={2} ry={2} level={3}/>
        </svg>
        <svg width={10} height={10}>
          <Day width={10} height={10} rx={2} ry={2} level={4}/>
        </svg>
        <div>More</div>
      </ColorStateBox>
    </GrassBoxWrapper>
  );
}

export default HeatMap;
