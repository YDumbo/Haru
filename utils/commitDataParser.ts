import moment from 'moment';

interface IcommitData {
  date: string,
  commit: number,
}

interface ICommitDataParserProps {
  currentYear: number;
  commitData: string[];
}

const commitDataParser = ({ currentYear, commitData }: ICommitDataParserProps): IcommitData[] => {
  const startDate = moment(`${currentYear}0101`);
  const data = [];
  new Array(365).fill(0).forEach((_, i) => {
    const date = startDate.clone().add(i, 'day').format('YYYY-MM-DD');
    const count = commitData.filter((element) => date === element).length;
    data.push({ date, commit: count });
  });
  return data;
};

export default commitDataParser;
