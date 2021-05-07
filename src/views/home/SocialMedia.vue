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
          表情重现，让目标身份的表情模仿源身份的表情（极端一点，泰罗奥特曼像你一样咧嘴大笑）。
          这在电影和视频游戏行业中具有极大的应用价值，如对演员的表情表演进行后期调整、在教育行业中对历史人物牛顿进行表情再现以讲解牛顿定理等。
          本应用主要的功能就是实现人脸的表情迁移。
        </p>
      </div>

      <a
        class="d-inline-block mb-8 text-decoration-none"
        href="https://github.com/AliaksandrSiarohin/first-order-model"
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