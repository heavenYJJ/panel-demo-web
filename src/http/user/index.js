import axios from '../axios';

const urlList = {
  userList: '/user/list',
  login: '/user/login',
}

export default {
  getUserList(params = {}) {
    return axios.get(urlList.userList, {params})
  },
  login(params = {}) {
    return axios.get(urlList.login, {params})
  },
}