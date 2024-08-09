import type { ScheduleResponse } from '@/src/features/schedule/types';
import { axiosInstance } from '../config/axios';

const URL_ROOT = '/schedule';

export const ScheduleClient = {
  waitingList: async () => {
    const { data } = await axiosInstance.get<ScheduleResponse>(`${URL_ROOT}/waiting`);
    return data;
  },
};
