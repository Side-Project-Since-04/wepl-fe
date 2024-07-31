import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

export const renderWithQuery = (ui: React.ReactNode, options?: Parameters<typeof render>['1']) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 4 * 1000,
        retry: false,
      },
    },
  });

  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>, options);
};
