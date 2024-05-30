import { OnboardingView } from '@/src/_pages/Onboarding';
import React from 'react';

const Page = () => {
  return (
    <div className="relative h-screen w-full flex flex-col">
      <header className="self-end p-5">건너뛰기</header>
      <section className="flex flex-col items-center justify-center text-center flex-grow">
        <OnboardingView />
      </section>
    </div>
  );
};

export default Page;
