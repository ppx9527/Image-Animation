<template>
  <v-sheet>
    <v-fade-transition v-if="type === 'image'" mode="out-in">
      <v-img
        v-if="imgUrl"
        :src="imgUrl"
        max-height="300"
        max-width="300"
        class="mb-4"
      ></v-img>
      <v-skeleton-loader
        min-height="300"
        max-width="300"
        type="image"
        v-else
      ></v-skeleton-loader>

    </v-fade-transition>

    <v-fade-transition v-else mode="out-in">
      <video
        v-if="imgUrl"
        :src="imgUrl"
        width="300"
        height="300"
      ></video>

      <v-skeleton-loader
        min-height="300"
        max-width="300"
        type="image"
        v-else
      ></v-skeleton-loader>
    </v-fade-transition>

    <v-alert
      v-if="type === 'video'"
      class="mt-4"
      border="left"
      colored-border
      type="info"
      elevation="2"
    >
      如果上传的视频没有预览，是因为video标签仅支持H.264编码格式，请直接上传<br>
      并且上传的视频最大为30MB
    </v-alert>

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

   private async submit() {
     const form = new FormData();
     if (this.imgUrl !== '' && this.image instanceof File) {
       form.append('file', this.image, this.image.name);
     } else {
       this.handleError(new Error('上传失败，请选择图片后上传'))
       return
     }

     this.disabledSubmit = true;
     this.$store.commit('changeLoadingState');
     try {
       const response = await this.axios.post('upload', form, {
         headers: {
           'Content-Type': 'multipart/form-data',
           'Cache-Control': 'no-cache'
         },
         params: {
           token: this.$store.state.token.cookieValue
         },
         timeout: 60000,
       }).finally(() => {
         this.disabledSubmit = false;
         this.$store.commit('changeLoadingState');
       })

       if (response.data == '1') {
         this.$store.commit('changeSnackbarState', {
           states: true,
           promptText: '上传成功',
           color: 'light-green',
         })
         this.imgUrl = '';
         this.image = null;
         this.$store.commit('goToNextStep');
       } else {
         this.handleError(new Error('上传失败，请重新上传'))
       }
     } catch(error) {
       this.handleError(error)
     }
  }

  private handleError(error: Error) {
    this.$store.commit('changeSnackbarState', {
      states: true,
      promptText: error.message,
      color: 'orange accent-4'
    })
  }

  get fileType(){
    return `${this.type}/*`
  }

  get prompt(){
    return this.type === 'image' ? '请上传图片' : '请上传视频'
  }
}
</script>