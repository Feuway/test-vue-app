<template>

  <section v-loading.fullscreen="loading">
    <el-row :gutter="20">
        <el-card v-loading="loading">
          <div slot="header">
            <el-row type="flex" justify="space-between">
              <h2 style="text-transform: uppercase;">All posts</h2>

              <el-button
                type="text"
                @click="$router.push({ name: 'AddNewPost' })"
              >
                Create post
                <el-icon name="plus" />
              </el-button>
            </el-row>
          </div>

          <template v-if="listPosts">
            <ul class="list">
              <li v-for="post in listPosts" :key="post.id" class="list-item">
                <h4 class="list-item__title">{{ post.title }}</h4>

                <p class="list-item__text">{{ post.body }}...</p>

                <el-row type="flex" justify="end">
                  <el-button
                    type="text"
                    @click="$router.push({ name: 'Post', params: { id: post.id }})"
                  >
                    Read post
                    <el-icon name="d-arrow-right"></el-icon>
                  </el-button>
                </el-row>
              </li>
            </ul>
          </template>

          <template v-else>
            <span>Posts not found</span>
          </template>
        </el-card>
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
