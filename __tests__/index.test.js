jest.mock('react-dom');

describe('App entry point: /src/index.js', () => {
  it('renders without error', () => {
    require('../src/index.js');
  });
});
