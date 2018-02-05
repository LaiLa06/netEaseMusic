/* eslint-disable*/
import {get,post} from '../plugIn/request.js'

export default {
    /**
     ** 登录
     */
    login(params) {
      var url = "/login/cellphone";
      return post(url, params);
    },
  }
