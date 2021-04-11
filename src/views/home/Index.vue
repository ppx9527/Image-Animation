<script lang="ts">
// Home界面
import {Component} from "vue-property-decorator"
import BaseRouterView from "@/views/View.vue";
import {NeedToLoad, load} from "@/utils/load-section"

const about: NeedToLoad = {
  page: 'home',
  nav: [],
  sections: [
    'hero',
    'effect',
    'about-use',
    'social-media'
  ]
}

const [component, sections] = load(about)

@Component({
  components: component
})
export default class Home extends BaseRouterView {
  sections = sections;
  id = 'home';
}
</script>