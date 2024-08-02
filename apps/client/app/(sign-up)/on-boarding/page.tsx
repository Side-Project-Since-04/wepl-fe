import * as React from 'react';
// import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem } from '@ui/src/Carousel';
import { Button } from '@ui/src/Button';
import Link from 'next/link';
import { Header } from '@ui/src/components/Header';

export const OnboardingPage = () => {
  return (
    <div className="relative h-screen w-full flex flex-col bg-gray-700">
      <Header right={<RightHeader />} />
      <section className="flex flex-col items-center justify-center text-center flex-grow">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 flex justify-center items-center">
                  {/* <Image src={imageArray[index]} alt="wepl" /> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
};

export default OnboardingPage;

const RightHeader = () => {
  return (
    <Button asChild className="hover:bg-inherit mr-12" variant="ghost">
      <Link className="text-gray-400 text-base hover:text-white" href="/user-info">
        건너뛰기
      </Link>
    </Button>
  );
};
