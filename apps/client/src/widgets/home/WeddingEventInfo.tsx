import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/shadcn-ui/card';
import { HeadLine3, HeadLine5 } from '@ui/src/components/HeadLine';
import { SubTitle1 } from '@ui/src/components/Text';

const WeddingEventInfo = () => {
  // const { isLoading, data } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () => fetch('http://localhost:3030/user?fields[0]=username&fields[1]=dDay').then((res) => res.json()),
  // });

  // if (isLoading) return <>Loading...</>;

  return (
    <div className="w-screen max-w-[768px] flex flex-col items-center h-[404px] bg-primary-400 gap-24 text-primary-25 p-32">
      <InfoHeader name="홍길동" />
      <WeddingInfoCard />
    </div>
  );
};
const InfoHeader = ({ name }: { name: string }) => {
  return (
    <div className="text-center">
      <SubTitle1>복잡한 결혼 준비를 쉽도록</SubTitle1>
      <HeadLine5>결혼을 축하드려요! {'홍길동'}님</HeadLine5>
    </div>
  );
};

const WeddingInfoCard = () => {
  return (
    <div>
      <Card className="mt-12 bg-neutral-white flex flex-col justify-between items-center w-[260px] h-[336px] p-4">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-14s">Wedding day</CardTitle>
          <CardDescription className="text-[36px] font-bold text-red-500">-365</CardDescription>
        </CardHeader>
        <div className="h-42 w-px bg-gray-300 mx-3" />
        <CardHeader className="flex flex-col items-start space-y-1 w-[130px]">
          <CardTitle className="text-button-sm">🎈 장소</CardTitle>
          <CardDescription className="text-[12px] ">해피웨플타운웨딩홀 3F</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

WeddingEventInfo.Header = InfoHeader;
WeddingEventInfo.Card = WeddingInfoCard;
export default WeddingEventInfo;
