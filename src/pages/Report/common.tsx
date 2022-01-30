export interface DataProps {
  data: {
    cycle: number;
    period: number;
    startDate: string;
    maxPeriod: number;
  }[];
}

//CircleList, LineList, BarChart의 x축 시작점
export const START_POINT = 100;

interface GroupProps {
  x: number;
  y: number;
  children: JSX.Element[];
}

export const Group = ({ x, y, children }: GroupProps): JSX.Element => {
  return <g transform={`translate(${x},${y})`}>{children}</g>;
};
