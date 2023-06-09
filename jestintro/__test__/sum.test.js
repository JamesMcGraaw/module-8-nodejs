const sum = require('../sum')

describe('test the sum function', () => {
    it('returns 3 when given 1 and 2', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('does not return 9 when given 3 and 5', () => {
        expect(sum(3, 5)).not.toBe(9);
    });
});