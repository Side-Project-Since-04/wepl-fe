import React from 'react';

import { Button } from '@wepl/ui/Button.tsx';

const InvitePage = () => {
  return (
    <main className="bg-primary-500 flex flex-col items-center justify-center text-center h-full">
      <div className="flex items-center justify-center">
        <img src="invitation.svg" />
        <span className="text-headline1 text-neutral-white">wepl</span>
      </div>
      <div className="text-neutral-white">결혼 준비에도 관리가 필요하니까</div>
      <Button className="mt-8 w-72 h-14" variant="outline">
        카카오톡 초대하기
      </Button>
    </main>
  );
};

export default InvitePage;
