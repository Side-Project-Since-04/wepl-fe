import { HttpResponse, http } from 'msw';

export const handlers = [
  // Intercept the "GET /resource" request.
  http.get('http://localhost:3030/test', () => {
    return HttpResponse.text('hello');
  }),
];
