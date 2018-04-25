<template>

  <section v-loading.fullscreen="loading">
    <el-row>
      <el-col class="container">
        <el-card v-if="dataPost">
          <template slot="header">
            <h1>{{ dataPost.title }}</h1>
          </template>

          <div class="post__content">
            <p>{{ dataPost.body }}</p>
            <p>{{ dataPost.body }}{{ dataPost.body }}</p>
            <p>{{ dataPost.body }}{{ dataPost.body }}</p>
            <p>{{ dataPost.body }}{{ dataPost.body }}{{ dataPost.body }}</p>
            <p>{{ dataPost.body }}</p><p>{{ dataPost.body }}</p><p>{{ dataPost.body }}</p>
            <p>{{ dataPost.body }}</p><p>{{ dataPost.body }}</p><p>{{ dataPost.body }}</p>

            <el-rate
              v-model="rating"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value} points">
            </el-rate>

            <el-row class="container">
              <el-button
                type="text"
                @click="$router.push({ name: 'User', params: { id: dataPost.userId }})"
              >
                Author
              </el-button>
            </el-row>
          </div>
        </el-card>
      </el-col>

      <el-col v-loading="loadingComments" class="container">
        <el-card style="min-height: 200px">
          <template>
            <el-collapse-transition>
              <el-row v-if="!isVisibleFormComment">
                <el-button
                  style="width: 100%;"
                  @click="isVisibleFormComment = true"
                >
                  Leave your comment
                </el-button>
              </el-row>
            </el-collapse-transition>
          </template>

          <template>
            <el-collapse-transition>
              <el-row v-if="isVisibleFormComment"
                      class="container" type="flex" justify="center"
              >
                <el-col :sm="16">
                  <el-form
                    :model="dataFormComment"
                    :rules="rulesFormComment"
                    ref="dataFormComment"
                    label-width="100px"
                    style="padding: 0 20px;"
                  >
                    <el-row>
                      <el-col>
                        <el-form-item label="Name" prop="name">
                          <el-input
                            v-model="dataFormComment.name"
                            :disabled="loadingFormComment"
                          />
                        </el-form-item>
                      </el-col>

                      <el-col>
                        <el-form-item label="Email" prop="email">
                          <el-input
                            v-model="dataFormComment.email"
                            :disabled="loadingFormComment"
                          />
                        </el-form-item>
                      </el-col>

                      <el-col>
                        <el-form-item label="Comment" prop="body">
                          <el-input
                            type="textarea"
                            v-model="dataFormComment.body"
                            :disabled="loadingFormComment"
                          />
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>

                  <el-row type="flex" justify="end">
                    <el-button
                      :disabled="loadingFormComment"
                      @click="isVisibleFormComment = false"
                    >
                      Close
                    </el-button>

                    <el-button
                      type="primary"
                      :loading="loadingFormComment"
                      @click="onSaveComment"
                    >
                      Save
                    </el-button>
                  </el-row>
                </el-col>
              </el-row>
            </el-collapse-transition>
          </template>

          <template v-if="dataPost">
            <ul class="list">
              <li v-for="comment in listComments" :key="comment.id" class="list-item">
                <span class="list-item__tip">{{ comment.name }}</span>

                <p class="list-item__text">"{{ comment.body }}"</p>
              </li>
            </ul>
          </template>
          <template v-else>
            <span>
              Empty
            </span>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </section>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Post',
    props: {
      id: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        loading: false,
        loadingComments: false,
        loadingFormComment: false,
        listComments: [],
        isVisibleFormComment: false,
        dataFormComment: {
          postId: this.id,
          name: '',
          email: '',
          body: '',
        },
        rulesFormComment: {
          name: [
            { required: true, message: 'Please input email', trigger: 'change' },
            { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' },
          ],
          email: [
            { required: true, message: 'Please input email', trigger: 'change' },
            { type: 'email', message: 'Not valid format', trigger: 'blur' },
          ],
          body: [
            { required: true, message: 'Please input comment', trigger: 'change' },
          ],
        },
      };
    },
    computed: {
      ...mapGetters([
        'getPostById',
      ]),

      dataPost() {
        return this.getPostById(Number(this.id));
      },

      rating() {
        const rand = Math.random() * 5;
        return Number(rand.toFixed(1));
      },
    },
    watch: {
      dataPost(val) {
        if (val && typeof val === 'object') {
          this.getComments();
        }
      },
    },
    methods: {
      ...mapActions([
        'fetchListPosts',
        'fetchListCommentsToPost',
        'addCommentToPost',
      ]),

      validateForm(nameForm) {
        return new Promise((resolve, reject) => {
          this.$refs[nameForm].validate((valid) => {
            if (valid) {
              resolve();
            } else {
              reject(new Error('Form is not valid'));
            }
          });
        });
      },

      async onSaveComment() {
        try {
          await this.validateForm('dataFormComment');
          this.loadingFormComment = true;
          const newComment = await this.addCommentToPost({
            dataComment: this.dataFormComment,
          });
          this.isVisibleFormComment = false;
          this.listComments.unshift(newComment);
        } catch (e) {
          console.error(e);
        } finally {
          this.loadingFormComment = false;
        }
      },

      async getComments() {
        try {
          this.loadingComments = true;
          this.listComments = await this.fetchListCommentsToPost({
            postId: this.id,
          });
        } catch (e) {
          console.error(e);
          this.$alert({
            type: 'error',
            message: e.message,
          });
        } finally {
          this.loadingComments = false;
        }
      },

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
    mounted() {
      if (this.dataPost && typeof this.dataPost === 'object') {
        this.getComments();
      }
    },
    created() {
      this.onLoadData();
    },
  };

</script>
