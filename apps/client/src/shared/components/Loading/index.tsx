import Image from 'next/image';
import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-primary-500">
      <div className="animate-bounce">
        <Image alt="wepl" height={64} src="/logo.svg" width={64} />
      </div>
      <div className="mt-6 flex text-[24px] space-x-2 text-neutral-white">
        <span className="animate-pulse">w</span>
        <span className="animate-pulse">e</span>
        <span className="animate-pulse">p</span>
        <span className="animate-pulse">l</span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
