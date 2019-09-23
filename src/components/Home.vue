<template>
  <div class="container-fluid no-gutter box-home">
    <div class="wrapper-home">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 thumb" v-for="categoria in categorias" ref="thumb">
          <router-link :to="`/catalogo/${categoria.id}`">
            <div class="box-thumb-home">
              <div class="thumb-img">

                <!-- version web -->
                <img class="web" :src="'img/' + categoria.thumb" />

                <!-- version movil -->
                <img class="movil" :src="'img/' + categoria.thumb_m" />

                <div class="over-thumb">
                  <div class="plus"><img src="img/plus.png" /></div>
                </div>
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


</template>

<script>
  import axios from 'axios'
  import { TweenMax } from 'gsap';
  import { fxPgIn, fxPgOut } from '../helpers/Devfun';
  export default {
      name: "Home",
      data() {
          return {
            categorias:[
              {"id":1,"deleted_at":null,"created_at":"2019-06-25 16:47:02","updated_at":"2019-06-25 16:47:02","nombre":"PASAJERO","thumb":"pasajeros.png","thumb_m":"pasajeros_m.png"},
              {"id":2,"deleted_at":null,"created_at":"2019-06-25 16:47:17","updated_at":"2019-06-25 16:47:17","nombre":"SUV 4WD","thumb":"suv.png","thumb_m":"suv_m.png"},
              {"id":3,"deleted_at":null,"created_at":"2019-06-25 16:47:29","updated_at":"2019-06-25 16:47:29","nombre":"CAMI\u00d3N Y BUS","thumb":"camion.png","thumb_m":"camion_m.png"},
              {"id":4,"deleted_at":null,"created_at":"2019-06-25 16:47:41","updated_at":"2019-06-25 16:47:41","nombre":"CARGA LIGERA","thumb":"camion-ligero.png","thumb_m":"camion-ligero_m.png"}
            ]
          }
      },
      methods: {
        enterAnim(done){
          // entra
          fxPgIn(this.$el, this.$refs.thumb, done);
        },
        leaveAnim(done){
          // sale
          fxPgOut(this.$el, this.$refs.thumb, done);
        }
      },
      computed: {

      },
      mounted: function(){
        console.log('mounted');
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
