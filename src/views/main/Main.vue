<template>
   <div class="main-page-wrap">
     <el-menu
        v-if="!$route.meta.hideMenu"
        :router="true"
        class="menu-wrap">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统设置</span>
          </template>
          <el-menu-item index ="/user">用户管理</el-menu-item>
        </el-submenu>
      </el-menu>
     <router-view class="content-wrap"></router-view>
   </div>
</template>


<script>
export default {
  data () {
    return {
      hideMenu: false
    }
  },
  mounted() {
    this.hideMenu = this.$route.meta.hideMenu;
  }
}
</script>

<style lang="less" scoped type="text/less">
  .main-page-wrap{
    display: flex;
    height: 100%;
    .menu-wrap{
      flex: 0 0 200px;
    }
    .content-wrap{
      flex: 1;
    }
  }
</style>
