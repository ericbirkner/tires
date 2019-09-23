<template>
  <div id="app">
    <Menu></Menu>
      <transition  v-on:enter="enter" v-on:leave="leave">
        <router-view ref="routerViewRef"/>
      </transition>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import { TweenMax } from "gsap";

export default {
    name: 'app',
    components: {Menu},
    data () {
      return {
        todos:[]
      }
    },
    methods: {
      enter: function (el, done) {
        this.$refs.routerViewRef.enterAnim(done);
      },
      leave: function (el, done) {
        this.from.leaveAnim(done);
      }
    },
    watch:{
      // Recupere la instancia de la página que saldrá antes de que el enrutador Vue Ref se actualice
      $route (to, from){
        this.to = this.$refs.routerViewRef;
        this.from = this.$refs.routerViewRef;
        console.log('this.to', this.to);
        console.log('this.from', this.from);
      }
    }
}
</script>
