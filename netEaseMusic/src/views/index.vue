<template>
  <div class="index">
    <HeaderTop></HeaderTop>
    <div class="modular-list">
      <ul>
        <li><i class="icon iconfont icon-cebianlan"></i>本地音乐(2)</li>
        <li><i class="icon iconfont icon-cebianlan"></i>最近播放(100)</li>
        <li><i class="icon iconfont icon-cebianlan"></i>下载管理(1)</li>
        <li><i class="icon iconfont icon-cebianlan"></i>我的电台(4)</li>
        <li><i class="icon iconfont icon-cebianlan"></i>我的收藏(4)</li>
      </ul>
    </div>
    <div class="c-sheet">
      <header>创建的歌单（16）</header>
    </div>
    <div class="s-sheet">
      <header>收藏的歌单（12）</header>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
  import Lib from '@/assets/js/Lib';
  import HeaderTop from '@/components/Header.vue';
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },components:{
    HeaderTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
