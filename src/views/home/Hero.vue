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

          <div class="text-body-2 grey--text mb-10 ">
            <div>
              图像动态化包括生成视频序列，以便根据驱动视频的运动对源图像中的对象进行动态化处理。此无需使用任何注解或有关特定对象的先验信息就可以解决此问题。
              一旦接受了一组描述相同类别对象（例如面孔，人体）的视频的训练，我们的方法就可以应用于此类的任何对象。
            </div>
            <div>
              为此，我们使用自我监督的公式将外观和运动信息分离。为了支持复杂的运动，我们使用由一组学习的关键点及其局部仿射变换组成的表示形式。
              生成器网络对目标运动期间出现的遮挡进行建模，并将从源图像提取的外观与从驾驶视频获得的运动进行组合。
            </div>
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