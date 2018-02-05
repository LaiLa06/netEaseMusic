/* eslint-disable*/
import axios from 'axios'
import tools from './tools.js'
// axios 配置
axios.defaults.timeout = 10000

axios.defaults.headers = {'Content-Type': 'application/json;charset=UTF-8'};

const runtime=3;  //走模拟测试数据
const urlMaps={
    PROD:"http://prod-v.gaiay.net/",
    TEST:"http://test-v.gaiay.net/",
    DEV:"http://dev-v.gaiay.net/"
  };
axios.defaults.baseURL = 'http://172.31.99.100:3000/'; // 测试接口
// axios.defaults.baseURL = urlMaps[runtime]||'http://dev-v.gaiay.net/';  


// axios.defaults.baseURL="http://dev-v.gaiay.net/"

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  if(!config.headers["token"]){
    if(config.data&&config.data.token){
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers['token']=config.data.token;
    }else if(!process.server){
      let token=tools().getParamByName('token')||tools().getCookies(document.cookie)["token"];
      if(token){
        config.headers['token']=token;
      }
    }
  }
  return config
}, (error) => {
  console.log(error);
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res
  } else {
    return Promise.reject(res)
  }
}, (error) => {
  return Promise.reject(error)
})

export function post (url, params) {
   return axios.post(url, params)
             .then(res => (res.data)).catch((error) => {console.log(error)});
}

export function get (url, params) {


  return axios.get(url, params)
      .then(res => res.data).catch((error) => {});
}
