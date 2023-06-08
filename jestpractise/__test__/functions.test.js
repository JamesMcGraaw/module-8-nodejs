const functions = require('../functions')
const {calculateAge, calculateTax, greet} = require("../functions");

describe('test calculate age function', () => {
    it('gives age if given correct date', () => {
        expect(calculateAge('1990-11-03')).toBe(32)
    });
    it('returns false if given malformed date', () => {
        expect(calculateAge('2022-31-11')).toBe(false)
    });
    it('returns false if given future date', () => {
        expect(calculateAge('2025-31-11')).toBe(false)
    });
});

describe('test calculate tax function', () => {
    it('gives 0 if salary not taxable', () => {
        expect(calculateTax(50)).toBe(0)
    });
    it('gives tax paid as 0.05 if salary is 12501', () => {
        expect(calculateTax(12501)).toBe(0.05)
    });
    it('gives tax paid as 375 if salary is 30000', () => {
        expect(calculateTax(30000)).toBe(875)
    });
    it('expect 0 if given a string', () => {
        expect(calculateTax('James McGraw-Allen')).toBe(0)
    });
});

describe('test calculate greet function', () => {
    it('if given name and false, return hi name', () => {
        expect(greet('James', false)).toBe('Hi James.')
    });
    it('if given name but no weather, gives name and random weather', () => {
        expect(greet('James')).toContain('Hi James. It is')
    });
    it('checks output is string', () => {
        expect(typeof greet('James')).toBe('string')
    });
});