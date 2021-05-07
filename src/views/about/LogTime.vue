<template>
  <div class="d-flex flex-column align-center mt-16 mb-10">
    <div class="mb-6 ml-auto mr-auto">
      <base-heading title="开发时间轴" tag="h4" size="text-h4" weight="medium" style="color: cornflowerblue"/>
    </div>

    <v-timeline
      :dense="this.$vuetify.breakpoint.smAndDown"
      :style="{ width:this.$vuetify.breakpoint.smAndDown ? '100%' : '65%' }"
    >
      <v-timeline-item
        v-for="(item, index) in items"
        :key="index"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <template v-slot:opposite>
          <span :class="`headline font-weight-bold ${item.color}--text`">{{ item.time }}</span>
        </template>

        <v-card class="elevation-2" >
          <v-card-title :class="`title headline ${item.color}--text`">
            {{ item.title }}
          </v-card-title>

          <v-card-text class="white text--primary">
            <p class="text-pre-wrap">
              {{ item.text }}
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class LogTime extends Vue{
  private items = [
    {
      title: '项目部署',
      time: '2021-4-30',
      text: '前端项目部署阿里云上,通过使用Nginx进行部署。\n' +
        '后端项目部署在腾讯的GPU服务器上，通过使用Nginx + gunicorn进行部署',
      color: 'indigo',
      icon: 'mdi-linux'
    },
    {
      title: '人脸识别与裁剪',
      time: '2021-4-25',
      text: '为后端添加了基于OpenCV-Python的库face_recognition的人脸识别与裁剪功能',
      color: 'deep-purple',
      icon: 'mdi-emoticon-happy-outline'
    },
    {
      title: '前端功能',
      time: '2021-4-20',
      text: '完成了前端的基本功能，包括文件上传，和动态视频的生成',
      color: 'orange',
      icon: 'mdi-function'
    },
    {
      title: '神经网络模型',
      time: '2021-4-11',
      text: '使用了PyTorch作为机器学习库，神经网络模型基于 First Order Motion Model',
      color: 'lime',
      icon: 'mdi-language-python'
    },
    {
      title: '后端服务器',
      time: '2021-4-1',
      text: '搭建好了后端服务器环境，使用了腾讯云的GPU服务器（GPU为NVIDIA Tesla T4）\n' +
        '服务器的操作系统为Ubuntu18.04，NVIDIA CUDA 10.0.130，cuDNN 7.4.2，Web服务框架使用Python的Flask',
      color: 'teal',
      icon: 'mdi-ubuntu'
    },
    {
      title: '前端页面',
      time: '2021-3-24',
      text: '添加了前端所需的页面，添加home，Animation，about页面，完成前端的基本布局',
      color: 'blue',
      icon: 'mdi-application'
    },
    {
      title: '前端框架搭建',
      time: '2021-2-28',
      text: '完成了前端基本框架的搭建，前端主要使用了TypeScript、Vue、Vuetify，基本写完Header和Footer的布局',
      color: 'green',
      icon: 'mdi-vuejs'
    }
  ]
}
</script>

<style lang="less">

</style>