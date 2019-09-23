<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-gutter-m">
    <div class="box-menu-categorias">
      <ul>
        <li v-for="categoria in categorias">
          <router-link :to="`/catalogo/${categoria.id}`">
            <p>
              {{categoria.nombre}}
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Categorias",
    data() {
        return {
          categorias:[
            {"id":1,"deleted_at":null,"created_at":"2019-06-25 16:47:02","updated_at":"2019-06-25 16:47:02","nombre":"SUV 4WD"},
            {"id":2,"deleted_at":null,"created_at":"2019-06-25 16:47:17","updated_at":"2019-06-25 16:47:17","nombre":"PASAJERO"},
            {"id":3,"deleted_at":null,"created_at":"2019-06-25 16:47:29","updated_at":"2019-06-25 16:47:29","nombre":"CAMI\u00d3N Y BUS"},
            {"id":4,"deleted_at":null,"created_at":"2019-06-25 16:47:41","updated_at":"2019-06-25 16:47:41","nombre":"CARGA LIGERA"}
          ]
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
