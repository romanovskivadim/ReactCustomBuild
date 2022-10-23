import axios from "axios";
import { BASE_URL } from "src/utils/constants";

export const axiosRequest = axios.create({
    baseURL: BASE_URL,
})