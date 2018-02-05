/* eslint-disable*/
export  default function tools(vueObj) {
  return {
    "getCookies":function(cookieStr){
      if(!cookieStr){
        return '';
      }
      var cookies = {};
      cookieStr.split(';').forEach(function(cookie ) {
        var parts = cookie.split('=');
        cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
      });
      return cookies;
    },
    "login":function(){
       window.location.href="/base?redirectUrl="+encodeURIComponent(window.location.href)+"#/login";
    },
    "getParamByName":function(key){
      if(window){
        var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
      }
      return '';
    }
  }
}

