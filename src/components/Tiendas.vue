<template>
<transition name="slide-fade">
<div class="container">

<SelectPais v-on:listenerChild="listenerChild"></SelectPais>

<div v-if="loading" class="row text-center">
  <div class="col">
   <div class="spinner-border" role="status">
     <span class="sr-only">Cargando...</span>
   </div>
 </div>
</div>

<div class="row" v-else>
  <div class="col-xs-12 col-sm-4 col-lg-2 col-xl-2" v-for="tienda in displayedTiendas">
      <h5>{{tienda.nombre}}</h5>
      <div>{{tienda.direccion}}</div>
      <div>{{tienda.telefono}}</div>
      <div>{{tienda.email}}</div>
      <div>{{tienda.web}}</div>
  </div>
</div>

</div>
</transition>

</template>

<script>
import axios from 'axios'
import SelectPais from "./SelectPais";


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
          this.tiendas= [{"id":1,"deleted_at":null,"created_at":"2019-08-23 16:00:30","updated_at":"2019-08-23 16:11:17","nombre":"tienda demo","direccion":"AVDA LAS CONDES N\u00b010161","telefono":"3333444343","email":"email@fake.com","web":"http:\/\/www.llantax.com","paises_id":1,"ciudades_id":2},{"id":2,"deleted_at":null,"created_at":"2019-08-23 16:18:14","updated_at":"2019-08-23 16:18:14","nombre":"Otra tienda","direccion":"JR  UNION N\u00e7 113 - TRUJILLO TRUJILLO  LA LIBERTAD","telefono":"3333444343","email":"dev@simplechile.com","web":"http:\/\/www.llantasdelpacifico.cl","paises_id":1,"ciudades_id":1},{"id":3,"deleted_at":null,"created_at":"2019-08-29 14:18:28","updated_at":"2019-08-29 14:18:28","nombre":"Tienda argentina","direccion":"AV CHE 1233","telefono":"34943843943","email":"argento@ksdksd.cl","web":"http:\/\/www.avenida.com.ar","paises_id":2,"ciudades_id":3}];
          this.loading = false;
          //console.log(tiendas);
      },
      listenerChild(reply) {
        this.idCiudad = reply;
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

<style>
/*estilos*/

</style>
