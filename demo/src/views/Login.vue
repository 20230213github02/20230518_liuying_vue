<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
    <!-- 系统登录 -->
    <h3 class="loginTitle">ログイン</h3>
 
    <!-- 用户名 -->
    <el-form-item label="名前"  prop="userName" class="userName"  label-width="100px">
      <el-input
        type="input"
        v-model="ruleForm.userName"
        placeholder="ユーザー名前を入力してください。"
        
      ></el-input>
    </el-form-item>
 
    <!-- 密码 -->
    <el-form-item label="パスワード" prop="userPassword" label-width="100px">  
      <el-input
        type="password"
        v-model="ruleForm.userPassword"
        placeholder="パスワードを入力してください。"
      ></el-input>
    </el-form-item>

     <!-- 登陆权限 -->
    <el-form-item label="タイプ" prop="usertype" label-width="100px">
    <el-radio-group v-model="ruleForm.usertype">
      <el-radio label="normalUser">一般ユーザー</el-radio>
      <el-radio label="manager">管理員</el-radio>
    </el-radio-group>
  </el-form-item>
 
    <!-- 登录按钮 -->
    <el-form-item >
      <el-button type="primary" @click="login()" class="login" >ログイン</el-button>
    <el-button type="primary" @click="reset()" class="reset">リセット</el-button>
  </el-form-item>
  </el-form>
</template>
 
<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        userName: '',
        userPassword:'',
       
      },
     
      rules: {
        userName: [
          {
            required: true,
            message: 'ユーザー名前を入力してください。',
            trigger: 'blur',
          },
          {
            max: 10,
            message: 'ユーザー名前を10文字内で入力してください。',
            trigger: 'blur',
          },
        ],
        userPassword: [
          {
            required: true,
            message: 'パスワードを入力してください。',
            trigger: 'blur',
          },
          {
            min:6, max: 10,
            message: 'パスワードを6~10文字内で入力してください。',
            trigger: 'blur',
          },
          {
            pattern: /^[0-9a-zA-Z]*$/,
             message: 'フォーマットが間違っています。数字英文字で入力してください。', 
             trigger: 'blur',
          }
        ],
        usertype:[
          {
            required: true,
            message: 'ログインタイプを選択してください。',
            trigger: 'change',
          }
        ]
      },
    }
  },
  methods: {
    reset() {
        this.$refs.ruleForm.resetFields();
      },
    
    
                  

   login() {
        this.$refs.ruleForm.validate(valid => {
        
         if (valid) {
         
          if(this. ruleForm.usertype=='manager'){
            let self=this;
          axios.post('http://localhost:8888/manager/login', 
                       {userName: this. ruleForm.userName,
                        userPassword: this. ruleForm.userPassword})
                .then( 
                      function (res) {
                        console.log(res);
                        if (res.data == '0')
                            alert("用户不存在")
                        else if (res.data == '1')
                            alert("登录失败，密码错误")
                        else if (res.data == '2')
                       
                        self.$router.push('/Manager');
                    }).catch(function (e) {
                        console.log(e,"传输失败")
                    })       
                   }

                   if(this.ruleForm.usertype=='normalUser'){
                    let self=this;
          axios.post('http://localhost:8888/normalUser/login', 
                       {userName: this. ruleForm.userName,
                        userPassword: this. ruleForm.userPassword})
                .then( 
                      function (res) {
                        console.log(res);
                        if (res.data == '0')
                            alert("用户不存在")
                        else if (res.data == '1')
                            alert("登录失败，密码错误")
                        else if (res.data == '2')
                       
                        self.$router.push('/Home');
                    }).catch(function (e) {
                        console.log(e,"传输失败")
                    })       
                   }
             
                }


                })



              }

            } 

              }

    
  
  

  
   
     
  

</script>
 
<style >
 .demo-ruleForm{
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: aliceblue;
        border:1px solid rgb(43, 67, 226);
        box-shadow: 0 0 25px #68aee6;
    }
    .loginTitle{
        margin: 0px auto 48px auto;
        text-align: center;
        font-size: 40px;
    }
    .login{
      margin-left: 80px;
    }
   
   

</style>
