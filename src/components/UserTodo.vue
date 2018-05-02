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
  import elSwitch from 'element-ui/lib/switch';

  export default {
    name: 'UserTodo',
    components: {
      elSwitch,
    },
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
</script>
