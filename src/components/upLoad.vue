<template>
  <v-sheet>
    <v-fab-transition v-if="type === 'image'">
      <v-img
        v-if="imgUrl"
        :src="imgUrl"
        max-height="300"
        max-width="300"
        transition="fade-transition"
        class="mb-4"
      ></v-img>
      <v-card
        color="grey lighten-1"
        height="300"
        width="300"
        v-else
      ></v-card>
    </v-fab-transition>

    <v-fab-transition v-else>
      <video v-if="imgUrl" :src="imgUrl"></video>
      <v-card
        color="grey lighten-1"
        height="300"
        width="300"
        v-else
      ></v-card>
    </v-fab-transition>

    <v-file-input
      show-size
      counter
      :accept="fileType"
      :label="prompt"
      prepend-icon="mdi-image-filter-drama"
      v-model="image"
      :disabled="disabledSubmit"
      @change="chooseImage"
      @click:clear="imgUrl = ''"
    ></v-file-input>

    <v-btn
      color="primary"
      @click="submit"
      :disabled="disabledSubmit"
    >
      提交
    </v-btn>

    <v-btn text>
      Cancel
    </v-btn>
  </v-sheet>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class UpLoad extends Vue {
  @Prop({
    default: 'image',
    type: String,
    validator(value: string): boolean {
      return ['video', 'image'].includes(value);
    }
  }) readonly type!: string;

  private imgUrl = '';
  private image: File | null = null;
  private disabledSubmit = false;


  private chooseImage() {
    if (this.image instanceof File) {
      this.imgUrl = URL.createObjectURL(this.image)
    }
  }

  private submit() {
    if (this.imgUrl != '' && this.image instanceof File) {
      this.disabledSubmit = true;
      this.$store.commit('changeLoadingState');

      const form = new FormData();
      form.append('file', this.image, this.image.name);

      this.$http.post('http://localhost:5000/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        this.disabledSubmit = false;
        this.$store.commit('changeLoadingState');

        if (response.status == 200 && response.data == '1') {
          this.$store.commit('changeSnackbarState', {
            states: true,
            promptText: '上传成功',
            color: 'light-green',
          })
          this.$store.commit('goToNextStep');
        } else {
          this.$store.commit('changeSnackbarState', {
            states: true,
            promptText: '上传失败，服务器异常',
            color: 'red accent-4'
          })
        }
      }, response => {
        this.disabledSubmit = false;
        this.$store.commit('changeLoadingState');
        this.$store.commit('changeSnackbarState', {
          states: true,
          promptText: `上传失败，请重新上传，错误代码：${response.status}`,
          color: 'red accent-4'
        })
      })
    } else {
      this.$store.commit('changeSnackbarState', {
        states: true,
        promptText: '上传失败，请选择图片后上传',
        color: 'red accent-4'
      })
    }
  }

  get fileType(){
    return `${this.type}/*`
  }

  get prompt(){
    return this.type === 'image' ? '请上传图片' : '请上传视频'
  }
}
</script>

<style scoped>

</style>