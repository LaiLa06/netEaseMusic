import {get,post} from '../plug-in/request.js'
 /* eslint-disable*/
export default {
  /**
  * 获取掌门号信息
  */
  getZMNumberById (params) {
    var url="/restful/accountProxyService/accountting/zmAccountInfo/info";
    return post(url, params);
  }
}

