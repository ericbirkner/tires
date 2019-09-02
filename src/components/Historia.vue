<template>
<transition name="slide-fade">
<div class="container">
<div class="row" v-for="historia in historias">

  <div class="col-6" >
    <img :src="historia.imagen" class="img-fluid"/>
  </div>
  <div class="col-6">
    <h3>{{historia.ano}}</h3>
    <h6>{{historia.titulo}}</h6>
    <p v-html="historia.descripcion"></p>
  </div>

</div>
</div>
</transition>

</template>

<script>
import axios from 'axios'

export default {
    name: "Historia",
    data() {
        return {
          historias:[
            {"id":2,"titulo":"otro a\u00f1o mas antiguo","ano":"1865","descripcion":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><\/p>","imagen":"http:\/\/localhost\/sumitomo-tires\/files\/2ysjavc0mnh1tllwav4i\/SUMITOMO2.jpg"},
            {"id":1,"titulo":"a\u00f1o de ejemplo","ano":"1909","descripcion":"<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><\/p>","imagen":"http:\/\/localhost\/sumitomo-tires\/files\/2ysjavc0mnh1tllwav4i\/SUMITOMO2.jpg"}
          ]
        }
    },
    methods: {

    },
    computed: {

    },

    created: function() {
      console.log(this.historias);
    }
}
</script>

<style>
/*estilos*/

</style>
