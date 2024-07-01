import BudgetInfo from '@/src/widgets/home/BudgetInfo';
import WeddingEventInfo from '@/src/widgets/home/WeddingEventInfo';
import { Button } from '@ui/src/Button';
import Header from '@ui/src/components/Header';
import Image from 'next/image';
import React from 'react';

const MainPage = () => {
  const LeftHeader = () => {
    return (
      <Button className="hover:bg-inherit" variant={'ghost'}>
        <Image src="/main/logo.png" alt="wepl" width={80} height={36} />
      </Button>
    );
  };
  return (
    <>
      <Header left={<LeftHeader />} />
      <div className="flex flex-col justify-center items-center gap-20 mb-20">
        <WeddingEventInfo />
      </div>
      <BudgetInfo />
    </>
  );
};

export default MainPage;
