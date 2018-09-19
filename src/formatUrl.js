export default function formatUrl(str) {
  const re = /^\/*/;
  const addr = str.replace(re, '');
  if (process.env.NODE_ENV === 'production') {
    return `/holidayCheck-Blog/${addr}`;
  }
  return `/${addr}`;
}
