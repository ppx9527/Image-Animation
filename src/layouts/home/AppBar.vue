<template>
  <v-app-bar
    id="home-app-bar"
    app
    elevation="1"
    elevate-on-scroll
    height="80"
  >
    <v-img
      :src="require('@/assets/logo.svg')"
      class="mr-3 hidden-xs-only"
      contain
      max-width="46"
      width="100%"
    />

    <v-img
      :src="require('@/assets/zero-logo-light.svg')"
      contain
      max-width="96"
      width="100%"
    />

    <v-spacer />

    <div>
      <v-tabs
        class="hidden-sm-and-down"
        optional
        background-color="transparent"
        color=""
      >
        <v-tab
          v-for="(name, index) in items"
          :key="index"
          :to="{ name }"
          :exact="name === 'Home'"
          :ripple="false"
          class="font-weight-bold"
          min-width="96"
        >
          {{ name }}
        </v-tab>
      </v-tabs>
    </div>

    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    />
  </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class HomeAppBar extends Vue{
  private drawer = null;
  private items = [
    'Home',
    'Pro'
  ];
}
</script>

<style lang="less">
  #home-app-bar{
    .v-tabs-slider{
      max-width: 24px;
      margin: 0 auto;
    }

    .v-tab{
      &::before{
        display: none;
      }
    }
  }
</style>