/* eslint-disable*/
import axios from 'axios'
import tools from './tools.js'
// axios 配置
axios.defaults.timeout = 10000
axios.defaults.withCredentials=true;

axios.defaults.headers = {'Content-Type': 'application/json;charset=utf-8'};
// 测试接口
axios.defaults.baseURL = 'http://localhost:3000'; 

// POST传参序列化(添加请求拦截器)
// axios.interceptors.request.use((config) => {
//   if(!config.headers["token"]){
//     if(config.data&&config.data.token){
//       // 判断是否存在token，如果存在的话，则每个http header都加上token
//       config.headers['token']=config.data.token;
//     }else if(!process.server){
//       let token=tools().getParamByName('token')||tools().getCookies(document.cookie)["token"];
//       if(token){
//         config.headers['token']=token;
//       }
//     }
//   }
//   return config
// }, (error) => {
//   console.log(error);
//   return Promise.reject(error)
// })

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

// function checkCode(res) {
//   if (res.data.code === -500) {
//       window.location.href = '/backend'
//   } else if (res.data.code === -400) {
//       window.location.href = '/'
//   } else if (res.data.code !== 200) {
//       store.dispatch('global/showMsg', res.data.message)
//   }
//   function checkStatus(response) {
//     store.dispatch('global/gProgress', 100)
//     if (response.status === 200 || response.status === 304) {
//         return response
//     }
//     return {
//         data: {
//             code: -404,
//             message: response.statusText,
//             data: ''
//         }
//     }
// }

export function get (url, params) {
  return axios({
    method: 'get',
    url: url,
    params,
    }).then(res => res.data).catch((error) => {});

    //  return axios.get(url, params)
    //   .then(res => res.data).catch((error) => {});
}
