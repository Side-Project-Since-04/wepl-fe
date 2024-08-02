import { extractTimeFromISOString } from '@/src/shared/utils/date-utils';
import { useSpendingStore } from '../store';

const useInitValue = () => {
  // Access the item from the store
  const { item } = useSpendingStore();
  let initValue;

  if (item) {
    const { cost, scheduleName, memo, scheduleStartedAt, scheduleEndedAt, paidAt } = item;
    const { hour: startedHour, min: startedMin } = extractTimeFromISOString(scheduleStartedAt);
    const { hour: endHour, min: endMin } = extractTimeFromISOString(scheduleEndedAt);

    initValue = {
      cost: cost.toLocaleString(),
      scheduleName,
      memo,
      startedHour,
      startedMin,
      endHour,
      endMin,
      paidAt,
    };
  }

  return initValue;
};

export default useInitValue;
