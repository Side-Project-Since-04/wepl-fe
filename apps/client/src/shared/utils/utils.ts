export function calculateDaysUntilWedding(weddingDate: string) {
  const today = new Date();
  const wedding = new Date(weddingDate);
  const timeDiff = wedding.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

export function formatWeddingDateInfo(weddingDate: string | null, weddingTime: string | null) {
  if (!weddingDate || !weddingTime) {
    return [null, null];
  }

  const weddingDateTime = new Date(`${weddingDate}T${weddingTime}`);

  const formattedDate = weddingDateTime
    .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' })
    .replace(/\./, '년 ')
    .replace(/\./, '월 ')
    .replace(/\./, '일 ')
    .replace('(', '(')
    .replace(')', ')');

  const formattedTime = weddingDateTime
    .toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: true })
    .replace('오전', '오전 ')
    .replace('오후', '오후 ');

  return [formattedDate, formattedTime];
}
