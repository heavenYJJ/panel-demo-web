<template>
   <div class="login-page-wrap">
     <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-wrap">
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="login">登陆</el-button>
     </el-form>
   </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      }
    };
  },
  methods: {
    login() {
      this.$refs.form.validate(async (valid) => {
          if (valid) {
            try {
              let loginReq = await this.$http.user.login(this.form);
              if (loginReq.errcode === 0) {
                this.$router.push('/user')
              } 
            } catch (err) {
              console.log(err);
            }
          } else {
            return false;
          }
      });
    }
  }
};
</script>

<style lang="less" scoped type="text/less">
.login-page-wrap{
  background-color: #409eff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-wrap{
    height: 200px;
    padding: 60px 60px 20px 20px;
    width: 400px;
    text-align: center;
    background-color: #fff;
  }
}
</style>
