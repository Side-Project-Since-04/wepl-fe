const authKeys = {
  login: ['auth'] as const,

  list: () => [...authKeys.login, 'list'] as const,
  refresh: () => [...authKeys.login, 'refresh'] as const,
};
