<template>
  <div class="d-flex flex-column align-center mt-16 mb-10">
    <div>
      <p>
        《原神》角色演示-「胡桃：生人勿近」 现已发布。往生堂重要的仪式，人人都该敬而远之。
        既然你们不「识趣」，那就给你们一点「有趣」的惩罚吧！
      </p>
    </div>

    <v-stepper
      v-model="$store.state.stepperState"
      :style="{ width:this.$vuetify.breakpoint.smAndDown ? '100%' : '65%' }"
    >
      <v-stepper-header>
        <v-stepper-step
          step="1"
          :complete="$store.state.stepperState > 1"
        >
          上传图片
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="2"
          :complete="$store.state.stepperState > 2"
        >
          上传视频
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="3"
        >
          生成视频
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <up-load />
        </v-stepper-content>

        <v-stepper-content step="2">
          <up-load type="video" />
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="status = 1"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <v-snackbar
      top
      v-model="$store.state.snackbar.states"
      timeout="2000"
      light
      outlined
      :color="$store.state.snackbar.color"
    >
      {{ $store.state.snackbar.promptText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="$store.state.snackbar.color"
          text
          v-bind="attrs"
          @click="$store.commit('changeSnackbarState', {
            states: false,
            promptText: '',
            color: ''
          })"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({
  components: {
    upLoad: () => import('@/components/upLoad.vue')
  }
})
export default class Animation extends Vue {

}
</script>

<style>

</style>