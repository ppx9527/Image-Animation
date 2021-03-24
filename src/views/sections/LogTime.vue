<template>
  <div class="d-flex flex-column align-center mt-16 mb-10">
    <div class="mb-6 ml-auto mr-auto">
      《原神》角色演示-「胡桃：生人勿近」 现已发布。往生堂重要的仪式，人人都该敬而远之。
      既然你们不「识趣」，那就给你们一点「有趣」的惩罚吧！
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
      >
        <template v-slot:opposite>
          <span :class="`headline font-weight-bold ${item.color}--text`">1995</span>
        </template>

        <v-card class="elevation-2" >
          <v-card-title :class="`title headline ${item.color}--text`">
            {{ item.title }}
          </v-card-title>

          <v-card-text class="white text--primary">
            <p>
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
      title: '耗子尾汁',
      text: '随风而来、悬挂在气球上的礼物，是你为我准备的吗？' +
        '谢谢你陪我聊天，和我一起庆祝生日。' +
        '只是非常抱歉，难得的休息日，还要请你帮忙…' +
        '那么，我们继续前进，寻找可莉吧。',
      color: 'cyan',
      icon: 'mdi-star'
    },
    {
      title: '卢本伟牛逼',
      text: '随风而来、悬挂在气球上的礼物，是你为我准备的吗？\n' +
        '谢谢你陪我聊天，和我一起庆祝生日。\n' +
        '只是非常抱歉，难得的休息日，还要请你帮忙…\n' +
        '那么，我们继续前进，寻找可莉吧。',
      color: 'green',
      icon: 'mdi-book-variant'
    }
  ]
}
</script>

<style lang="less">

</style>