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
        <li>
          <router-link :to="`/catalogo`">
            <p>
              TODAS
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
          categorias:[]
        }
    },
    methods: {

    },
    computed: {

    },

    created: function() {
      axios.get(URL+'categoria-productos')
      .then(response => {
          this.categorias = response.data;
      })
      .catch(response => {
          console.log(response);
      });
    }
}
</script>

<style>
/*estilos*/

</style>
