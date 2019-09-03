<template>
<transition name="slide-fade">
<div class="container">
<div class="row">

  <div v-if="loading" class="row text-center">
    <div class="col">
     <div class="spinner-border" role="status">
       <span class="sr-only">Cargando...</span>
     </div>
   </div>
  </div>


    <div class="col-sm-3 col-sm-3 ">
      <router-link :to="`/informacion/${informaciones[0].id}`"><img :src="informaciones[0].imagen" class="img-fluid"></router-link>
      <h4>{{informaciones[0].titulo}}</h4>
    </div>

    <div class="col-sm-6 col-sm-6">
      <div class="row">
        <router-link :to="`/informacion/${informaciones[1].id}`"><img :src="informaciones[1].imagen" class="img-fluid"></router-link>
        <h4>{{informaciones[1].titulo}}</h4>
      </div>
      <div class="row">
        <router-link :to="`/informacion/${informaciones[2].id}`"><img :src="informaciones[2].imagen" class="img-fluid"></router-link>
        <h4>{{informaciones[2].titulo}}</h4>
      </div>
    </div>

    <div class="col-sm-3 col-sm-3">
      <router-link :to="`/informacion/${informaciones[3].id}`"><img :src="informaciones[3].imagen" class="img-fluid"></router-link>
      <h4>{{informaciones[3].titulo}}</h4>
    </div>




</div>
</div>
</transition>

</template>

<script>

export default {
    name: "Informacion",

    data() {
        return {

        }
    },
    methods: {
      getData () {
          this.informaciones= [{"id":1,"titulo":"PRESI\u00d3N CORRECTA DE LOS NEUM\u00c1TICOS","imagen":"http:\/\/localhost\/sumitomo-tires\/files\/koaqhkpw1xvnixf6v7zb\/cuidados-3.png"},{"id":2,"titulo":"ROTACI\u00d3N DE LOS NEUM\u00c1TICOS","imagen":"http:\/\/localhost\/sumitomo-tires\/files\/a80tlpcrgpjgu3sp58j9\/cuidados-2.png"},{"id":3,"titulo":"LEER LAS BANDAS DE RODADURA DE LOS NEUM\u00c1TICOS","imagen":"http:\/\/localhost\/sumitomo-tires\/files\/xqmebiw3jnhp68fdu59y\/3.jpg"},{"id":4,"titulo":"CU\u00c1NDO DEBO CAMBIAR LOS NEUM\u00c1TICOS","imagen":"http:\/\/localhost\/sumitomo-tires\/files\/2ysjavc0mnh1tllwav4i\/SUMITOMO2.jpg"}];
          this.loading = false;
          console.log(this.informaciones);
        }
    },
    computed: {

    },

    created: function() {
        this.getData();
    }
}
</script>

<style>
/*estilos*/

</style>
