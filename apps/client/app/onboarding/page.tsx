import * as React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@wepl/ui/Carousel.tsx';
import Image1 from './1.jpeg';
import Image2 from './2.jpeg';
import Image from 'next/image';

export default function OnboardingView() {
  const imageArray = [Image1, Image2];
  return (
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
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
