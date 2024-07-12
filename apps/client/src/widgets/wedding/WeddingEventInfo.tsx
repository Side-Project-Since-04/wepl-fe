'use client';
import React from 'react';
import Image from 'next/image';

// ui
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/shadcn-ui/card';
import { HeadLine5 } from '@ui/src/components/HeadLine';
import { SubTitle1 } from '@ui/src/components/Text';

// third
import MarriedCouple from '@/public/home/Married-Couple.png';
import { useGetWeddingInfo } from '@/src/features/wedding/queries';

interface WeddingInfoCardProps {
  // name: string;
  // date: string;
  // weddingTime: string;
  // weddingHall: string;
}

const WeddingEventInfo = () => {
  // const { data, isLoading } = useGetWeddingInfo();
  // console.log(data);
  return (
    <div className="w-screen max-w-[768px] flex flex-col items-center h-[404px] bg-primary-400 gap-24 text-primary-25 p-32 mb-60">
      <WeddingEventInfo.Header name={'홍길동'} />
      <WeddingEventInfo.Card />
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

const WeddingInfoCard = (weddinngInfo: WeddingInfoCardProps) => {
  return (
    <div>
      <Card className="mt-12 bg-neutral-white flex flex-col justify-between items-center w-[260px] h-[336px] border-0">
        <CardHeader className="items-center gap-4 p-0">
          <div className="mt-20 w-104 h-30 p-6 bg-primary-600 rounded-full text-[13px] text-center text-neutral-white">
            우리 결혼합니다
          </div>
          <CardTitle className="text-primary-800 text-[24px]">Wedding day</CardTitle>
          <CardDescription className="text-[32px] font-bold text-auxiliary-red">D-{'365'}</CardDescription>
          <Image src={MarriedCouple} alt="Married-Couple" width={160} height={90} placeholder="empty" />
        </CardHeader>
        <CardFooter className="flex flex-col justify-center items-center w-full h-full gap-4 bg-primary-600 rounded-br-lg rounded-bl-lg text-neutral-white font-normal">
          <CardTitle className="text-14">{'2024년 12월 30일 (토) 오후 2:30'}</CardTitle>
          <CardDescription className="text-14">{'해피웨플타운웨딩홀 3F'}</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

WeddingEventInfo.Header = InfoHeader;
WeddingEventInfo.Card = WeddingInfoCard;

export default WeddingEventInfo;
