export function extractTimeFromISOString(isoString: string) {
  try {
    const date = new Date(isoString);

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date string');
    }

    const hour = parseInt(date.getUTCHours().toString().padStart(2, '0'));
    const min = parseInt(date.getUTCMinutes().toString().padStart(2, '0'));

    return { hour, min };
  } catch (error) {
    console.error('Error parsing date:', error);
    return { hour: null, min: null };
  }
}

export const formatTime = (date: string, hour: string, min: string) => {
  return `${date}T${hour}:${min}:00.000Z`;
};
