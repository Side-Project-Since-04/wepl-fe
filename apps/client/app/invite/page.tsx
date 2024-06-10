import React from 'react';

import { Button } from '@wepl/ui/Button.tsx';

const InvitePage = () => {
  return (
    <main className=" flex flex-col items-center justify-center text-center h-full gap-[16px]">
      <div className="flex items-center justify-center">
        <img src="invite/invitation.svg" />
      </div>
      <div>
        <div className="my-[4px]">웨플 초대하기</div>
        <div className="text-gray-500">결혼 일정과 지출을 함께 관리할 수 있습니다.</div>
      </div>
      <Button className="bg-[#FAE100] w-[320px] h-[50px]" variant="outline">
        카카오톡 초대하기
      </Button>
    </main>
  );
};

export default InvitePage;
