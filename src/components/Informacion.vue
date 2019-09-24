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

        <template v-if="loading">

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


      </template>

    </div>
  </div>


</template>

<script>
  import { TweenMax } from 'gsap';
  import { fxPgIn, fxPgOut } from '../helpers/Devfun';
  import axios from 'axios';
export default {
    name: "Informacion",

    data() {
        return {
          informaciones: [],
          loading:false
        }
    },
    methods: {
      getData () {
        axios.get(URL+'informacion')
        .then(response => {
            this.informaciones = response.data;
            this.loading=true;
        })
        .catch(response => {
            console.log(response);
        });

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
