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


        <div class="thumb-info col-sm-3 col-sm-3" ref="thumb1">
          <router-link :to="`/informacion/${informaciones[0].id}`">
            <div class="bg_thumb thumb-xl web" v-bind:style="{ 'background-image': 'url(' + informaciones[0].imagen + ')' }">
              <div class="over-thumb">
                <div class="plus"><img src="./../assets/plus.png" /></div>
              </div>
            </div>
            <div class="bg_thumb thumb-xl movil" v-bind:style="{ 'background-image': 'url(' + informaciones[0].imagen_m + ')' }">
              <div class="over-thumb">
                <div class="plus"><img src="./../assets/plus.png" /></div>
              </div>
            </div>
          </router-link>
          <div class="titulo-info">
            <h4>{{informaciones[0].titulo}}</h4>
          </div>
        </div>

        <div class="thumb-info col-sm-6 col-sm-6">
          <div class="row">
            <div class="col no-gutter" ref="thumb2">
              <router-link :to="`/informacion/${informaciones[1].id}`">
                <div class="bg_thumb thumb-xs" v-bind:style="{ 'background-image': 'url(' + informaciones[1].imagen + ')' }">
                  <div class="over-thumb">
                    <div class="plus"><img src="./../assets/plus.png" /></div>
                  </div>
                </div>
              </router-link>
              <div class="titulo-info">
                <h4>{{informaciones[1].titulo}}</h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col thumb-info no-gutter box-center-thumb" ref="thumb3">
              <router-link :to="`/informacion/${informaciones[2].id}`">
                <div class="bg_thumb thumb-xs" v-bind:style="{ 'background-image': 'url(' + informaciones[2].imagen + ')' }">
                  <div class="over-thumb">
                    <div class="plus"><img src="./../assets/plus.png" /></div>
                  </div>
                </div>
              </router-link>
              <div class="titulo-info">
                <h4>{{informaciones[2].titulo}}</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="thumb-info col-sm-3 col-sm-3" ref="thumb4">
          <router-link :to="`/informacion/${informaciones[3].id}`">
            <div class="bg_thumb thumb-xl" v-bind:style="{ 'background-image': 'url(' + informaciones[3].imagen + ')' }">
              <div class="over-thumb">
                <div class="plus"><img src="./../assets/plus.png" /></div>
              </div>
            </div>
          </router-link>
          <div class="titulo-info">
            <h4>{{informaciones[3].titulo}}</h4>
          </div>

        </div>




    </div>
  </div>


</template>

<script>
  import { TweenMax } from 'gsap';
  import { fxPgIn, fxPgOut } from '../helpers/Devfun';

export default {
    name: "Informacion",

    data() {
        return {

        }
    },
    methods: {
      getData () {
        this.informaciones= [
          {
            "id":1,
            "titulo":"PRESI\u00d3N CORRECTA DE LOS NEUM\u00c1TICOS",
            "imagen":"./src/assets/informacion-1.png",
            "imagen_m":"./src/assets/informacion-1_m.png"
          },
          {
            "id":2,
            "titulo":"ROTACI\u00d3N DE LOS NEUM\u00c1TICOS",
            "imagen":"./src/assets/informacion-2.png",
            "imagen_m":"./src/assets/informacion-2_m.png"
          },
          {
            "id":3,
            "titulo":"LEER LAS BANDAS DE RODADURA DE LOS NEUM\u00c1TICOS",
            "imagen":"./src/assets/informacion-3.png",
            "imagen_m":"./src/assets/informacion-3_m.png"
          },
          {
            "id":4,
            "titulo":"CU\u00c1NDO DEBO CAMBIAR LOS NEUM\u00c1TICOS",
            "imagen":"./src/assets/informacion-4.png",
            "imagen_m":"./src/assets/informacion-4_m.png"
          }
        ];
        this.loading = false;
        console.log(this.informaciones);
      },
      enterAnim(done){
        // entra
        const ArrChild = [ this.$refs.thumb1, this.$refs.thumb2, this.$refs.thumb3, this.$refs.thumb4 ];
        fxPgIn(this.$el, ArrChild, done);
      },
      leaveAnim(done){
        // sale
        fxPgOut(this.$el, this.$refs.thumb, done);
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
