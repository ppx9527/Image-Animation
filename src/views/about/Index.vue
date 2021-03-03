<script lang="ts">
import {Component} from "vue-property-decorator"
import BaseRouterView from "@/views/View.vue";
import loadSection from "@/utils/load-section"

const sections: Array<string> = [

]

@Component({
  components: loadSection(sections)
})
export default class Home extends BaseRouterView{
  sections = sections;
}
</script>