<template>
  <v-app>
    <home-app-bar />

    <home-view />

    <home-footer />
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({
  components:{
    HomeAppBar: () => import('@/layouts/home/AppBar.vue'),
    HomeFooter: () => import('@/layouts/home/Footer.vue'),
    HomeView: () => import('@/layouts/home/View.vue')
  }
})
export default class HomeLayout extends Vue{

}
</script>
