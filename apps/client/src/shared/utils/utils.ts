export function calculateDaysUntilWedding(weddingDate: string) {
  const today = new Date();
  const wedding = new Date(weddingDate);
  const timeDiff = wedding.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

export function formatWeddingDateInfo(weddingDate: string, weddingTime: string) {
  const weddingDateTime = new Date(`${weddingDate}T${weddingTime}`);

  const formattedDate = formatDate(weddingDateTime);

  const formattedTime = formatTime(weddingDateTime);

  return [formattedDate, formattedTime];
}

export function formatDate(date: Date) {
  return date
    .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' })
    .replace(/\./, '년 ')
    .replace(/\./, '월 ')
    .replace(/\./, '일 ')
    .replace('(', '(')
    .replace(')', ')');
}

export function formatTime(date: Date) {
  return date
    .toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: true })
    .replace('오전', '오전 ')
    .replace('오후', '오후 ');
}

export function formatScheduleTime(startDate: string | null, endDate: string | null): string {
  if (!startDate && !endDate) {
    return '-';
  }

  if (startDate && !endDate) {
    const formattedStartTime = formatTime(new Date(startDate));
    return formattedStartTime;
  }

  if (startDate && endDate) {
    const formattedStartTime = formatTime(new Date(startDate));
    const formattedEndTime = formatTime(new Date(endDate));
    return `${formattedStartTime} - ${formattedEndTime}`;
  }

  // startDate가 없고 endDate만 있는 경우 (예외 처리)
  return '-';
}
