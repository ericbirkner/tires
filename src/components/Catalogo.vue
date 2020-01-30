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
                <h2 class="capitalize" :title="Producto.nombre" :data-cat="Producto.categoria_id">{{Producto.nombre}}</h2>
              </div>
              <div class="thumb">
                <img :src="Producto.imagen" width="100">
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

            axios.get(URL+'productos')
            .then(response => {
                this.productos = response.data;
                this.loading = false;
            })
            .catch(response => {
                console.log(response);
            });
          
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
