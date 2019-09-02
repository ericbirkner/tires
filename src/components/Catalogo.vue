<template>
<transition name="slide-fade">
<div class="container">
  <div class="row">
    <Categorias></Categorias>
    <Buscador></Buscador>
  </div>

  <div v-if="loading" class="row text-center">
    <div class="col">
     <div class="spinner-border" role="status">
       <span class="sr-only">Cargando...</span>
     </div>
   </div>
  </div>

<div v-else>
  <div class="row">

         <div  class="col-xs-12 col-sm-4 col-lg-2 col-xl-2" v-for="(Producto, index) in displayedProductos">
              <h2 class="capitalize" :data-cat="Producto.categoria_id">{{Producto.nombre}}</h2>
              <img :src="Producto.imagen" width="100">
              <router-link :to="`/producto/${Producto.id}`">ver</router-link>
         </div>


  </div>

  <div class="row">
    <div class="clearfix btn-group col-md-2 offset-md-5 m-4">
      <router-link :to="`/catalogo/page/${page-1}`" class="btn btn-sm btn-outline-secondary" v-if="page != 1"> << </router-link>

      <span v-for="pageNumber in pages">
      <router-link :to="`/catalogo/page/${pageNumber}`" v-on:click="set_clase" class="btn btn-sm btn-outline-secondary"> {{pageNumber}} </router-link>
      </span>

      <router-link :to="`/catalogo/page/${page+1}`" class="btn btn-sm btn-outline-secondary" v-if="page < pages.length"> >> </router-link>
    </div>
  </div>
</div>

</div>
</transition>

</template>

<script>
import axios from 'axios'
import Buscador from "./Buscador";
import Categorias from "./Categorias";

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
            this.productos= [{"id":13,"nombre":"3. AS P01","categoria_id":2,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/81wsjl3qlautsijwloaz\/3. AS P01.png"},{"id":2,"nombre":"Encounter AT Angle","categoria_id":1,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/ndlnbkzk66hq2oskn44v\/2. Sumitomo-Encounter-AT-Angle.png"},{"id":1,"nombre":"ENCOUNTER HT","categoria_id":1,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/cf6pcgmnybi0oxq2uyob\/1. ENCOUNTER HT.png"},{"id":12,"nombre":"HTR 900","categoria_id":2,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/tx7rtehsyd72qz06lhwc\/2. Ficha HTR 900.png"},{"id":3,"nombre":"HTR SP HP","categoria_id":1,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/keitvebri05tmin3ybwu\/3. HTR_SP_HP.png"},{"id":15,"nombre":"HTR T4","categoria_id":2,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/jufsnjcv0bsr5fgcqpdd\/5. HTR T4.png"},{"id":14,"nombre":"HTR200","categoria_id":2,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/bsm53qxsjbgcvertxrpl\/4. HTR200.png"},{"id":16,"nombre":"HTR2000","categoria_id":2,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/ddj0c9p3vomrrf6uz2mm\/7. HTR2000.png"},{"id":11,"nombre":"HTRZ3","categoria_id":2,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/pqxmqaijzxghyxdwzirh\/1. HTRZ3.png"},{"id":7,"nombre":"SL717","categoria_id":4,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/a74n7iapbqnfktsotikd\/1. SL717.png"},{"id":8,"nombre":"SL725","categoria_id":4,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/gypyzxlmmt5i1o0vdgqf\/2. SL725.png"},{"id":9,"nombre":"SL726","categoria_id":4,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/bvfv57entb4lluop9mbb\/3. SL726.png"},{"id":10,"nombre":"SL825","categoria_id":4,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/zas4iupteotqhkspymga\/4. SL825.png"},{"id":4,"nombre":"SL830","categoria_id":1,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/rdyumaajngby1r8svtnz\/4. SL830.png"},{"id":5,"nombre":"SL840","categoria_id":1,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/dytbmuyl51ywcqmjhrrt\/5. SL840.png"},{"id":6,"nombre":"SL850","categoria_id":1,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/buefrojbzvpsqi0tjh4q\/6. SL850.png"},{"id":25,"nombre":"ST506","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/5pc34fxllhzc4mfhhxnq\/9. ST506.png"},{"id":24,"nombre":"ST508","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/m4fpkfsa5w4h3q133y3v\/8. ST508.png"},{"id":23,"nombre":"ST518","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/myb0cahx2ccn3qjzrswy\/7. ST518.png"},{"id":27,"nombre":"ST636A","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/cfsmroh71yl1cbdjw5rd\/11. ST636A.png"},{"id":19,"nombre":"ST709 2R","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/nh6nbidduvuc7crzxtur\/3. ST709_2R.png"},{"id":17,"nombre":"ST718","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/x8ychpnjydu5nxpcxnp5\/1. ST718.png"},{"id":26,"nombre":"ST720","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/voajxufbrz8yvvp5sitr\/10. ST720.png"},{"id":20,"nombre":"ST727","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/hhixmnkgunhx78vnd8uf\/4. ST727.png"},{"id":18,"nombre":"ST738","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/anjxzhtpq0lhxd3me6mt\/2. ST738.png"},{"id":21,"nombre":"ST770","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/lduq2zjqnkqvoeruckbv\/5. ST770.png"},{"id":29,"nombre":"ST791","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/4mhsnsuyy0gw69fhri20\/13. ST 791.png"},{"id":28,"nombre":"ST900","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/qlujt0hkfbzrrus6z04a\/12. ST900.png"},{"id":22,"nombre":"ST908","categoria_id":3,"imagen":"http:\/\/localhost\/sumitomo-tires\/files\/j6svy4xbraosxkqvqcmk\/6. ST908.png"}];
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

<style>

</style>
