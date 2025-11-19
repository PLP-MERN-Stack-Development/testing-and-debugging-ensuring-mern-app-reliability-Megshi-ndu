// backend/test/unit/validation.test.js
const { isTitleValid } = require('../../utils/validation');

describe('Validation Utils', () => {
  describe('isTitleValid', () => {
    it('should return true for a valid title', () => {
      expect(isTitleValid('Fix the login button')).toBe(true);
    });

    it('should return false for a title that is too short', () => {
      expect(isTitleValid('Fix')).toBe(false);
    });

    it('should return false for a non-string title', () => {
      expect(isTitleValid(12345)).toBe(false);
    });
  });
});
