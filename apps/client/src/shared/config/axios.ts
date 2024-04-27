import axios from "axios";
import { stringify } from "qs";

export const axiosInstance = axios.create({
  baseURL: "",
  paramsSerializer(params: any) {
    return stringify(params, {
      arrayFormat: "comma",
    });
  },
});
