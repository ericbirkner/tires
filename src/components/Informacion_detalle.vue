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


        <div class="col">
          <h1>{{informacion.titulo}}</h1>
          <img :src="informacion.imagen" class="img-fluid">
          <div v-html="informacion.cuerpo"></div>
        </div>

    </div>
  </div>

</template>

<script>

export default {
    name: "Informacion_detalle",

    data() {
        return {

        }
    },
    methods: {
      getData () {
          this.informacion= {"id":1,"titulo":"PRESI\u00d3N CORRECTA DE LOS NEUM\u00c1TICOS","cuerpo":"<p><h3>C\u00d3MO COMPROBAR LA PRESI\u00d3N<\/h3><ol><li>Utilice el man\u00f3metro del compresor de aire de su taller mec\u00e1nico o compre uno en una tienda de productos para autom\u00f3viles.<\/li><li>Localice la v\u00e1lvula del neum\u00e1tico y desenrosque el tap\u00f3n.<\/li><li>Inserte el man\u00f3metro en la v\u00e1lvula y presione hacia abajo. A continuaci\u00f3n, oir\u00e1 un breve silbido y el indicador del man\u00f3metro mostrar\u00e1 una lectura.<\/li><li>Compare la presi\u00f3n del man\u00f3metro con el valor en bar o psi recomendado para el neum\u00e1tico.<\/li><li>Infle o desinfle el neum\u00e1tico, seg\u00fan sea necesario.<\/li><li>Vuelva a comprobar la presi\u00f3n y aj\u00fastela de nuevo hasta alcanzar el nivel recomendado.<\/li><li>Vuelva a colocar el tap\u00f3n de la v\u00e1lvula.<\/li><li>Repita la operaci\u00f3n en los cuatro neum\u00e1ticos.<\/li><\/ol><p>Si aprecia una ca\u00edda de presi\u00f3n excesiva o inusual, el neum\u00e1tico podr\u00eda presentar p\u00e9rdidas. En tal caso, consulte con un profesional.<\/p><br><\/p>","imagen":"http:\/\/localhost\/sumitomo-tires\/files\/koaqhkpw1xvnixf6v7zb\/cuidados-3.png"};
          this.loading = false;
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
