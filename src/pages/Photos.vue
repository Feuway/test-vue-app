<template>

  <el-row :gutter="20" v-loading="loading">
    <el-col :sm="8"
            class="container"
            v-for="photo in listPhotos.slice(0, 100)"
            :key="photo.id"
    >
      <photo-card :data="photo" />
    </el-col>
  </el-row>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import PhotoCard from '@/components/PhotoCard';

  export default {
    name: 'Photos',
    components: {
      PhotoCard,
    },
    data() {
      return {
        loading: false,
      };
    },
    computed: {
      ...mapGetters([
        'listPhotos',
      ]),
    },
    methods: {
      ...mapActions([
        'fetchListPhotos',
      ]),

      async onLoadData() {
        try {
          this.loading = true;
          await this.fetchListPhotos();
        } catch (e) {
          console.error(e);
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {},
    created() {
      this.onLoadData();
    },
  };

</script>
