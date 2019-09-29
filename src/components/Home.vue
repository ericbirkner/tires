<template>
  <div class="container-fluid no-gutter box-home">
    <div class="wrapper-home">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 thumb" v-for="categoria in categorias" :key="categoria.id" ref="thumb">
          <router-link :to="`/catalogo/${categoria.id}`">
            <div class="box-thumb-home">
              <div class="thumb-img">

                <!-- version web -->
                <img class="web" :src="categoria.imagen" />

                <!-- version movil -->
                <img class="movil" :src="categoria.imagen_m" />

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
            categorias:[]
          }
      },
      methods: {
        enterAnim(done){
          // entra
          fxPgIn(this.$el, this.$refs.thumb, done);
          console.log('this.$el', this.$el);
        },
        leaveAnim(done){
          // sale
          fxPgOut(this.$el, this.$refs.thumb, done);
        }
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
      },
      mounted: function(){}
  }
</script>

<style lang="scss">
  @import "./styles/style.scss";
  @import "./styles/home.scss";
</style>
