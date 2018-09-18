export default function formatUrl(str) {
  if (process.env.NODE_ENV === 'production') {
    return `/holidayCheck-blog/${str}`;
  }
  return `/${str}`;
}
