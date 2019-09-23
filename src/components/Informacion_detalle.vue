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

        <div class="col">
          <div class="row">
            <div class="col">
              <div class="interior">
                <div class="wrapper">
                  <div class="icono">
                    <img src="./../assets/icono-rueda.png" class="img-fluid">
                  </div>
                  <div class="titulo">
                    <h4>
                      PRESIÓN CORRECTA DE LOS NEUMÁTICOS
                    </h4>
                  </div>
                  <div class="linea-dash"></div>
                  <div class="body-copy">
                    <P>
                      Mantener el nivel recomendado de presión de aire en los neumáticos amplía su vida útil y
                      garantiza una maniobrabilidad, un frenado y un ahorro de combustible óptimos.
                    </P>
                    <span class="punto"></span>
                    <P>
                      Todos los neumáticos pierden aire, normalmente a un ritmo de aproximadamente 0,69 bar (o 1 libra por pulgada cuadrada [psi]) al mes. Este ritmo puede acelerarse si se realizan viajes largos, se transita por superficies de carretera desiguales o se transportan cargas pesadas con frecuencia. Además, las pérdidas de aire aumentan con temperaturas más calurosas. Compruebe la presión mensualmente y recuerde examinar las bandas de rodadura con la misma regularidad. Debe comprobar los neumáticos cuando estén fríos, ya que la conducción los calienta, expande el aire que hay en su interior y aumenta el riesgo de que la lectura sea imprecisa.
                    </P>
                    <span class="punto"></span>
                    <P>
                      Puede consultar la presión recomendada en el manual de usuario de su<br/>
                      vehículo o en el flanco del neumático.
                    </P>
                    <div class="linea-dash"></div>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div class="thumb-neumatico">
                <img :src="'./src/assets/'+informacion.imagen" class="img-fluid">
              </div>
            </div>
            <div class="col">
              <div class="box-datos-interior">
                <div class="wrapper">
                  <div v-html="informacion.cuerpo"></div>
                </div>
              </div>

            </div>

          </div>

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
        this.informacion= {
          "id":1,
          "titulo":"PRESI\u00d3N CORRECTA DE LOS NEUM\u00c1TICOS",
          "cuerpo":"<p><h3>C\u00d3MO COMPROBAR LA PRESI\u00d3N<\/h3><ol><li><span>1</span>Utilice el man\u00f3metro del compresor de aire de su taller mec\u00e1nico o compre uno en una tienda de productos para autom\u00f3viles.<\/li><li><span>2</span>Localice la v\u00e1lvula del neum\u00e1tico y desenrosque el tap\u00f3n.<\/li><li><span>3</span>Inserte el man\u00f3metro en la v\u00e1lvula y presione hacia abajo. A continuaci\u00f3n, oir\u00e1 un breve silbido y el indicador del man\u00f3metro mostrar\u00e1 una lectura.<\/li><li><span>4</span>Compare la presi\u00f3n del man\u00f3metro con el valor en bar o psi recomendado para el neum\u00e1tico.<\/li><li><span>5</span>Infle o desinfle el neum\u00e1tico, seg\u00fan sea necesario.<\/li><li><span>6</span>Vuelva a comprobar la presi\u00f3n y aj\u00fastela de nuevo hasta alcanzar el nivel recomendado.<\/li><li><span>7</span>Vuelva a colocar el tap\u00f3n de la v\u00e1lvula.<\/li><li><span>8</span>Repita la operaci\u00f3n en los cuatro neum\u00e1ticos.<\/li><\/ol><p>Si aprecia una ca\u00edda de presi\u00f3n excesiva o inusual, el neum\u00e1tico podr\u00eda presentar p\u00e9rdidas. En tal caso, consulte con un profesional.<\/p><br><\/p>",
          "imagen":"thumb-interior.png"
        };
        this.loading = false;
      },
      enterAnim(done){
        TweenMax.to(this.$el, 2, { opacity: 1, onComplete: done});
      },
      leaveAnim(done){
        TweenMax.to(this.$el, 0.2, { opacity: 0, onComplete: done});
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
