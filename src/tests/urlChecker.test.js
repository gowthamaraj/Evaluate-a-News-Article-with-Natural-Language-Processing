const validURL = require('../client/js/urlChecker');

describe('Test "validURL()" should exist' , () => {
    test('It should return true', async () => {
        expect(validURL).toBeDefined();
    });
});
describe('Test "validURL()" with regex functions' , () => {
    test('It should return true', async () => {
        expect(validURL('This is a text')).toBeFalsy();
        expect(validURL('https://medium.com/codeclan/mocking-es-and-commonjs-modules-with-jest-mock-37bbb552da43')).toBeTruthy();
    });
});