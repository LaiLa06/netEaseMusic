<template>
  <div class="login-wrap">
     <div class="avator"><img src="@/assets/images/logo.png" alt=""></div>
     <div class="form-wrap">
        <input type="text" maxlength="11" v-model="cellphone" placeholder="请输入您的手机号">
        <input type="password" v-model="password" placeholder="请输入密码">
        <button class="btn-commit" @click="login">登录</button>
     </div>
  </div>
</template>

<script>
/* eslint-disable*/
import Lib from '@/assets/js/Lib'
import api from '@/api/api.js';
export default {
  name: 'login',
  data () {
    return {
      cellphone: '',
      password:'',
      id:''
    }
  },
  methods: {  
    login(){
      console.log(typeof(this.password))
      let params={phone:this.cellphone,password:this.password}    
      api.login(params).then(res=>{
        console.log(res.account);
        this.id=res.account.id;
        this.$router.push({path:'/index',query:{id:this.id}});
      }).catch((error) => {
        alert(error)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import "../assets/scss/common/var.scss";
   .login-wrap{
      height:100vh;background: linear-gradient(to bottom, $red 0%,$deepRed 100%);
      .avator{
        text-align:center;padding-top:2rem;
        img{width:3rem;height:3rem;border-radius:50%;border:1px solid $borderColor;}
      }
      .form-wrap{
        width:8rem;margin:1.6rem auto 0;
        input{
          @extend %input;width:100%;
        }
        .btn-commit{
          @extend %btn_red;width:100%;margin-top:0.4rem;
          background-color:$white;color:$red;
        }
      }
   }
</style>
