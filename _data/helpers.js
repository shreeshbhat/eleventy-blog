module.exports = {
  getReadingTime(text) {
    const wordsPerMinute = 180;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  },
  formatReadingTime(text) {
    const wordsPerMinute = 180;
    const numberOfWords = text.split(/\s/g).length;
    const readingTime = Math.ceil(numberOfWords / wordsPerMinute);
    return `${new Array( Math.round(readingTime / 5) || 1).fill('🧁').join('')}`;
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
