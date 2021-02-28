<template>
  <v-main>
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-main>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class BaseView extends Vue{

}
</script>

<style scoped>

</style>