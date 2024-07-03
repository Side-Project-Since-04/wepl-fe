export async function initMsw() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    await worker.start({
      /**
       * MSW를 개발서버에서만 사용하려고 하는데,
       * HMR으로 빌드된 파일들을 핸들링하냐고 계속 로그를 남김.
       * 에러 발생된 것들 외에는 로그 숨김
       */
      onUnhandledRequest: (req) => {
        if (req.url.startsWith('/')) {
          console.warn('Found an unhandled %s request to $s', req.method, req.url);
        }
      },
      // quiet: true,
    });
  }
}
