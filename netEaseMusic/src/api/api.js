/* eslint-disable*/
import {get,post} from '../plugIn/request.js'

export default {
    /**
     ** 登录
     */
    login(params) {
      var url = "/login/cellphone";
      return get(url, params);
    },
     /**
     ** 获取用户信息
     */
    getUserDetail(params) {
      var url = "/user/subcount";
      return get(url, params);
    },
    /**
     ** 获取用户歌单
     */
    getPlaylist(params) {
      var url = "/user/playlist";
      return get(url, params);
    },
  }
