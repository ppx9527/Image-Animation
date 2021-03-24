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
            DeepFake这种大型的神经网络模型来进行换脸是视频图像帧级别的操作，如果想把源脸替换到目标脸上的话，需要使用大量的双方人脸图像的数据进行事先训练训练。
            生成的网络是数据驱动的，因此在所生成的结果中反映了训练数据的特性；良好的效果受限于训练数据集，特定身份的高质量图像需要该身份的大量样本。
            由于换脸需要经历提取脸图，训练模型，合成视频等环节，需要的时间往往以天为单位
          </div>

          <div class="d-flex align-center flex-wrap">
            <v-btn
              color="primary"
              x-large
              :depressed="true"
              :tile="true"
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


// 首章节
@Component
export default class Hero extends Vue{
  private Height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh';
  get minHeight() {
    return this.Height
  }
}
</script>