<template>
<!-- <transition name="slide-fade"></transition> -->

  <div class="container-fluid">
    <div class="row">
      <!-- <div v-if="loading" class="row text-center">
        <div class="col">
          <div class="spinner-border" role="status">
            <span class="sr-only">Cargando...</span>
          </div>
        </div>
      </div> -->

        <div class="col">
          <div class="row">
            <div class="col">
              <div class="interior">
                <div class="wrapper">
                  <div class="icono" ref="box1">
                    <img src="img/icono-rueda.png" class="img-fluid">
                  </div>
                  <div class="titulo" ref="box2">
                    <h4>
                      {{informacion.titulo}}
                    </h4>
                  </div>
                  <div class="linea-dash" ref="box3"></div>
                  <div class="body-copy" ref="box4" v-html="informacion.detalle">

                    <div class="linea-dash"></div>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" ref="box5">
              <div class="thumb-neumatico">
                <img :src="informacion.imagen" class="img-fluid">
              </div>
            </div>
            <div class="col">
              <div class="box-datos-interior" ref="box6">
                <div class="wrapper">
                  <div v-html="informacion.cuerpo"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

    </div>
  </div>

</template>

<script>
  import { TweenMax } from 'gsap';
  import { fxPgIn, fxPgOut } from '../helpers/Devfun';
  import axios from 'axios';
export default {
    name: "Informacion_detalle",

    data() {
        return {
          informacion: []
        }
    },
    methods: {
      getData () {
        var info_id = this.$route.params.id
        axios
          .get(URL+"informacion/"+info_id)
          .then(res => {
            this.informacion = res.data;
            this.loading = false;
          })
        },
      enterAnim(done){
        // entra
        const ArrChild = [ this.$refs.box1, this.$refs.box2, this.$refs.box3, this.$refs.box4, this.$refs.box5, this.$refs.box6 ];
        fxPgIn(this.$el, ArrChild, done);
      },
      leaveAnim(done){
        // sale
        const ArrChild = [ this.$refs.box1, this.$refs.box2, this.$refs.box3, this.$refs.box4, this.$refs.box5, this.$refs.box6 ];
        fxPgOut(this.$el, ArrChild, done);
      }
    },
    computed: {

    },

    created: function() {
        this.getData();
    }
}
</script>

<style lang="scss">
  @import "./styles/style.scss";
  @import "./styles/informacion.scss";
</style>
