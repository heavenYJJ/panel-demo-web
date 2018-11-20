import axios from 'axios';
import { Message } from 'element-ui';
import {baseApi} from '../base.config';
import vue from '../main';

axios.defaults.baseURL = baseApi;

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return {
    ...config,
    withCredentials: true
  };
}, function (error) {
  // 对请求错误做些什么
  console.log(error)
  return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
  if (res.data.errcode !== 0 && res.data.errcode !== 20002) {
    Message.error({
      message: res.data.errmsg
    })
  }
  if (res.data.errcode === 20002) {
    vue.$router.push('/login')
  }
  return res.data
}, (err) => {
  return Promise.reject(err);
})

export default axios