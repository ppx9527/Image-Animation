<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/light.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading
            weight="regular"
            title="基于一阶运动模型的图像动态化"
            size="text-h5"
          />

          <base-heading
            tag="h1"
            size="text-h2"
            title="IMAGE ANIMATION"
            weight="regular"
          />

          <div class="text-body-2 grey--text mb-10 text-justify">
            <p>
              通过为静止图像中的对象设置动画来生成视频，在电影制作，视频会议，虚拟主播等领域中有无数的应用程序。
              更准确地说，图像动态化（image animation）是指通过将从源图像（source image）中提取的对象与从驱动视频（driving video）中获得的运动模式进行组合来自动合成视频的任务。
            </p>
            <p>
              为此，使用自我监督的公式将外观和运动信息分离。为了支持复杂的运动，使用由一组学习的关键点及其局部仿射变换组成的表示形式。
              生成器网络对目标运动期间出现的遮挡进行建模，并将从源图像提取的外观与从驾驶视频获得的运动进行组合。
            </p>
          </div>

          <div class="d-flex align-center flex-wrap">
            <v-btn
              color="primary"
              x-large
              :depressed="true"
              :tile="true"
              @click="scrollToEffect"
            >
              Discover More
              <v-icon right>
                mdi-arrow-right
              </v-icon>
            </v-btn>

            <span class="font-weight-bold ml-6 mr-6 my-4">或</span>

            <v-btn
              color="primary"
              class="pa-1"
              text
              :ripple="false"
              height="auto"
              x-large
              :to="{path: 'animation'}"
            >
              Get Started
            </v-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import {GoToOptions} from "vuetify/types/services/goto";


// 首章节
@Component
export default class Hero extends Vue{
  private Height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh';

  get minHeight() {
    return this.Height
  }

  private scrollToEffect() {
    const options: GoToOptions = {
      duration: 500,
      offset: 0,
      easing: 'easeInQuad'
    }

    this.$vuetify.goTo('#effect', options)
  }
}
</script>