import '@testing-library/jest-dom';
import 'jest-plugin-context';
import 'jest-plugin-context/setup';

import { server } from './mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
