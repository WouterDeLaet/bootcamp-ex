import { setTimerP, countDown } from './main';

describe('test', () => {
  describe('setTimerP', () => {
    it('should return the param', async () => {
      const data = await setTimerP(500, 'Fubar');
      expect(data).toBe('Fubar');
    });

    it('should throw an error', () => {
      expect.assertions(1);

      return setTimerP(-10, 'Fubar').catch(err => {
        expect(err.message).toMatch('timeout must be > 0');
      });
    });
  });

  describe('countdown', () => {
    it('should return 3', done => {
      countDown(3, 50, 6, (arg, _count, end) => {
        expect(arg).toBe(3);
        if (end) {
          done();
        }
      });
    });

    it('should count down', done => {
      expect.assertions(21);
      let initialCount = 6;
      countDown(3, 50, initialCount, (arg, count, end) => {
        expect(count).toBe(initialCount);
        expect(count).toBeWithin(0, 7);
        expect(arg).toBe(3);
        if (end) {
          done();
        }
        initialCount--;
      });
    });
  });
});
