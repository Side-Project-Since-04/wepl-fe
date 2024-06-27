const authKeys = {
  signup: ['auth'] as const,
  login: () => [...authKeys.signup, 'logout'] as const,
  logout: () => [...authKeys.signup, 'logout'] as const,
  refresh: () => [...authKeys.signup, 'refresh'] as const,
};
