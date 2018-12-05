import axios from "axios";
const CLIENT = axios.create({
  baseURL: process.env.VUE_APP_FIREBASE_FUNCTIONS_HOST,
  timeout: 10000
});

export const postResult = async payload => {
  let res = await CLIENT.post("/api/result", payload);
  if (res.status === 201) {
    return Promise.resolve(res.data);
  } else {
    return Promise.reject(res.data);
  }
};
