<template>
<transition name="slide-fade">
  <div class="container-fluid no-gutter box-home">
    <div class="wrapper-home">
      <div class="row">
        <div class="col thumb" v-for="categoria in categorias">
          <router-link :to="`/catalogo/${categoria.id}`">
            <div class="box-thumb-home">
              <div class="thumb-img">
                <img :src="'./src/assets/'+categoria.thumb" />
              </div>
              <div class="nombre-categoria">
                <p>
                  {{categoria.nombre}}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    
  </div>

</transition>

</template>

<script>
  import axios from 'axios'
  export default {
      name: "Home",
      data() {
          return {
            categorias:[
              {"id":1,"deleted_at":null,"created_at":"2019-06-25 16:47:02","updated_at":"2019-06-25 16:47:02","nombre":"SUV 4WD","thumb":"pasajeros.png"},
              {"id":2,"deleted_at":null,"created_at":"2019-06-25 16:47:17","updated_at":"2019-06-25 16:47:17","nombre":"PASAJERO","thumb":"suv.png"},
              {"id":3,"deleted_at":null,"created_at":"2019-06-25 16:47:29","updated_at":"2019-06-25 16:47:29","nombre":"CAMI\u00d3N Y BUS","thumb":"camion.png"},
              {"id":4,"deleted_at":null,"created_at":"2019-06-25 16:47:41","updated_at":"2019-06-25 16:47:41","nombre":"CARGA LIGERA","thumb":"camion-ligero.png"}
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

<style lang="scss">
  @import "./styles/style.scss";
  @import "./styles/home.scss";
</style>
