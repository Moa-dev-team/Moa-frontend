import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  // axios 요청을 했을때 오류를 보내주지 않거나, 대기시간이 오래 걸리는 경우 timeout을 통해 요청을 중단하고 처리할 수 있다.
  timeout: 1000 * 5,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
