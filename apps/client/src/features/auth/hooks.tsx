// src/features/invitation/model/useInvitation.ts

import { useState } from 'react';

export const useInvitation = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleShareToKakao = () => {
    const { Kakao, location } = window;
    Kakao.Share.sendScrap({
      requestUrl: `${location.href}/3001?`,
    });
  };

  const sendInvitation = async () => {
    setIsLoading(true);
    try {
      // 여기에 실제 초대장 보내는 API 호출 로직을 구현합니다.
      await new Promise((resolve) => {
        handleShareToKakao();
      }); // 임시로 2초 딜레이
      // handleShareToKakao();
      console.log('초대장이 성공적으로 전송되었습니다.');
      // 성공 처리 로직 (예: 알림 표시)
    } catch (error) {
      console.error('초대장 전송 실패:', error);
      // 에러 처리 로직 (예: 에러 메시지 표시)
    } finally {
      setIsLoading(false);
    }
  };

  return { sendInvitation, isLoading };
};
