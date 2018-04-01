<template>

  <el-row>
    <h4 class="list-item__title">{{ data.title }}</h4>

    <p class="list-item__text">{{ data.body }}...</p>

    <el-row type="flex" justify="space-between" align="middle">
      <el-rate
        v-model="rating"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </el-rate>

      <el-button
        type="text"
        @click="$router.push({ name: 'Post', params: { id: data.id }})"
      >
        Read post
        <el-icon name="d-arrow-right"></el-icon>
      </el-button>
    </el-row>
  </el-row>

</template>

<script>
  export default {
    name: 'UserPost',
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        rating: 0,
      };
    },
    methods: {
      setRating() {
        const rand = Math.random() * 5;
        return Number(rand.toFixed(1));
      },
    },
    mounted() {
      this.rating = this.setRating();
    },
  };
</script>
