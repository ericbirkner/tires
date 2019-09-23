<template>
<!-- <transition name="slide-fade"></transition> -->

  <div class="container-fluid">
    <div class="box-contacto">
      <div class="row">
        <div class="col">
          <h2>
            FORMULARIO DE CONTACTO
          </h2>
          <form id="contacto" @submit="checkForm">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" ref="campo1">
                <input id="nombre" v-model="nombre" type="text" name="nombre" placeholder="NOMBRE (*)">
                <div class="mensaje-valid">
                  <p v-show="validNombre">**El nombre es obligatorio.</p>
                </div>
              </div >
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" ref="campo2">
                <input id="email" v-model="email" type="text" name="email" placeholder="EMAIL (*)">
                <div class="mensaje-valid">
                  <p v-show="validEmail">**El email es obligatorio.</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" ref="campo3">
                <input id="telefono" v-model="telefono" type="number" name="telefono" placeholder="TELEFONO (*)">
                <div class="mensaje-valid">
                  <p v-show="validTelefono">**El telefono es obligatorio.</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" ref="campo4">
                <textarea v-model="consulta" name="consulta" placeholder="Consulta (*)" rows="10" cols="50">Write something here</textarea>
                <div class="mensaje-valid">
                  <p v-show="validConsulta">**La consulta es obligatorio.</p>
                </div>
              </div>
            </div>
            <div class="btn-enviar" ref="campo5">
              <input type="submit" value="Submit">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { TweenMax } from 'gsap';
  import { fxPgIn, fxPgOut } from '../helpers/Devfun';
export default {
    name: "contacto",
    data() {
        return {
          validNombre: false,
          validEmail: false,
          validTelefono: false,
          validConsulta: false,
          errors: [],
          nombre: null,
          email: null,
          telefono: null,
          consulta: null
        }
    },
    methods: {
      checkForm: function (e){
        console.log('contato trigger');
        e.preventDefault();
        if (this.nombre && this.email && this.telefono && this.consulta) {
          this.getDataForm();
          return true;
        }
        this.valid = false;
        if ( !this.nombre) {
          this.validNombre = true;
        } else {
          this.validNombre = false;
        }
        if ( !this.email) {
          this.validEmail = true;
        } else {
          this.validEmail = false;
        }
        if ( !this.telefono) {
          this.validTelefono = true;
        } else {
          this.validTelefono = false;
        }
        if ( !this.consulta) {
          this.validConsulta = true;
        } else {
          this.validConsulta = false;
        }
      },
      validEmailFormat: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      getDataForm: function(){
        console.log('POST => al servicio de contacto');
        console.log('this.nombre', this.nombre);
        console.log('this.email', this.email);
        console.log('this.telefono', this.telefono);
        console.log('this.consulta', this.consulta);

        this.validNombre = false;
        this.validEmail = false;
        this.validTelefono = false;
        this.validConsulta = false;
      },
      enterAnim(done){
        // entra
        const ArrChild = [ this.$refs.campo1, this.$refs.campo2, this.$refs.campo3, this.$refs.campo4, this.$refs.campo5, ];
        fxPgIn(this.$el, ArrChild, done);
      },
      leaveAnim(done){
        // sale
        fxPgOut(this.$el, this.$refs.thumb, done);
      }
    },
    computed: {
    },
    created: function() {
    }
}
</script>

<style lang="scss">
  @import "./styles/style.scss";
  @import "./styles/contacto.scss";
</style>
