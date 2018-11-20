import axios from 'axios';
import { Message } from 'element-ui';

axios.defaults.baseURL = process.env.BASE_API;

axios.interceptors.response.use((res) => {
  if (res.errcode !== 0) {
    Message.error({
      message: res.data.errmsg
    })
  }
  return res.data
}, (err) => {
  return Promise.reject(err);
})

export default axios