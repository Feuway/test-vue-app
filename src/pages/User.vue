<template>

  <section v-loading.fullscreen="loading">
    <el-row>
      <el-collapse-transition>
        <el-card v-if="dataUser">
          <template slot="header">
            <el-row :gutter="20">
              <el-col :sm="6">
                <img src="http://placehold.it/150" alt="avatar">
              </el-col>
              <el-col :sm="18">
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
            <div class="card__content">
              <el-row :gutter="20" class="container">
                <el-col :span="4">
                  <span>E-mail:</span>
                </el-col>
                <el-col :span="20">
                  <span>{{ dataUser.email }}</span>
                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :span="4">
                  <span>Address:</span>
                </el-col>
                <el-col :span="20">
                  <span>{{ fullAddress }}</span>
                </el-col>
              </el-row>

              <el-row :gutter="20" class="container">
                <el-col :span="4">
                  <span>Phone:</span>
                </el-col>
                <el-col :span="20">
                  <span>{{ dataUser.phone }}</span>
                </el-col>
              </el-row>

              <el-row :gutter="20" class="container">
                <el-col :span="4">
                  <span>Website:</span>
                </el-col>
                <el-col :span="20">
                  <span>{{ dataUser.website }}</span>
                </el-col>
              </el-row>

              <el-row :gutter="20" class="container">
                <el-col :span="4">
                  <span>Company:</span>
                </el-col>
                <el-col :span="20">
                  <span>{{ fullNameCompany }}</span>
                </el-col>
              </el-row>

            </div>
          </template>
        </el-card>
      </el-collapse-transition>
    </el-row>

    <el-row class="container" :gutter="20">
      <el-col :sm="12">
        <el-card>
          <template slot="header">
            <h3 class="card__title">Posts</h3>
          </template>

          <template>
            <ul class="list" style="min-height: 200px" v-loading="loadingPosts">
              <li v-for="post in listPosts"
                  :key="post.id"
                  class="list-item"
              >
                <user-post :data="post" />
              </li>
            </ul>
          </template>
        </el-card>
      </el-col>

      <el-col :sm="12">
        <el-card>
          <template slot="header">
            <h3 class="card__title">Todos</h3>
          </template>

          <template>
            <div class="card__content" v-loading="loadingTodos">
              <user-todo
                v-for="todo in listTodos"
                :key="todo.id"
                :data="todo"
              />
            </div>
          </template>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-card>
        <template slot="header">
          <h3 class="card__title">Albums</h3>
        </template>

        <template>
          <div v-loading="loadingAlbums">
            <el-collapse v-model="activeAlbums"
                         accordion
                         @change="onChangeCollapse"
            >
              <el-collapse-item v-for="album in listAlbums" :key="album.id"
                                :name="album.id"
              >
                <template slot="title">
                  <h4 style="margin: 0; padding: 0 20px; text-transform: capitalize;">
                    {{ album.title }}
                  </h4>
                </template>

                <template>
                  <div class="card__content">
                    <el-row :gutter="20" v-loading="loadingPhotos">
                      <el-col :sm="8"
                              class="container"
                              v-for="photo in album.listPhotos"
                              :key="photo.id"
                      >
                        <photo-card :data="photo" />
                      </el-col>
                    </el-row>
                  </div>
                </template>
              </el-collapse-item>
            </el-collapse>
          </div>
        </template>
      </el-card>
    </el-row>
  </section>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import store from '@/store';

  import UserTodo from '@/components/UserTodo';
  import UserPost from '@/components/UserPost';
  import PhotoCard from '@/components/PhotoCard';

  // const UserTodo = () => import('@/components/UserTodo');
  // const UserPost = () => import('@/components/UserPost');
  // const PhotoCard = () => import('@/components/PhotoCard');

  export default {
    name: 'User',
    components: {
      UserTodo,
      UserPost,
      PhotoCard,
    },
    props: {
      id: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        loading: false,
        loadingPhotos: false,
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
        activeAlbums: '',
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
    watch: {
      // dataUser(val) {
      //   if (val) {
      //     this.onLoadLists();
      //   }
      // },
    },
    methods: {
      ...mapActions([
        'fetchDataUser',
        'fetchPostsUser',
        'fetchAlbumsUser',
        'fetchTodosUser',
        'fetchPhotosUser',
      ]),

      onChangeCollapse(val) {
        if (val) {
          this.loadListPhoto(val);
        }
      },

      async loadListPhoto(val) {
        try {
          const currentAlbum = this.listAlbums.find(album => album.id === val);
          if (!currentAlbum.listPhotos) {
            this.loadingPhotos = true;
            const listPhotos = await this.fetchPhotosUser({ albumId: val });
            this.$set(currentAlbum, 'listPhotos', listPhotos);
          }
        } catch (e) {
          console.error(e);
        } finally {
          this.loadingPhotos = false;
        }
      },

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
    },
    created() {
      // this.onLoadData();
    },

    async beforeRouteEnter(to, from, next) {
      console.log(to);
      const userId = to.params.id;
      await store.dispatch('fetchDataUser', { userId });
      const listPosts = await store.dispatch('fetchPostsUser', { userId });
      const listAlbums = await store.dispatch('fetchAlbumsUser', { userId });
      const listTodos = await store.dispatch('fetchTodosUser', { userId });
      next((vm) => {
        vm.dataControlLists.posts.list = listPosts;
        vm.dataControlLists.albums.list = listAlbums;
        vm.dataControlLists.todos.list = listTodos;
      });
    },
  };

</script>
