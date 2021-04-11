<template>
  <div class="d-flex flex-column align-center mt-16 mb-10">
    <div>
      <p>
        《原神》角色演示-「胡桃：生人勿近」 现已发布。往生堂重要的仪式，人人都该敬而远之。
        既然你们不「识趣」，那就给你们一点「有趣」的惩罚吧！
      </p>
    </div>

    <v-stepper
      v-model="status"
      :style="{ width:this.$vuetify.breakpoint.smAndDown ? '100%' : '65%' }"
    >
      <v-stepper-header>
        <v-stepper-step
          step="1"
          :complete="status > 1"
        >
          上传静态图片
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="2"
          :complete="status > 2"
        >
          上传视频
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="3"
        >
          生成视频
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          step="1"
        >


          <v-img :src="img" min-height="200">
            <template v-slot:placeholder>
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>
            </template>
          </v-img>

          <v-file-input @change="chooseImage"></v-file-input>
          <v-btn
            color="primary"
            @click="abc"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content
          step="2"
        >
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="status = 3"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content
          step="3"
        >
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="status = 1"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Animation extends Vue {
  private status = 1;
  private img = '';
  private file!: File;

  chooseImage(e: File){
    this.file = e;
    this.img = URL.createObjectURL(e)
  }

  abc() {
    const form = new FormData();
    form.append('file', this.file, this.file.name);

    this.$http.post('http://localhost:5000/upload', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
        console.log(response.data)
      }, response => {
        console.log(response.status)
      })

    // this.status = 2;
  }
}
</script>

<style>

</style>