import '@testing-library/jest-dom';

jest.mock('mermaid', () => ({
  initialize: jest.fn(),
  init: jest.fn(),
}));
