<template>
  <div class="header-wrap">
     <div class="slide"><i class="icon iconfont icon-cebianlan"></i></div>
     <ul class="tab">
      <li class="active"><i class="icon iconfont icon-musicfill"></i></li>
      <li><i class="icon iconfont icon-discover"></i></li> 
      <li><i class="icon iconfont icon-qunzu"></i></li>
     </ul>
     <div class="search"><i class="icon iconfont icon-search"></i></div>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/common/var.scss";
  .header-wrap{
    position: relative;height:1.4rem;background-color:$deepRed;
    i{font-size:0.6rem;color:#fff;}
    .slide{
      @extend %topLeft;@include square(1.4rem);
    }
    .search{
       @extend %topRight;@include square(1.4rem);text-align:center;
    }
    .tab{
      display:flex;width:5.2rem;margin:0 auto;
      li{
        flex:1;height:1.4rem;line-height:1.2rem;text-align:center;
        i{opacity:0.2}
        &.active{
          i{opacity:1;font-size:0.6.5rem}
        }
      }
    }
  }
</style>
