<script lang="ts">
import {Component} from "vue-property-decorator"
import BaseRouterView from "@/views/View.vue";
import {NeedToLoad, load} from "@/utils/load-section"

const info: NeedToLoad = {
  page: 'animation',
  nav: ['bread-nav'],
  sections: ['animation']
}

const [component, sections] = load(info)

@Component({
  components: component
})
export default class Home extends BaseRouterView {
  sections = sections;
  id = 'animation';
}
</script>