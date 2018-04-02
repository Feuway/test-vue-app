<template>

  <section>
    <el-card>
      <template slot="header">
        <h1 class="card__title">Create a new albums</h1>
      </template>

      <template>
        <div class="card__content">
          <el-form>
            <el-row class="container">
              <el-upload
                action="http://localhost:3000/uploads"
                :auto-upload="false"
                list-type="picture-card"
                ref="upload"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>

              <el-dialog :visible.sync="isVisibleModalImage">
                <img width="100%" :src="dialogImageUrl">
              </el-dialog>
            </el-row>

            <el-row class="container">
              <el-button
                type="primary"
                @click="submitUpload"
              >
                Upload to server
              </el-button>
            </el-row>

            <el-row class="container"></el-row>
          </el-form>
        </div>
      </template>
    </el-card>

  </section>

</template>

<script>
  export default {
    name: 'AddNewPost',
    data() {
      return {
        dialogImageUrl: '',
        isVisibleModalImage: false,
      };
    },
    methods: {
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.isVisibleModalImage = true;
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
    },
  };
</script>
