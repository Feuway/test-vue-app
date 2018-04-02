<template>

  <div>
    <el-row type="flex" align="middle">
      <el-col :sm="4">
        <img src="http://placehold.it/100" alt="avatar">
      </el-col>
      <el-col :sm="20">
        <h4>{{ data.name }}</h4>
        <h5>{{ data.username }}</h5>
      </el-col>
    </el-row>

    <el-row type="flex" justify="end">
      <el-button type="text"
                 @click="$router.push({ name: 'User', params: { id: data.id } })"
      >
        To profile
        <el-icon name="arrow-right" />
      </el-button>
    </el-row>
  </div>

</template>

<script>
  export default {
    name: 'UserLink',
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    methods: {
    },
    mounted() {
    },
  };
</script>

