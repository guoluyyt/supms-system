<template>
  <div class="login">
    <!-- 表单容器 -->
    <div class="login-wrapper">
      <!-- 标题 -->
      <h2 class="title">
        <i class="el-icon-loading"></i>
        小严超市管理系统
      </h2>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="text" v-model="loginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="text" v-model="loginForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    const passWrod = (rule,value,callback)=>{
      if(value === ''){
        callback(new Error('请输入密码'))
      }else if(value.length < 3 || value.length >6){
        callback(new Error('长度在 3 到 6 位'))
      }else{
          if(this.loginForm.checkPass !==''){
            this.$refs.loginForm.validateField('checkPass')
          }
          callback()
      }
    }
    // 确认密码的验证函数
   const checkPass = (rule,value,callback)=>{
        if(value === ""){
          callback(new Error("请再次输入密码!"))
        }else if(value !==this.loginForm.pass){
          console.log(this);
          
          callback(new Error("两次密码输入不一致"))
        }
          callback()
     }
    return {
      loginForm: {
        username: "",
        pass:"",
        checkPass: "",
      },
      // 验证的规则
         rules:{
        //验证用户名 
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12位', trigger: 'blur' }
          ],
        //验证密码
        pass:[
          {required:true,validator:passWrod,trigger:'blur'}
        ] ,
        checkPass:[
          {required:true,validator:checkPass,trigger:'blur'}
        ] ,
     }
    };
  
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
         //如果所有验证通过 valid就是true
        if (valid) {
          alert("前端验证通过 可以提交给后端!")
            // 收集账号和密码
          let params = {
             username : this.loginForm.username,
             pass : this.loginForm.pass,
             checkPass : this.loginForm.checkPass
          }
          this.$router.push('/') 
         
          
        } else {
          alert("前端验证失败 不能提交给后端!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>




<style lang="less">
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #2d3a4b;
  .login-wrapper {
    width: 500px;
    height: 350px;
    background: red;
    border-radius: 8px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px 50px 10px 10px;
    .title {
      font-size: 20px;
      margin-left: 70px;
      margin-bottom: 30px;
    }
   .el-form {
      .el-form-item {
        .el-form-item__label {
          color: white;
        }
      }
    }
  }
}
</style>



