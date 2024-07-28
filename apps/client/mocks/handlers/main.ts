import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('http://localhost:3030/user', () => {
    return HttpResponse.json({
      username: '홍길동',
      dDay: 365,
    });
  }),
];
