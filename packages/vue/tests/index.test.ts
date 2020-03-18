import { init } from '../src';
describe('core ("./src/index.ts")', () => {
  it('works', () => {
    expect(init.test()).toEqual(true);
  });
});
