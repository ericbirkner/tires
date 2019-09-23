<template>
  <!-- <transition name="slide-fade"></transition> -->
  <div class="container-fluid">
    <div class="row box-head-catalogo">
      <div class="movil"><Buscador></Buscador></div>
      <Categorias></Categorias>
      <div class="web"><Buscador></Buscador></div>
    </div>
    <!-- <div v-if="loading" class="row text-center">
      <div class="col">
        <div class="spinner-border" role="status">
          <span class="sr-only">Cargando...</span>
        </div>
      </div>
    </div> -->
    <div>
      <div class="row">
        <div class="col-xs-6 col-sm-4 col-lg-2 col-lg-2" v-for="(Producto, index) in displayedProductos" ref="thumb">
          <div class="thumb-producto">
            <router-link :to="`/producto/${Producto.id}`">
              <div class="head">
                <h2 class="capitalize" :data-cat="Producto.categoria_id">{{Producto.nombre}}</h2>
              </div>
              <div class="thumb">
                <img :src="'img/'+Producto.imagen" width="100">
              </div>
              <div class="btn-ver">
                <p>
                  ver
                </p>
              </div>
            </router-link>

          </div>

        </div>
      </div>

      <div class="row">
        <div class="paginador">
          <div class="col no-gutter">
            <div>
              <div class="prev">
                <router-link :to="`/catalogo/page/${page-1}`" v-if="page != 1"> < </router-link>
              </div>

              <span v-for="pageNumber in pages">
                <router-link :to="`/catalogo/page/${pageNumber}`" v-on:click="set_clase">
                  <div class="num">
                    {{pageNumber}}
                  </div>
                </router-link>
              </span>

              <div class="next">
                <router-link :to="`/catalogo/page/${page+1}`" v-if="page < pages.length"> > </router-link>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Buscador from "./Buscador";
import Categorias from "./Categorias";
import { TweenMax } from 'gsap';
import { fxPgIn, fxPgOut } from '../helpers/Devfun';

export default {
    name: "Catalogo",
    components: {Buscador,Categorias},
    data() {
        return {
          loading:true,
          productos: [],
          baseUrl: 'https://jsonplaceholder.typicode.com/',
          page: 1,
          perPage: 12,
          pages: [],
          busqueda:'',
          idCategoria: this.$route.params.id,
          filtered:null
        }
    },
    methods: {
        getProductos () {
            /*
            axios.get(this.baseUrl+'productos')
            .then(response => {
                this.productos = response.data;
                this.loading = false;
            })
            .catch(response => {
                console.log(response);
            });
            */
            this.productos= [
              {"id":13,"nombre":"3. AS P01","categoria_id":2,"imagen":"neumatico.png"},
              {"id":2,"nombre":"Encounter AT Angle","categoria_id":1,"imagen":"neumatico.png"},
              {"id":1,"nombre":"ENCOUNTER HT","categoria_id":1,"imagen":"neumatico.png"},
              {"id":12,"nombre":"HTR 900","categoria_id":2,"imagen":"neumatico.png"},
              {"id":3,"nombre":"HTR SP HP","categoria_id":1,"imagen":"neumatico.png"},
              {"id":15,"nombre":"HTR T4","categoria_id":2,"imagen":"neumatico.png"},
              {"id":14,"nombre":"HTR200","categoria_id":2,"imagen":"neumatico.png"},
              {"id":16,"nombre":"HTR2000","categoria_id":2,"imagen":"neumatico.png"},
              {"id":11,"nombre":"HTRZ3","categoria_id":2,"imagen":"neumatico.png"},
              {"id":7,"nombre":"SL717","categoria_id":4,"imagen":"neumatico.png"},
              {"id":8,"nombre":"SL725","categoria_id":4,"imagen":"neumatico.png"},
              {"id":9,"nombre":"SL726","categoria_id":4,"imagen":"neumatico.png"},
              {"id":10,"nombre":"SL825","categoria_id":4,"imagen":"neumatico.png"},
              {"id":4,"nombre":"SL830","categoria_id":1,"imagen":"neumatico.png"},
              {"id":5,"nombre":"SL840","categoria_id":1,"imagen":"neumatico.png"},
              {"id":6,"nombre":"SL850","categoria_id":1,"imagen":"neumatico.png"},
              {"id":25,"nombre":"ST506","categoria_id":3,"imagen":"neumatico.png"},
              {"id":24,"nombre":"ST508","categoria_id":3,"imagen":"neumatico.png"},
              {"id":23,"nombre":"ST518","categoria_id":3,"imagen":"neumatico.png"},
              {"id":27,"nombre":"ST636A","categoria_id":3,"imagen":"neumatico.png"},
              {"id":19,"nombre":"ST709 2R","categoria_id":3,"imagen":"neumatico.png"},
              {"id":17,"nombre":"ST718","categoria_id":3,"imagen":"neumatico.png"},
              {"id":26,"nombre":"ST720","categoria_id":3,"imagen":"neumatico.png"},
              {"id":20,"nombre":"ST727","categoria_id":3,"imagen":"neumatico.png"},
              {"id":18,"nombre":"ST738","categoria_id":3,"imagen":"neumatico.png"},
              {"id":21,"nombre":"ST770","categoria_id":3,"imagen":"neumatico.png"},
              {"id":29,"nombre":"ST791","categoria_id":3,"imagen":"neumatico.png"},
              {"id":28,"nombre":"ST900","categoria_id":3,"imagen":"neumatico.png"},
              {"id":22,"nombre":"ST908","categoria_id":3,"imagen":"neumatico.png"}];
            this.loading = false;
            console.log(this.productos);
        },
        setPages (total) {
            let numberOfPages = Math.ceil(total / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate (productos) {
            let page = this.page;
            if(this.$route.params.page>0){
              //console.log(this.$route.params.page)
              page = this.$route.params.page;
            }
            this.page = parseInt(page);
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return  productos.slice(from, to);
        },
        set_clase(event){
          console.log(event.target);
        },
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
        displayedProductos () {
            let filtered = this.productos;
            if(this.busqueda.length>1){
              console.log(this.busqueda);
              filtered = filtered.filter(el => {
                return el.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
              })
            }
            if(this.idCategoria>0){
              console.log('this.idCategoria:'+this.idCategoria);
              filtered = filtered.filter(el => {
                return el.categoria_id==this.idCategoria;
              })
            }
            this.setPages(filtered.length);
            return this.paginate(filtered)
        }
    },

    watch: {
      '$route.params.id': function (id) {
        console.log(id)
        this.idCategoria = id;
      }
    },

    created: function() {
      this.getProductos();
    }
}
</script>

<style lang="scss">
  @import "./styles/style.scss";
  @import "./styles/catalogo.scss";
</style>
