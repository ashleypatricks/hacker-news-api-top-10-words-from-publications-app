import axios, { AxiosInstance } from "axios";
import { Agent } from "https";

let instance: AxiosInstance;

const makeConcurrentRequest = async () => {
  if (!instance) {
    instance = axios.create({
      baseURL: "https://hacker-news.firebaseio.com/v0/",
      timeout: 60000,
      httpsAgent: new Agent({ keepAlive: true }),
      headers: { "Content-Type": "application/json" },
    });
  }
  return instance;
};

const makeRequest = async (url: string) => {
  return axios.get(url);
};
export { makeRequest, makeConcurrentRequest };
