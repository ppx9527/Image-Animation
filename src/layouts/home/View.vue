<template>
  <v-main v-scroll="throttle(hiddenButton, 300)">
    <v-fade-transition mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
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
        @click="scrollTop"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-overlay :value="$store.state.loading">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

  </v-main>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {GoToOptions} from "vuetify/types/services/goto";

// 此组件用来显示子路由的界面
@Component
export default class BaseView extends Vue{
  private hidden = false;

  // 节流函数
  // - func [Function] 需要防抖的函数
  // - delay [number] 毫秒，防抖期限值
  // - return [Function] 事件绑定函数
  private throttle(func: Function, delay: number): Function {
    let valid = false;

    return (...args: any) => {
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

  private scrollTop() {
    const options: GoToOptions = {
      duration: 800,
      offset: 0,
      easing: 'easeInQuart'
    }

    this.$vuetify.goTo(0, options);
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