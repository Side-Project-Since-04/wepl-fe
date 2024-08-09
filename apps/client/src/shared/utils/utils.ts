export function getDday(date: string) {
  const today = new Date();
  const wedding = new Date(date);
  const timeDiff = wedding.getTime() - today.getTime();

  const dDay = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return dDay;
}

export function formatDday(date: string) {
  const today = new Date();
  const wedding = new Date(date);
  const timeDiff = wedding.getTime() - today.getTime();

  const dDay = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (dDay === 0) {
    return 'D-day';
  } else if (dDay < 0) {
    return `D+${-dDay}`;
  }
  return `D-${dDay}`;
}

export function formatWeddingDateInfo(weddingDate: string, weddingTime: string) {
  const weddingDateTime = new Date(`${weddingDate}T${weddingTime}`);

  const formattedDate = formatDate(weddingDateTime);

  const formattedTime = formatTime(weddingDateTime);

  return [formattedDate, formattedTime];
}

export function formatDate(date: Date | string) {
  return new Date(date)
    .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' })
    .replace(/\./, '년 ')
    .replace(/\./, '월 ')
    .replace(/\./, '일 ')
    .replace('(', '(')
    .replace(')', ')');
}

export function formatTime(date: Date | string) {
  return new Date(date)
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
