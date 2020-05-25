module.exports = {
  getReadingTime(text) {
    const wordsPerMinute = 200;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  },
  getReadableDate(dateStr) {
    const dateObj = new Date(dateStr);
    return dateObj.toGMTString().slice(5,16);
  },
  getHtmlDate(dateStr) {
    const dateObj = new Date(dateStr);
    return `${dateObj.getUTCFullYear()}-${dateObj.getUTCMonth()}-${dateObj.getUTCDate()}`;
  }
};
