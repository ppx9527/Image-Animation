<template>
  <v-theme-provider dark>
    <v-sheet id="social">
      <v-icon size="56"  class="mb-8">
        mdi-github
      </v-icon>

      <div class="social-text">
        <base-heading title="Social Media" size="text-h4" weight="regular" :space="2"/>

        <v-responsive
          class="ma-auto mb-6"
        >
          <v-divider></v-divider>
        </v-responsive>

        <p class="text-body-2 grey--text mb-10 text--lighten-1 " style="max-width: 700px">
          DeepFake这种大型的神经网络模型来进行换脸是视频图像帧级别的操作，如果想把源脸替换到目标脸上的话，需要使用大量的双方人脸图像的数据进行事先训练训练。
          生成的网络是数据驱动的，因此在所生成的结果中反映了训练数据的特性；
        </p>
      </div>

      <a
        class="d-inline-block mb-8"
        href="https://vuetifyjs.com"
        style="text-decoration: none;"
        target="_blank"
      >
        https://vuetifyjs.com
      </a>

      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://github.com/vuetifyjs/vuetify"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Follow Us
        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </v-sheet>
  </v-theme-provider>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class SocialMedia extends Vue{

}
</script>

<style lang="less">
  #social{
    background-color: #204165 !important;
    border-color: #204165 !important;
    padding: 46px 0;
    text-align: center;

    .social-text{
      display: flex;
      justify-content: center;
      flex-flow: column;
      align-items: center;
    }

    .v-divider{
      border-width: 3px 0 0 0 !important;
      width: 46px;
    }
  }
</style>