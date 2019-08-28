<template>
<transition name="slide-fade">
<div class="container">
<Menu></Menu>
<div class="row mx-md-n5">

  <div class="col-sm" v-for="categoria in categorias">
        <router-link :to="`/catalogo/${categoria.id}`"> {{categoria.nombre}} </router-link>
  </div>
</div>
</div>
</transition>

</template>

<script>
import axios from 'axios'
import Menu from "./Menu";

export default {
    name: "Home",
    components: {Menu},
    data() {
        return {
          categorias:[{"id":1,"deleted_at":null,"created_at":"2019-06-25 16:47:02","updated_at":"2019-06-25 16:47:02","nombre":"SUV 4WD"},{"id":2,"deleted_at":null,"created_at":"2019-06-25 16:47:17","updated_at":"2019-06-25 16:47:17","nombre":"PASAJERO"},{"id":3,"deleted_at":null,"created_at":"2019-06-25 16:47:29","updated_at":"2019-06-25 16:47:29","nombre":"CAMI\u00d3N Y BUS"},{"id":4,"deleted_at":null,"created_at":"2019-06-25 16:47:41","updated_at":"2019-06-25 16:47:41","nombre":"CARGA LIGERA"}]
        }
    },
    methods: {

    },
    computed: {

    },

    created: function() {
      console.log(this.categorias);
    }
}
</script>

<style>
/*estilos*/

</style>
