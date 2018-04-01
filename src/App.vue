<template>

  <div id="app">
    <el-container>
      <el-header class="main-header">
        <app-grid-wrap>
          <app-main-menu />
        </app-grid-wrap>
      </el-header>

      <el-main class="main-content">
        <app-grid-wrap>
          <router-view />
        </app-grid-wrap>
      </el-main>
    </el-container>
  </div>

</template>

<script>
  import AppMainMenu from './components/MainMenu';
  import AppGridWrap from './components/AppGridWrap';

  export default {
    name: 'app',
    components: {
      AppMainMenu,
      AppGridWrap,
    },
  };
</script>

<style lang="scss">
  @import "assets/scss/main";
</style>
