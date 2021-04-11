<template>
  <v-theme-provider dark>
    <v-sheet id="social">
      <v-icon size="56"  class="mb-8">
        mdi-github
      </v-icon>

      <div class="social-text">
        <base-heading title="GitHub" size="text-h4" weight="regular" :space="2"/>

        <v-responsive
          class="ma-auto mb-6"
        >
          <v-divider></v-divider>
        </v-responsive>

        <p class="text-body-2 grey--text mb-10 text--lighten-1 text-left" style="max-width: 700px">
          对于DeepFake这种大型的神经网络模型来进行换脸是视频图像帧级别的操作，如果想把源脸替换到目标脸上的话，需要使用大量的双方人脸图像的数据进行事先训练训练。<br>
          由此生成的网络是数据驱动的，因此在所生成的结果中反映了训练数据的特性；良好的效果受限于训练数据集，特定身份的高质量图像需要该身份的大量样本。
          由于换脸需要经历提取脸图，训练模型，合成视频等环节，需要的时间往往以天为单位。
        </p>
      </div>

      <a
        class="d-inline-block mb-8"
        href="https://github.com/AliaksandrSiarohin/first-order-model"
        style="text-decoration: none;"
        target="_blank"
      >
        First Order Motion Model for Image Animation
      </a>

      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://github.com/AliaksandrSiarohin/first-order-model"
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