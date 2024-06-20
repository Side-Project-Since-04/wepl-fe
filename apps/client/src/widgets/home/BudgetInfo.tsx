import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui/shadcn-ui/card';
import { SubTitle1 } from '@ui/src/components/Text';
import React from 'react';

const BudgetInfo = () => {
  return (
    <Card className="w-[332px] ">
      <CardHeader>
        <CardTitle>
          <SubTitle1>예산 대비 지출 27% 사용</SubTitle1>
        </CardTitle>
        <CardDescription className="text-[12px]">해당 비율은 총 예산금액/총 지출금액 비율입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default BudgetInfo;
