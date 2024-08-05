/**
 * 웨딩
 **/
export function calculateDaysUntilWedding(weddingDate: string) {
  const today = new Date();
  const wedding = new Date(weddingDate);
  const timeDiff = wedding.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

export function formatWeddingDateInfo(weddingDate: string, weddingTime: string) {
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

/**
 * 지출
 */
export function formatSpendingPaidAtDate(paidAt: string) {
  const paidAtDate = new Date(paidAt);
  const formattedPaidAtDate = paidAtDate
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
    })
    .replace(/\. /, '-')
    .replace(/\. /, '-')
    .replace(/\./, '');

  return formattedPaidAtDate;
}

export function formatSpendingPaidAtTime(scheduleStartedAt: string, scheduleEndedAt: string) {
  // 시작 시간
  const scheduleStartedAtTime = new Date(scheduleStartedAt);
  const formattedScheduleStartedAtTime = scheduleStartedAtTime.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const formattedScheduleStartedAtTimeHour12 = formattedScheduleStartedAtTime.replace(/[^오전|오후]/g, '');

  // 끝나는 시간
  const scheduleEndedAtTime = new Date(scheduleEndedAt);
  const formattedScheduleEndedAtTime = scheduleEndedAtTime.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const formattedScheduleEndedAtTimeHour12 = formattedScheduleEndedAtTime.replace(/[^오전|오후]/g, '');

  // 오전|오후가 같은지 판단
  const isSameHour12 = formattedScheduleStartedAtTimeHour12 === formattedScheduleEndedAtTimeHour12;

  return isSameHour12
    ? `${formattedScheduleStartedAtTime} - ${formattedScheduleEndedAtTime.replace(`${formattedScheduleEndedAtTimeHour12} `, '')}`
    : `${formattedScheduleStartedAtTime} - ${formattedScheduleEndedAtTime}`;
}
