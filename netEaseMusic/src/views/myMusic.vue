<template>
  <div class="me-music">
    <HeaderTop></HeaderTop>
    <div class="modular-list">
      <ul>
        <li><i class="icon iconfont icon-musicfill"></i>本地音乐<span>({{detail.programCount}})</span></li>
        <li><i class="icon iconfont icon-musicfill"></i>最近播放<span>({{detail.code}})</span></li>
        <li><i class="icon iconfont icon-musicfill"></i>下载管理<span>({{detail.mvCount}})</span></li>
        <li><i class="icon iconfont icon-musicfill"></i>我的电台<span>({{detail.djRadioCount}})</span></li>
        <li><i class="icon iconfont icon-musicfill"></i>我的收藏<span>({{detail.subPlaylistCount}})</span></li>
      </ul>
    </div>
    <div class="block-playList establish">
      <header>创建的歌单<span>({{detail.createdPlaylistCount}})</span></header>
      <SubPlayList :listData="playlist"></SubPlayList>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import Lib from '@/assets/js/Lib';
import api from '@/api/api.js';
import HeaderTop from '@/components/Header.vue';
import SubPlayList from '@/components/SubPlayList.vue';
export default {
  name: 'myMusic',
  data () {
    return {
      detail:'',
      uid:this.$route.query.id,
      playlist:[]
    }
  },
  created(){
     let params={uid:this.uid}
      api.getUserDetail().then(res=>{
         this.detail=res;
      }).catch((error) => {
        alert(error)
      });
      //获取歌单列表
      api.getPlaylist(params).then(res=>{
         this.playlist=res.playlist;
         console.log(this.playlist);
        // this.$router.push({path:'/index',query:{id:this.id}});
      }).catch((error) => {
        alert(error)
      });
  },
  components:{
    HeaderTop,SubPlayList
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/common/var.scss";
   .me-music{
     .modular-list{
       ul{
         li{
           font-size:0.4rem;padding:0.4rem;color:$cutome1;
           i{font-size:0.42rem;padding-right:0.2rem;}
           span{color:$cutome2;font-size:0.36rem;padding-left:0.16rem}
         }
       }
     }
     .block-playList{
       margin-top:0.1rem;
       header{
         color:$cutome1;font-size:0.36rem;background-color:$cutome5;padding:0.2rem 0.4rem;
         span{color:$cutome2;font-size:0.36rem;padding-left:0.16rem}
       }
     } 
   }

</style>
