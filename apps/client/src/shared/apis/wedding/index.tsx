import { axiosInstance } from '../../config/axios';
import { WeddingInfoType } from '../../types/wedding';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const URL_ROOT = '/wedding';

export const WeddingClient = {
  create: async (formData: WeddingInfoType) => {
    return await axiosInstance.post(URL_ROOT, { ...formData });
  },
  update: async (formData: WeddingInfoType) => {
    return await axiosInstance.put(URL_ROOT, { ...formData });
  },
};
