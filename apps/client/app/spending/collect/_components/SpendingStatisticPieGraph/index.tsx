import { Pie } from '@nivo/pie';

interface SpendingStatisticPieGraphProps {
  allPaidSpending: number;
  data: PieDataType<string>[];
}

export type PieDataType<T extends string> = {
  id: T;
  label: T;
  value: number;
  color: string;
};

export const SpendingStatisticPieGraph = ({ allPaidSpending, data }: SpendingStatisticPieGraphProps) => {
  const showEmptyPieGraph = allPaidSpending === 0;
  const emptyData = [{ id: 'empty', label: 'empty', value: 100, color: '#e2e8f0' }];

  return (
    <Pie
      colors={{ datum: 'data.color' }}
      data={showEmptyPieGraph ? emptyData : data}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      height={156}
      innerRadius={0.4}
      isInteractive={false}
      padAngle={0.7}
      width={156}
    />
  );
};
