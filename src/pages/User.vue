<template>

  <section v-loading.fullscreen="loading">
    <el-row class="">
      <el-collapse-transition>
        <el-card v-if="dataUser">
          <template slot="header">
            <el-row :gutter="20">
              <el-col :sm="8" class="container">
                <img src="http://placehold.it/150" alt="avatar">
              </el-col>
              <el-col :sm="16" class="container">
                <h2>
                  {{ dataUser.name }}
                </h2>
                <h3>
                  {{ dataUser.username }}
                </h3>
              </el-col>
            </el-row>
          </template>

          <template>
            <el-row style="padding: 0 20px;">
              <p>E-mail: {{ dataUser.email }}</p>

              <p>Address: {{ fullAddress }}</p>

              <p>Phone: {{ dataUser.phone }}</p>

              <p>Website: {{ dataUser.website }}</p>

              <p>Company: {{ fullNameCompany }}</p>
            </el-row>
          </template>
        </el-card>
      </el-collapse-transition>
    </el-row>

    <el-row class="container" :gutter="20">
      <el-col :sm="12">
        <el-card>
          <template slot="header">
            <h3 style="text-transform: uppercase; margin: 0;">Posts</h3>
          </template>

          <template>
            <div style="min-height: 200px" v-loading="loadingPosts">
              <pre>
                {{ listPosts }}
              </pre>
            </div>
          </template>
        </el-card>
      </el-col>

      <el-col :sm="12">
        <el-card>
          <template slot="header">
            <h3 style="text-transform: uppercase; margin: 0;">Todos</h3>
          </template>

          <template>
            <div style="min-height: 200px" v-loading="loadingTodos">
              <pre>
                {{ listTodos }}
              </pre>
            </div>
          </template>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-card>
        <template slot="header">
          <h3 style="text-transform: uppercase; margin: 0;">Albums</h3>
        </template>

        <template>
          <div style="min-height: 200px" v-loading="loadingAlbums">
              <pre>
                {{ listAlbums }}
              </pre>
          </div>
        </template>
      </el-card>
    </el-row>
  </section>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'User',
    props: {
      id: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        loading: false,
        dataControlLists: {
          posts: {
            loading: false,
            list: null,
          },
          albums: {
            loading: false,
            list: null,
          },
          todos: {
            loading: false,
            list: null,
          },
        },
      };
    },
    computed: {
      ...mapGetters([
        'getUserById',
      ]),

      dataUser() {
        return this.getUserById(Number(this.id));
      },

      fullAddress() {
        const { city, street, suite, zipcode } = this.dataUser.address;
        return `${city}, ${street}, ${suite}, ${zipcode}`;
      },

      fullNameCompany() {
        const { name, catchPhrase, bs } = this.dataUser.company;
        return `${name} ("${catchPhrase}"), ${bs}`;
      },

      listPosts() {
        return this.dataControlLists.posts.list;
      },
      loadingPosts() {
        return this.dataControlLists.posts.loading;
      },

      listAlbums() {
        return this.dataControlLists.albums.list;
      },
      loadingAlbums() {
        return this.dataControlLists.albums.loading;
      },

      listTodos() {
        return this.dataControlLists.todos.list;
      },
      loadingTodos() {
        return this.dataControlLists.todos.loading;
      },
    },
    methods: {
      ...mapActions([
        'fetchDataUser',
        'fetchPostsUser',
        'fetchAlbumsUser',
        'fetchTodosUser',
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

      async onLoadLists() {
        try {
          const { loadList } = this;
          await Promise.all([
            loadList('posts', this.fetchPostsUser.bind(this, { userId: this.id })),
            loadList('albums', this.fetchAlbumsUser.bind(this, { userId: this.id })),
            loadList('todos', this.fetchTodosUser.bind(this, { userId: this.id })),
          ]);
        } catch (e) {
          console.error(e);
        } finally {
          this.loading = false;
        }
      },

      async onLoadData() {
        try {
          this.loading = true;
          await this.fetchDataUser({ userId: this.id });
        } catch (e) {
          console.error(e);
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {
      this.onLoadLists();
    },
    created() {
      this.onLoadData();
    },
  };

</script>
