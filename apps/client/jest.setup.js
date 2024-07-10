import '@testing-library/jest-dom';
import 'jest-plugin-context/setup';

import { server } from './mocks/server';

// Icon 컴포넌트를 전역적으로 모킹
jest.mock('@ui/src/Icon', () => {
  return ({ name }) => <div>{name}</div>;
});

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
