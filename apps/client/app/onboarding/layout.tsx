import React from 'react';

const OnboardingLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="relative h-screen w-full flex flex-col">
      <header className="self-end p-5">건너뛰기</header>
      <section className="flex flex-col items-center justify-center text-center flex-grow">{children}</section>
    </div>
  );
};

export default OnboardingLayout;
