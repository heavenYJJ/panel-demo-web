import axios from '../axios';

const urlList = {
  userList: '/user/list',
  login: '/user/login',
  addUser: '/user/add',
  updateUser: '/user/edit',
  delUser: '/user/del',
}

export default {
  getUserList(params = {}) {
    return axios.get(urlList.userList, {params})
  },
  login(params = {}) {
    return axios.post(urlList.login, params)
  },
  addUser(params = {}) {
    return axios.post(urlList.addUser, params)
  },
  updateUser(params = {}) {
    return axios.post(urlList.updateUser, params)
  },
  delUser(params = {}) {
    return axios.post(urlList.delUser, params)
  },
}