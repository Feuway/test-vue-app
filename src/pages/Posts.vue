<template>

  <section v-loading.fullscreen="loading">
    <el-row :gutter="20">
      <el-col :sm="8" v-for="post in listPosts" :key="post.id">
        <el-card>
          {{ post }}
        </el-card>
      </el-col>
    </el-row>
  </section>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Posts',
    data() {
      return {
        loading: false,
      };
    },
    computed: {
      ...mapGetters([
        'listPosts',
      ]),
    },
    methods: {
      ...mapActions([
        'fetchListPosts',
      ]),

      async onLoadData() {
        try {
          this.loading = true;
          await this.fetchListPosts();
        } catch (e) {
          console.error(e);
          this.$alert({
            type: 'error',
            message: e.message,
          });
        } finally {
          this.loading = false;
        }
      },
    },
    created() {
      this.onLoadData();
    },
  };
</script>

<style scoped>
</style>
