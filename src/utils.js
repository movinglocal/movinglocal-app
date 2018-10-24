export function formatDate(date = null) {
  return date ? new Date(date).toLocaleDateString() : '';
}

export default {
  formatDate
};
