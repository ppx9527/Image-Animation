<template>
  <v-sheet id="about-use">
    <div class="text-center">
      <v-avatar class="mb-4" size="62" color="primary">
        <v-icon size="48">
          mdi-apple
        </v-icon>
      </v-avatar>

      <base-heading title="耗子尾汁" size="text-h4" weight="medium" :space="4"/>

      <v-responsive
        class="ma-auto mb-12 primary" style="width: 46px"
      >
        <v-divider></v-divider>
      </v-responsive>

    </div>

    <v-container>
      <v-row>
        <v-col md="4" v-for="(card, index) in cards" :key="index">
          <v-container class="pa-0">
            <v-row no-gutters justify="start">


              <v-col cols="9">
                <div class="text-body-2 font-weight-regular mb-1 text-left grey--text">{{ card.subheading }}</div>
                <base-heading :title="card.title" size="text-h6" :space="1"></base-heading>

                <v-responsive
                  class="mr-auto mb-6 primary" style="width: 28px"
                >
                  <v-divider></v-divider>
                </v-responsive>

                <p class="text-body-1 grey--text text--darken-1 text-left mb-6">{{ card.body }}</p>
              </v-col>

              <v-col cols="2">
                <div class="text-h2 font-weight-bold pr-8" style="color: rgba(246,245,245,.6)">{{ card.id }}</div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component()
export default class AboutUse extends Vue {
  private cards = [
    {
      id: '01',
      title: '第一把',
      subheading: '卢本伟牛逼',
      body: '《原神》角色演示-「胡桃：生人勿近」 现已发布。往生堂重要的仪式，人人都该敬而远之。' +
        '既然你们不「识趣」，那就给你们一点「有趣」的惩罚吧！'
    },{
      id: '02',
      title: '的大大的',
      subheading: '69岁的老同志',
      body: '《原神》角色演示-「胡桃：生人勿近」 现已发布。往生堂重要的仪式，人人都该敬而远之。' +
        '既然你们不「识趣」，那就给你们一点「有趣」的惩罚吧！'
    },{
      id: '03',
      title: '得得得得',
      subheading: '鸡你太美',
      body: '《原神》角色演示-「胡桃：生人勿近」 现已发布。往生堂重要的仪式，人人都该敬而远之。' +
        '既然你们不「识趣」，那就给你们一点「有趣」的惩罚吧！'
    }
  ]
}
</script>

<style lang="less">
  #about-use{
    padding: 46px 0;

    .v-divider{
      border-width: 3px 0 0 0 !important;
      border-color: rgba(56, 140, 208, .8);
    }
  }
</style>