<template>
  <section :id="id">
    <v-row>
      <v-col cols="12">
        <component
          :is="`section-${section}`"
          v-for="section in sections"
          :key="section"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

// 此组件是所有路由子界面的父组件，负责加载所有章节
@Component
export default class BaseRouterView extends Vue{
  protected id!: string;
  protected sections!: Array<string>;
}
</script>
