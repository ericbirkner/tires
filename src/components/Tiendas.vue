<template>

  <div class="container">
    <div class="head-tiendas">
      <h2>
        Encuentra tu tienda
      </h2>
    </div>
    <SelectPais v-on:listenerChild="listenerChild"></SelectPais>
    <div v-if="loading" class="row text-center">
      <div class="col">
      <div class="spinner-border" role="status">
        <span class="sr-only">Cargando...</span>
      </div>
    </div>
    </div>
    <div class="row pt-5" v-else>
      <div class="col-xs-6 col-sm-4 col-lg-3 col-xl-3" v-for="tienda in displayedTiendas">
        <div class="box-tiendas">
          <div class="thumb">
            <div class="img">
              <img src="img/tienda.png" />
            </div>
          </div>
          <div class="titulo">
            <h5>{{tienda.nombre}}</h5>
          </div>
          <div class="descripcion">
            <p>
              {{tienda.direccion}}
            </p>
            <p>
              {{tienda.telefono}}
            </p>
          </div>
          <div class="contacto">
            <a :href="`mailto:${tienda.email}`">
              <p>
                {{tienda.email}}
              </p>
            </a>
            <p>
              <a :href="tienda.web" target="_blank">
                {{tienda.web}}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import SelectPais from "./SelectPais";
import { TweenMax } from 'gsap';
import { fxPgInSingle, fxPgOut } from '../helpers/Devfun';
export default {
    name: "Tiendas",
    components: {SelectPais},
    data() {
        return {
          tiendas:[],
          loading:false,
          enable_ciudad:true,
          idPais:0,
          idCiudad:0
        }
    },
    methods: {
      getTiendas () {

          axios.get(URL+'tiendas')
          .then(response => {
              this.tiendas = response.data;
              this.loading = false;
          })
          .catch(response => {
              console.log(response);
          });


          this.loading = false;
          //console.log(tiendas);
      },
      listenerChild(reply) {
        this.idCiudad = reply;
      },
      enterAnim(done){
        // entra
        fxPgInSingle(this.$el, done);
      },
      leaveAnim(done){
        // sale
        fxPgOut(this.$el, this.$refs.thumb, done);
      }
    },
    computed: {
      displayedTiendas() {
          if(this.idCiudad>0){
          let filtered = this.tiendas;
            filtered = filtered.filter(el => {
              return el.ciudades_id==this.idCiudad;
            })
          return filtered;
          }
      }
    },
    created: function() {
      this.getTiendas();
      //this.loading= false;
    }
}
</script>

<style lang="scss">
  @import "./styles/style.scss";

</style>
