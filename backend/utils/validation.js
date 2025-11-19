// backend/utils/validation.js
const isTitleValid = (title) => {
  return typeof title === 'string' && title.length > 3 && title.length <= 100;
};

module.exports = { isTitleValid };
