import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/shadcn-ui/card';
import { HeadLine3, HeadLine5 } from '@ui/src/components/HeadLine';
const WeddingEventInfo = () => {
  // const { isLoading, data } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () => fetch('http://localhost:3030/user?fields[0]=username&fields[1]=dDay').then((res) => res.json()),
  // });

  // if (isLoading) return <>Loading...</>;

  return (
    <div className="flex flex-col items-center justify-center">
      <div>{'길동'}님 1년 후 결혼식 입니다.</div>
      <HeadLine3>D-365</HeadLine3>
      <Card className="mt-12 bg-gray-50 flex justify-between items-center w-[320px] h-[72px] p-4">
        <CardHeader className="flex flex-col items-start space-y-1 w-[150px]">
          <CardTitle className="text-button-sm">🎉 이벤트 일정</CardTitle>
          <CardDescription className="text-[12px]">2024.12.30(토) AM 11:30</CardDescription>
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

export default WeddingEventInfo;
