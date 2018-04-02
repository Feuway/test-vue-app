<template>

  <el-card>
    <img :src="data.thumbnailUrl"
         alt="photo"
         style="width: 100%;"
    >

    <div class="card__content" style="min-height: 130px">
      <h4 class="card__title">
        {{ data.title }}
      </h4>

      <el-rate
        v-model="data.rating"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </el-rate>
    </div>
  </el-card>

</template>

<script>
  export default {
    name: 'PhotoCard',
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    methods: {
      setRating() {
        const rand = Math.random() * 5;
        return Number(rand.toFixed(1));
      },
    },
    mounted() {
      this.$set(this.data, 'rating', this.setRating());
    },
  };
</script>
