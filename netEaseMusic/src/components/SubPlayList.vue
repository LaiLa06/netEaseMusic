<template>
  <div class="subPlayList-wrap">
    <div class="item" v-for="item in listData">
       <div class="img">
         <img :src="item.coverImgUrl" alt="">
       </div>
       <div class="info">
          <h2>{{item.name}}</h2>
          <p>{{item.trackCount}}首</p>
       </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  name: 'SubPlayList',
  props: ['listData'],
}
</script>

<style scoped lang="scss">
@import "../assets/scss/common/var.scss";
  .subPlayList-wrap{
     padding:0.1rem 0.2rem;
     .item{
       display:flex;margin-top:0.2rem;
       .img{
         @include square(1.6rem);
         img{width:100%;height:100%}
       }
       .info{
         padding:0.3rem 0.2rem;
         h2{
          font-size:0.4rem;color:$cutome1;
         }
         p{
           font-size:0.34rem;color:$cutome3;padding-top:0.3rem;
         }
       }
     } 
  }
</style>
