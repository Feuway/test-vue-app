<template>

  <section>
    <el-row :gutter="20">
      <el-col :sm="16" class="container">
        <el-card v-loading="loadingPosts">
          <div slot="header">
            <el-row type="flex" justify="space-between">
              <h2 style="text-transform: uppercase;">New posts</h2>
              <el-button
                type="text"
                @click="$router.push({ name: 'Posts' })"
              >
                Go to posts
                <el-icon name="tickets"></el-icon>
              </el-button>
            </el-row>
          </div>

          <template v-if="listNewPosts">
            <ul class="list">
              <li v-for="post in listNewPosts" :key="post.id" class="list-item">
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
            <span>New posts not found</span>
          </template>
        </el-card>
      </el-col>

      <el-col :sm="8" class="container">
        <el-row>
          <el-col class="container">
            <el-card v-loading="loadingComments">
              <div slot="header">
                <h3 class="card__title">New comments to posts</h3>
              </div>

              <template v-if="listNewComments">
                <ul class="list">
                  <li v-for="comment in listNewComments" :key="comment.id" class="list-item">
                    <p class="list-item__text">"{{ comment.body }}"</p>

                    <span class="list-item__tip">{{ comment.name }}</span>

                    <el-row type="flex" justify="end">
                      <el-button
                        type="text"
                        @click="$router.push({ name: 'Post', params: { id: comment.postId }})"
                      >
                        Go to post
                        <el-icon name="tickets"></el-icon>
                      </el-button>
                    </el-row>
                  </li>
                </ul>
              </template>

              <template v-else>
                <span>New comments not found</span>
              </template>
            </el-card>
          </el-col>

          <el-col class="container">
            <el-card>
              <div slot="header">
                <h3 style="text-transform: uppercase; margin: 0;">New users</h3>
              </div>

            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </section>

</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Dashboard',
    data() {
      return {
        dataControlLists: {
          posts: {
            loading: false,
            list: null,
          },
          comments: {
            loading: false,
            list: null,
          },
          users: {
            loading: false,
            list: null,
          },
          photos: {
            loading: false,
            list: null,
          },
        },
      };
    },
    computed: {
      listNewPosts() {
        return this.dataControlLists.posts.list;
      },
      loadingPosts() {
        return this.dataControlLists.posts.loading;
      },
      listNewComments() {
        return this.dataControlLists.comments.list;
      },
      loadingComments() {
        return this.dataControlLists.comments.loading;
      },
    },
    methods: {
      ...mapActions([
        'fetchNewPosts',
        'fetchNewComments',
        'fetchNewUsers',
        'fetchNewPhotos',
      ]),

      loadList(nameList, cb) {
        const dataList = this.dataControlLists[nameList];
        dataList.loading = true;
        return cb()
          .then((list) => {
            dataList.list = list;
          })
          .catch((err) => {
            this.$alert({
              type: 'error',
              message: err.message,
            });
          })
          .finally(() => {
            dataList.loading = false;
          });
      },

      async onLoadData() {
        try {
          const { loadList } = this;
          this.loading = true;
          await Promise.all([
            loadList('posts', this.fetchNewPosts),
            loadList('comments', this.fetchNewComments),
            // loadList('users', this.fetchNewUsers),
            // loadList('photos', this.fetchNewPhotos),
          ]);
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
