<template>
  <v-sheet color="grey p-4">
    <div class="text-center">
      <v-avatar class="mb-4" size="62" color="primary">
        <v-icon size="48" color="white">
          mdi-console
        </v-icon>
      </v-avatar>

      <base-heading title="演示效果" size="text-h4" weight="medium" :space="4"/>

      <v-responsive
        class="ma-auto mb-12 primary" style="width: 46px"
      >
        <v-divider></v-divider>
      </v-responsive>
      <p>
        使用了PyTorch作为机器学习库，神经网络模型基于 First Order Motion Model
      </p>
    </div>

    <v-container>
      <v-row>
        <v-col cols="4">
          <v-img>

          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Effect extends Vue {

}
</script>
