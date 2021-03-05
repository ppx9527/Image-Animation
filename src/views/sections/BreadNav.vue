<template>
  <v-img
    :src="require(`@/assets/${imgSrc}`)"
    gradient="to top, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    height="350"
  >
    <v-row id="nav" class="ma-0 fill-height text-center white--text" justify="center" align="center">
      <v-col cols="12">
        <base-heading :title="this.$route.name.toUpperCase()" size="text-h3" weight="500" :space="2" />

        <v-responsive
          class="ma-auto mb-6" style="width: 46px"
        >
          <v-divider></v-divider>
        </v-responsive>

        <v-breadcrumbs :items="items" class="justify-center theme--dark pa-0">
          <template v-slot:divider>
            <v-icon class="theme--dark">mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
  </v-img>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component()
export default class BreadNav extends Vue{
  private imgSrc= `${this.$route.path.replace('/', '')}.jpg`;

  private items = [
    {
      text: 'HOME',
      to:''
    },{
      text: this.$route.name?.toUpperCase(),
      to: this.$route.path
    }
  ]
}
</script>

<style lang="less">
  #nav{
    .v-divider{
      border-width: 3px 0 0 0 !important;
      border-color: rgb(56, 140, 208);
    }
  }

</style>