'use client';
import Script from 'next/script';

function KakaoScript() {
  const onLoad = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET);
  };

  return <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={onLoad} />;
}

export default KakaoScript;
