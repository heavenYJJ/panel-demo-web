<template>
   <div class="user-list-wrap">
     <div class="add-btn-wrap">
       <el-button type="primary" @click="add()">新增</el-button>
     </div>
     <el-table
      class="user-form"
      :data="dataList"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="账号">
      </el-table-column>
      <el-table-column
        prop="nick"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="detail_info"
        label="详细信息">
      </el-table-column>
      <el-table-column
        prop="level"
        label="等级">
      </el-table-column>
      <el-table-column
        width="200px"
        label="操作">
        <template scope="rows">
          <el-button type="primary" @click="update(rows.row)">修改</el-button>
          <el-button type="danger" @click="del(rows.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination-wrap"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <add-user-modal
      :userForm="userForm"
      @handleClose="handleClose"
      @handleOk="handleOk"
      :dialogVisible="dialogVisible">
     </add-user-modal>
   </div>
</template>


<script>
import addUserModal from './components/UserModal'
export default {
  data () {
    return {
      page: 1,
      limit: 10,
      total: 0,
      dataList: [],
      dialogVisible: false,
      userForm: {}
    }
  },
  components: {
    addUserModal,
  },
  mounted () {
    this.getUserList();
  },
  methods: {
    getUserList() {
      const params = {
        page: this.page,
        limit: this.limit
      }
      this.$http.user.getUserList(params).then(res => {
        this.dataList = res.data.list;
        this.total = res.data.total;
      })
    },
    handleSizeChange(val) {
      this.limit = val;
      this.getUserList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getUserList();
    },
    update(item) {
      this.userForm = JSON.stringify(item);
      this.dialogVisible = true;
    },
    del(item) {
      this.$confirm(`是否删除${item.nick}用户?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let loginReq = await this.$http.user.delUser({id: item.id});
          if (loginReq.errcode === 0) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getUserList()
          } 
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    add() {
      const form = {
        name: '',
        nick: '',
        password: '',
        email: '',
        detail_info: '',
        level: '',
      }
      this.userForm = JSON.stringify(form);
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    handleOk() {
      this.dialogVisible = false;
      this.getUserList()
    },
  }
}
</script>

<style lang="less" scoped type="text/less">
.user-list-wrap{
  text-align: center;
  overflow: hidden;
  padding: 20px 100px;
  .add-btn-wrap{
    text-align: right;
    margin-bottom: 10px;
  }
  .pagination-wrap{
    margin-top: 10px;
  }
}
</style>
