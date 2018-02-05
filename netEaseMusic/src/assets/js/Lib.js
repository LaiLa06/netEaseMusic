/* eslint-disable*/
import Vue from 'vue';

// 引入公共scss

// import C from './conf';
// import M from './common';

// Vue.prototype.C = C;
// Vue.prototype.M = M;

// import vueFilter from './vueFilter';

//解决click点击300毫秒延时问题
import FastClick from 'fastclick';
FastClick.attach(document.body);
import Rem from './Rem';
Rem.load();

export default {
    // M,
    // C
}