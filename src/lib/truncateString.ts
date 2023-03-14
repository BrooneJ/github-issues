export function truncateString(str: string, maxLength = 140) {
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength)}...`;
  }
  return str;
}
