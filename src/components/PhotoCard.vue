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

      <span>{{ dateNow }}</span>
    </div>
  </el-card>

</template>

<script>
  import moment from 'moment';
  import 'moment/locale/ru';

  export default {
    name: 'PhotoCard',
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    computed: {
      dateNow() {
        return moment().format('DD/MMMM/YYYY');
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
