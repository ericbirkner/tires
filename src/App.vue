<template>
  <div id="app" class="container">
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from "./components/Menu";
export default {
    name: 'app',
    components: {Menu},
    data () {
      return {
        todos:[]
      }
    }
}
</script>
