export function getReadingTime(body?: string): number | null {
  if (!body) return null;
  return Math.max(1, Math.round(body.split(/\s+/).length / 230));
}
