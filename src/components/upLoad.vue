<template>
  <v-sheet>
    <v-fade-transition v-if="type === 'image'" mode="out-in">
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
    </v-fade-transition>

    <v-fade-transition v-else mode="out-in">
      <video v-if="imgUrl" :src="imgUrl"></video>
      <v-card
        color="grey lighten-1"
        height="300"
        width="300"
        v-else
      ></v-card>
    </v-fade-transition>

    <v-file-input
      show-size
      counter
      class="mt-6"
      :accept="fileType"
      :label="prompt"
      prepend-icon="mdi-image-filter-drama"
      v-model="image"
      :disabled="disabledSubmit"
      @change="chooseImage"
      @click:clear="imgUrl = ''"
    />

    <v-row>
      <v-col cols="12" class="mt-2">
        <v-btn
          color="primary"
          @click="submit"
          :disabled="disabledSubmit"
        >
          上传
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-col>
    </v-row>
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
        },
        credentials: true
      }).then(response => {
        this.disabledSubmit = false;
        this.imgUrl = '';
        this.image = null;
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