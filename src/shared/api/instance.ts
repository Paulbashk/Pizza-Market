import axios from 'axios';

const instanceApiClient = () => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
  }

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
};

const ApiClient = instanceApiClient();

export default ApiClient;
