import axios, { type AxiosInstance } from 'axios';

type TInstanceApiClient = () => AxiosInstance;

const instanceApiClient: TInstanceApiClient = () => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('PUBLIC API URL is not defined');
  }

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
};

const ApiClient: AxiosInstance = instanceApiClient();

export default ApiClient;
