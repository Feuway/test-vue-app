<template>

  <div>
    <el-row type="flex" justify="center">
      <el-col :sm="5">
        <h2 style="text-align: center">Search Users</h2>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" class="container">
      <el-col :sm="16">
        <el-form
          :model="formSearch"
          ref="formSearch"
          label-position="top"
          label-width="120px"
          @submit.native.prevent="onSearchUsers"
        >
          <el-input placeholder="Please input user"
                    v-model="formSearch.input"
                    @focus="handleFocusInput"
          >
            <template slot="append">
              <el-button
                type="primary"
                icon="el-icon-search"
                @click="onSearchUsers"
              />
            </template>
          </el-input>
        </el-form>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-card v-loading="loading">
        <transition name="el-zoom-in-center">
          <div style="min-height: 200px;">
            <div v-if="resultsSearching">
              <template v-if="resultsSearching.length > 0">
                <ul class="list">
                  <li v-for="result in resultsSearching" :key="result.id" class="list-item">
                    <user-link :data="result" />
                  </li>
                </ul>
              </template>
              <template v-else-if="!loading">
                <el-row type="flex" justify="center" align="middle" style="height: 100%;">
                  <h3>No Matches</h3>
                </el-row>
              </template>
            </div>
          </div>
        </transition>
      </el-card>
    </el-row>
  </div>

</template>

<script>
  import { mapActions } from 'vuex';
  import UserLink from '@/components/UserLink';
  import formComponents from '@/utils/mixins/form-components';

  export default {
    name: 'SearchUsers',
    components: {
      UserLink,
    },
    mixins: [formComponents],
    data() {
      return {
        loading: false,
        formSearch: {
          input: '',
        },
        permissions: '',
        resultsSearching: null,
      };
    },
    methods: {
      ...mapActions([
        'searchUserByName',
        'fetchUserPermission',
      ]),

      handleFocusInput() {
        // fetch permission API
      },

      async onSearchUsers() {
        try {
          this.loading = true;
          if (!this.permissions) {
            this.permissions = await this.fetchUserPermission();
          }
          if (this.permissions === 'guest') {
            this.resultsSearching = await this.searchUserByName({
              name: this.formSearch.input,
            });
          }
        } catch (err) {
          console.error(err);
          this.$message({
            type: 'error',
            message: err.message,
            showClose: true,
          });
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {},
    created() {},
  };
</script>
