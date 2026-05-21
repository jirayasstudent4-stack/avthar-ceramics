const requests = new Map();

export function rateLimit(
  ip: string,
  limit = 20
) {
  const current =
    requests.get(ip) || 0;

  if (current >= limit) {
    return false;
  }

  requests.set(ip, current + 1);

  setTimeout(() => {
    requests.delete(ip);
  }, 60000);

  return true;
}