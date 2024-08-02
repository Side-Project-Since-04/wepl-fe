import type { MemberType } from '@/src/features/member/types';
import { axiosInstance } from '../config/axios';

const URL_ROOT = '/member';

export const MemberClient = {
  getMember: async () => {
    const { data } = await axiosInstance.get<MemberType>(URL_ROOT);
    return data;
  },
  deleteMember: async () => {
    await axiosInstance.delete(URL_ROOT);
  },
};
