export function formatDollarAmount(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function truncateText(text, length = 4) {
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, length) + '...';
}
