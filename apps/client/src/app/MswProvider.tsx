'use client';

import { useEffect, useState } from 'react';

export function MswProvider({ children }: { children: React.ReactNode }) {
  const [isMswInit, setIsMswInit] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const init = async () => {
      const { initMsw } = await import('@/mocks/index');
      initMsw();
      setIsMswInit(true);
    };

    if (!isMswInit) {
      init();
    }
  }, [isMswInit]);

  return <>{children}</>;
}
