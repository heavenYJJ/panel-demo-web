<template>
  <el-dialog
    title="新增/修改用户"
    style="text-align:left"
    :visible.sync="dialogVisible"
    @open="beforeOpen">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-wrap">
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="nick">
        <el-input v-model="form.nick" type="nick" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"  placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" type="email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="详细信息" prop="detail_info">
        <el-input v-model="form.detail_info" type="detail_info" placeholder="请输入详细信息"></el-input>
      </el-form-item>
      <el-form-item label="等级" prop="level">
        <el-select v-model="form.level" placeholder="请选择">
          <el-option
            v-for="item in levelOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
     </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="this.handleCancel">取 消</el-button>
      <el-button type="primary" @click="this.handleOk">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      rules: {
        name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        nick: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        detail_info: [{ required: true, message: '请输入详细信息', trigger: 'blur' }],
        level: [{ required: true, message: '请选择等级', trigger: 'blur' }]
      },
      levelOptions: [{
        value: 1,
        label: '1级'
      }, {
        value: 2,
        label: '2级'
      }, {
        value: 3,
        label: '3级'
      }]
    }
  },
  props: ['dialogVisible','userForm'],
  methods: {
    beforeOpen() {
      this.$refs.form.resetFields();
      this.form = JSON.parse(this.userForm);
    },
    handleCancel() {
      this.$emit('handleClose');
    },
    handleOk() {
      this.$refs.form.validate(async (valid) => {
          if (valid) {
            try {
              if (this.form.id) {
                let loginReq = await this.$http.user.updateUser(this.form);
                if (loginReq.errcode === 0) {
                  this.$emit('handleOk', true);
                } 
              } else {
                let loginReq = await this.$http.user.addUser(this.form);
                if (loginReq.errcode === 0) {
                  this.$emit('handleOk', true);
                } 
              }
            } catch (err) {
              console.log(err);
            }
          } else {
            return false;
          }
      });
    },
  }
}
</script>
