<template>
<!-- <transition name="slide-fade"></transition> -->

  <div class="container-fluid">
    <div class="row">

      <div v-if="loading" class="row text-center">
        <div class="col">
          <div class="spinner-border" role="status">
            <span class="sr-only">Cargando...</span>
          </div>
        </div>
      </div>


        <div class="thumb-info col-sm-3 col-sm-3 ">
          <router-link :to="`/informacion/${informaciones[0].id}`">
            <img :src="'./src/assets/'+informaciones[0].imagen" class="img-fluid">
          </router-link>
          <h4>{{informaciones[0].titulo}}</h4>
        </div>

        <div class="thumb-info col-sm-6 col-sm-6">
          <div class="row">
            <router-link :to="`/informacion/${informaciones[1].id}`">
              <img :src="'./src/assets/'+informaciones[1].imagen" class="img-fluid"></router-link>
              <h4>{{informaciones[1].titulo}}</h4>
          </div>
          <div class="row">
            <div class="col thumb-info no-gutter">
              <router-link :to="`/informacion/${informaciones[2].id}`">
              <img :src="'./src/assets/'+informaciones[2].imagen" class="img-fluid"></router-link>
              <h4>{{informaciones[2].titulo}}</h4>
            </div>
            
          </div>
        </div>

        <div class="thumb-info col-sm-3 col-sm-3">
          <router-link :to="`/informacion/${informaciones[3].id}`">
            <img :src="'./src/assets/'+informaciones[3].imagen" class="img-fluid">
          </router-link>
          <h4>{{informaciones[3].titulo}}</h4>
        </div>




    </div>
  </div>


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
          this.informaciones= [
            {
              "id":1,
              "titulo":"PRESI\u00d3N CORRECTA DE LOS NEUM\u00c1TICOS",
              "imagen":"informacion-1.png"
            },
            {
              "id":2,
              "titulo":"ROTACI\u00d3N DE LOS NEUM\u00c1TICOS",
              "imagen":"informacion-2.png"
            },
            {
              "id":3,
              "titulo":"LEER LAS BANDAS DE RODADURA DE LOS NEUM\u00c1TICOS",
              "imagen":"informacion-3.png"
            },
            {
              "id":4,
              "titulo":"CU\u00c1NDO DEBO CAMBIAR LOS NEUM\u00c1TICOS",
              "imagen":"informacion-4.png"
            }
          ];
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

<style lang="scss">
  @import "./styles/style.scss";

  .thumb-info {
    h4{
      font-size: 20px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.31;
      letter-spacing: -0.13px;
      text-align: left;
      color: #ffffff;
      margin:2px 0 10px 0;
    }
  }
</style>
