<template>

  <section>
    <el-card>
      <template slot="header">
        <h1 class="card__title">Create new album</h1>
      </template>

      <template>
        <div class="card__content">
          <el-form :model="dataForm"
                   :rules="rulesForm"
                   ref="dataForm"
                   label-width="120px"
          >
            <el-row class="container">
              <el-upload
                action="http://localhost:3000/uploads"
                :auto-upload="false"
                list-type="picture-card"
                ref="upload"
                multiple
                accept="image/*"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>

              <el-dialog :visible.sync="isVisibleModalImage" fullscreen>
                <img width="100%" :src="dialogImageUrl">
              </el-dialog>
            </el-row>

            <el-row class="container">
              <el-button
                type="primary"
                @click="submitUpload"
              >
                Upload to server
                <i class="el-icon-upload el-icon-right"></i>
              </el-button>
            </el-row>

            <el-row class="container">
              <transition name="el-zoom-in-top">
                <div v-if="isVisibleForm">
                  <el-form-item label="Title" prop="title">
                    <el-input v-model="dataForm.name" />
                  </el-form-item>

                  <el-form-item label="Description" prop="desc">
                    <el-input type="textarea" v-model="dataForm.desc" />
                  </el-form-item>

                  <el-form-item>
                    <el-button
                      type="primary"
                      @click="onSaveAlbum"
                    >
                      Save
                    </el-button>
                  </el-form-item>
                </div>
              </transition>
            </el-row>
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
        isVisibleForm: false,
        dataForm: {
          name: '',
          desc: '',
        },
        rulesForm: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, message: 'Min 3 letters', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.isVisibleModalImage = true;
      },
      submitUpload() {
        this.$refs.upload.submit();
        this.isVisibleForm = true;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },

      async onSaveAlbum() {
        this.$message({
          type: 'success',
          message: 'Created new album!',
        });
        this.$router.push({ name: 'Dashboard' });
      },
    },
  };
</script>
