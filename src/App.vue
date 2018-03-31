<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0px">
        <main-menu />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import mainMenu from './components/MainMenu';

  export default {
    name: 'app',
    components: {
      mainMenu,
    },
  };
</script>

<style lang="scss">
  @import "assets/scss/main";
</style>
