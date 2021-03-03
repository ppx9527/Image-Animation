<template>
  <v-main>
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-main>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

// 此组件用来显示子路由的界面
@Component
export default class BaseView extends Vue{

}
</script>