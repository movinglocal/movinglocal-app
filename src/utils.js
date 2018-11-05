export function formatDate(date = null) {
  return date ? new Date(date).toLocaleDateString() : '';
}

export function clipText(text, maxChars = 200, postfix = '...') {
  return text.length > maxChars ? text.substring(0, maxChars) + postfix : text;
}

export default {
  formatDate
};
