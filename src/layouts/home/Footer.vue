<template>
  <v-footer
    id="home-footer"
    color="black"
    dark
    min-height="84"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="(value, name, index) in social">
              <a
                :key="name"
                class="white--text pa-1 pa-md-0"
                :href="value"
                v-text="name"
              />

              <v-responsive
                v-if="index < Object.keys(social).length - 1"
                :key="`divider-${name}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          Copyright &copy; 2021 Vuetify, LLC
        </v-col>
      </v-row>
    </v-container>

  </v-footer>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class HomeFooter extends Vue{
  private social = {
    "GitHub": "https://github.com/ppx9527/",
    "FaceBook": "https://facebook.com",
    "Twitter": "https://twitter.com",
    "Instagram": "https://instagram.com"
  }
}
</script>

<style lang="less">
  #home-footer{
    a{
      text-decoration: none;
    }
  }
</style>