<template>

  <el-row>
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      :router="true"
      active-text-color="#ffd04b">
      <el-menu-item index="/">Dashboard</el-menu-item>
      <el-menu-item index="/info" disabled>Info</el-menu-item>
      <el-menu-item index="/posts">
        Posts
      </el-menu-item>
      <el-menu-item index="/search">
        Search
      </el-menu-item>
    </el-menu>
  </el-row>

</template>

<script>
  export default {
    name: 'MainMenu',
  };
</script>
