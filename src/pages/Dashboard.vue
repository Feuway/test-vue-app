<template>

  <section>
    <el-row :gutter="20">
      <el-col :sm="16" class="container">
        <el-card>
          <h2>New posts</h2>
        </el-card>
      </el-col>

      <el-col :sm="8" class="container">
        <el-row>
          <el-col class="container">
            <el-card>
              <h3>New comments to posts</h3>

            </el-card>
          </el-col>

          <el-col class="container">
            <el-card>
              <h3>New users</h3>

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
        listNewPosts: null,
        listNewComments: null,
        listNewUsers: null,
        listNewPhotos: null,
      };
    },
    methods: {
      ...mapActions([
        'fetchNewPosts',
        'fetchNewComments',
        'fetchNewUsers',
        'fetchNewPhotos',
      ]),
    },
  };
</script>
