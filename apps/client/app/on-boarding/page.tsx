'use client';
import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Image1 from './1.jpeg';
import Image2 from './2.jpeg';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@wepl/ui/Carousel.tsx';
import WeplHeader from '@wepl/ui/components/Header/index.tsx';
import { Button } from '@wepl/ui/Button.tsx';

export default function OnboardingPage() {
  const imageArray = [Image1, Image2];
  const router = useRouter();

  const RightHeader = () => {
    const handleNext = () => {
      router.push('/input');
    };
    return (
      <Button onClick={handleNext} variant={'ghost'}>
        건너뛰기
      </Button>
    );
  };

  return (
    <div className="relative h-screen w-full flex flex-col">
      <WeplHeader right={<RightHeader />} />
      <section className="flex flex-col items-center justify-center text-center flex-grow">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 flex justify-center items-center">
                  <Image src={imageArray[index]} alt="wepl" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}
