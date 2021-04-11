<script lang="ts">
import {Component} from "vue-property-decorator"
import BaseRouterView from "@/views/View.vue";
import {NeedToLoad, load} from "@/utils/load-section"

const info: NeedToLoad = {
  page: 'about',
  nav: ['bread-nav'],
  sections: ['log-time']
}

const [component, sections] = load(info)

@Component({
  components: component
})
export default class Home extends BaseRouterView {
  sections = sections;
  id = 'about';
}
</script>