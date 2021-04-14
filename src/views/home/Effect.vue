<template>
  <v-sheet id="effect">
    <div class="text-center">
      <v-avatar class="mb-4" size="62" color="primary">
        <v-icon size="48" color="white">
          mdi-electron-framework
        </v-icon>
      </v-avatar>

      <base-heading title="演示效果" size="text-h4" weight="medium" :space="4"/>

      <v-responsive
        class="ma-auto mb-4 primary" style="width: 46px"
      >
        <v-divider></v-divider>
      </v-responsive>
      <p>
        使用了PyTorch作为机器学习库，神经网络模型基于
        <a
          href="https://github.com/AliaksandrSiarohin/first-order-model"
          target="_blank"
          class="text-decoration-none"
        >First Order Motion Model</a>
      </p>
    </div>

    <v-container>
      <v-row>
        <v-col cols="4" v-for="(card, i) in cards" :key="i">
          <v-row>
            <v-col cols="10">
              <v-card>
                <v-img
                  class="white--text align-end"
                  :src="require(`@/assets/${card.src}`)"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>

                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>
              </v-card>
            </v-col>

            <v-col class="d-flex align-center" cols="2">
              <v-icon v-if="card.icon" size="48">{{ `mdi-${card.icon}` }}</v-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Effect extends Vue {
  private cards = [
    {
      title: '静态图片',
      src: 'got.png',
      icon: 'plus'
    },{
      title: '驱动视频',
      src: 'trump.gif',
      icon: 'arrow-right'
    },{
      title: '生成视频',
      src: 'got.gif',
      icon: false
    }
  ]
}
</script>

<style lang="less">
  #effect{
    padding: 46px 0;

    .v-divider{
      border-width: 3px 0 0 0 !important;
      border-color: rgba(56, 140, 208, .8);
    }
  }
</style>