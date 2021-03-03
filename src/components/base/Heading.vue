<template>
  <component
    :is="tag"
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
    >
    <template v-if="title">
      {{ title }}
    </template>

    <slot v-else />
  </component>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"

// 标题组件
@Component
export default class BaseHeading extends Vue{
  @Prop(String) title!: string;
  @Prop({default: 'text-h3', type: String}) size!: string;
  @Prop({default: 'h1', type: String}) tag!: string;
  @Prop({default: 'black', type: String}) weight!: string;
  @Prop({default: 4, type: Number}) space!: number;


  get classes(){
    return [
      this.size,
      `font-weight-${this.weight}`,
      `mb-${this.space}`
    ]
  }
}
</script>