import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient 생성 함수
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 4 * 1000,
        refetchInterval: 4 * 1000,
      },
    },
  });

const renderWithQuery = (ui, { client = createTestQueryClient(), ...options } = {}) =>
  render(<QueryClientProvider client={client}>{ui}</QueryClientProvider>, options);

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithQuery as render };
