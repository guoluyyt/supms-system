<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {};
</script>

<style lang="less">
html {
  margin: 0;
  padding: 0;
  height: 100%;
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    .index {
      height: 100%;
      .el-container {
        height: 100%;
        // 头和尾
        .el-header,
        .el-footer {
          background-color: #b3c0d1;
          color: #333;
          text-align: center;
        }
        //左边
        .el-aside {
          background-color: #d3dce6;
          color: #333;
          text-align: center;
        }
        //右边中间
        .el-main {
          background-color: #e9eef3;
          color: #333;
          text-align: center;
        }
      }
    }
  }
}
</style>

