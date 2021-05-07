<template>
  <v-sheet id="about-use">
    <div class="text-center">
      <v-avatar class="mb-4" size="62" color="primary">
        <v-icon size="48" color="white">
          mdi-information-variant
        </v-icon>
      </v-avatar>

      <base-heading title="使用说明" size="text-h4" weight="medium" :space="4"/>

      <v-responsive
        class="ma-auto mb-12 primary" style="width: 46px"
      >
        <v-divider></v-divider>
      </v-responsive>

    </div>

    <v-container>
      <v-row>
        <v-col md="4" v-for="(card, index) in cards" :key="index">
          <v-container class="pa-0">
            <v-row no-gutters justify="start">


              <v-col cols="9">
                <div class="text-body-2 font-weight-regular mb-1 text-left grey--text">{{ card.subheading }}</div>
                <base-heading :title="card.title" size="text-h6" :space="1"></base-heading>

                <v-responsive
                  class="mr-auto mb-6 primary" style="width: 28px"
                >
                  <v-divider></v-divider>
                </v-responsive>

                <p class="text-body-1 grey--text text--darken-1 text-justify mb-6">{{ card.body }}</p>
              </v-col>

              <v-col cols="2">
                <div class="text-h2 font-weight-bold pr-8" style="color: rgba(246,245,245,.6)">{{ card.id }}</div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class AboutUse extends Vue {
  private cards = [
    {
      id: '01',
      title: '第一步',
      subheading: '上传或选择人脸图片',
      body: '上传或选择一张带有人脸的静态图片，这一步是为了使图片动态化。' +
        '为了得到最好的效果，请确保图片中的人脸有着不错的清晰度和大小。'
    },{
      id: '02',
      title: '第二步',
      subheading: '上传一个包含人脸动作的视频',
      body: '上传一个包含人脸动作的视频（最好是mp4格式），这一步是为了提取人脸的动作。' +
        '为了得到最好的效果，请确保视频中的人脸没有太大的移动并且只会出现一张人脸，并且为了减少等待时间，请控制视频的时长和大小。'
    },{
      id: '03',
      title: '第三步',
      subheading: '生成视频',
      body: '这个生成的视频是第一步上传的静态人脸加上第二步上传的视频的人脸动作。生成视频的时间主要取决于上传视频的时长，' +
        '一般来说生成视频的时长是上传视频的时长加上30秒左右。'
    }
  ]
}
</script>

<style lang="less">
  #about-use{
    padding: 46px 0;

    .v-divider{
      border-width: 3px 0 0 0 !important;
      border-color: rgba(56, 140, 208, .8);
    }

    .primary{
      background-color: #42a5f6 !important;
      border-color: #42a5f6 !important;
    }
  }
</style>