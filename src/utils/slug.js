export const toSlug = (text) => {
  return text
    ? text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
    : ''
}