<template>

  <el-row type="flex" align="middle">
    <el-switch
      v-model="data.completed"
      disabled>
    </el-switch>

    <p style="padding-left: 20px;">
      {{ data.title }}
    </p>
  </el-row>

</template>

<script>
  export default {
    name: 'UserTodo',
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
</script>
