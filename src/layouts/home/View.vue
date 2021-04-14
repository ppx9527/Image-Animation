<template>
  <v-main v-scroll="throttle(hiddenButton, 300)">
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>

    <v-fab-transition>
      <v-btn
        id="toTop"
        v-show="hidden"
        x-large
        fixed
        fab
        bottom
        right
        color="primary"
        @click="$vuetify.goTo(0)"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-main>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

// 此组件用来显示子路由的界面
@Component
export default class BaseView extends Vue{
  private hidden = false;

  // 节流函数
  // - func [function] 需要防抖的函数
  // - delay [number] 毫秒，防抖期限值
  // - return [function] 事件绑定函数
  private throttle(func: any, delay: number) {
    let valid = false;

    return (...args: any[]) => {
      if(valid){
        //休息时间 暂不接客
        return;
      }

      // 工作时间，执行函数并且在间隔期内把状态位设为有效
      valid = true;

      // 设置定时器，定时器执行后把状态位置为false，并执行函数
      setTimeout(() => {
        func.apply(this, args)
        valid = false;
      }, delay)
    }

  }

  private hiddenButton() {
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    this.hidden = scrollTop > 100;
  }
}
</script>

<style lang="less">
  html, body{
    scroll-behavior: smooth;
  }

  #toTop.v-btn::before{
    background-color: unset !important;
  }
</style>