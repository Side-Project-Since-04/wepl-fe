import { OnboardingView } from '@/src/_pages/Onboarding';
import React from 'react';

const Page = () => {
  return (
    <div className="relative m-auto border-green-500 max-w-[360px] h-screen ">
      <nav className="absolute top-0 right-0 mt-4 mr-4">건너뛰기</nav>
      <section className="flex flex-col items-center justify-center text-center h-full">
        <OnboardingView />
      </section>
    </div>
  );
};

export default Page;
