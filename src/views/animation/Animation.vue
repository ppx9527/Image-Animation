<template>
  <div class="d-flex flex-column align-center mt-16 mb-10">
    <base-heading title="请按照步骤依次执行" tag="h5" size="text-h5" weight="medium" :space="6" style="color: #42a5f6"/>

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
          <v-fade-transition mode="out-in">
            <v-row
              v-if="videoUrl"
              width="300"
            >
              <v-col cols="12">
                <video :src="videoUrl" autoplay loop></video>

                <v-subheader class="pl-0">
                  下载链接
                </v-subheader>
                <a :href="videoUrl" download="result.mp4" class="text-decoration-none">请点击下载</a>
              </v-col>
            </v-row>

            <v-card
              color="grey lighten-1"
              height="300"
              width="300"
              v-else
            ></v-card>
          </v-fade-transition>

          <v-row class="mt-4">
            <v-col cols="12">
              <v-btn
                color="primary"
                :disabled="disabledGet"
                @click="getResult"
              >
                生成视频
              </v-btn>

              <v-btn
                text
                @click="() => {
                  $store.commit('goToNextStep');
                  videoUrl = ''
                  disabledGet = false;
                }"
                :disabled="!disabledGet"
              >
                重新开始
              </v-btn>
            </v-col>
          </v-row>
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
  videoUrl = '';
  disabledGet = false;

  getResult(){
    this.disabledGet = true;
    this.$store.commit('changeLoadingState');

    this.axios.get('getResult', {
      responseType: 'blob',
      headers: {
        'Cache-Control': 'no-cache'
      },
      params: {
        token: this.$store.state.token.cookieValue
      },
      timeout: 600000
    }).then(response => {
      const data = response.data;
      this.$store.commit('changeLoadingState');

      if (data instanceof Blob) {
        this.videoUrl = URL.createObjectURL(data)
        this.$store.commit('changeSnackbarState', {
          states: true,
          promptText: '生成成功，请点击视频下面的链接下载',
          color: 'light-green'
        });
      } else {
        this.$store.commit('changeSnackbarState', {
          states: true,
          promptText: `生成失败，${data}，请重新开始`,
          color: 'orange accent-4'
        });
      }
    }).catch(error => {
      this.disabledGet = false;
      this.$store.commit('changeLoadingState');
      this.$store.commit('changeSnackbarState', {
        states: true,
        promptText: `请求失败，${error}`,
        color: 'red accent-4'
      })
    })
  }
}
</script>