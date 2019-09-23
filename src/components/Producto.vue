<template>

    <div class="container-fluid">
      <div class="btn-volver">
        <router-link :to="`/catalogo`">
          <span> < </span> VOLVER
        </router-link>
      </div>
      <!-- <div v-if="loading" class="row text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div> -->
       <div class="row mt-5" ref="thumb">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div class="row">
            <div class="col">
              <div class="thumb-producto">
                <img :src="'./src/assets/'+producto.imagen" class="img-fluid">
              </div>
            </div>
            <div class="col movil">
              <div class="datos-productos-interior">
                <h1>{{producto.nombre}}</h1>
              </div>
            </div>
          </div>

        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <div class="datos-productos-interior">
            <h1 class="web">{{producto.nombre}}</h1>
            <h2>{{producto.subTitulo}}</h2>
            <p v-html="producto.descripcion"></p>
            <div class="btn-pdf">
              <a href="javascript:void(0);">
                VER PDF
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import axios from 'axios'
import { TweenMax } from 'gsap';
import { fxPgInSingle, fxPgOut } from '../helpers/Devfun';

export default {
    name: "Producto",
    data() {
        return {
          loading:true,
          producto: [],
          idProducto: this.$route.params.id
        }
    },
    methods: {
      enterAnim(done){
        // entra
        fxPgInSingle(this.$el, done);
      },
      leaveAnim(done){
        // sale
        fxPgOut(this.$el, this.$refs.thumb, done);
      }
    },
    created: function() {
      /*
      var not_id = this.$route.params.id
      axios
        .get("http://jsonplaceholder.typicode.com/posts/"+not_id)
        .then(res => {
          this.producto = res.data;
          this.loading = false;
        })
      */
      this.producto = {
        "id":13,
        "nombre":"3. AS P01",
        "subTitulo":"LorenIpsus",
        "descripcion":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><\/p>",
        "pdf":0,
        "imagen":"neumatico.png"
      };
      this.loading=false;
    }
}
</script>
