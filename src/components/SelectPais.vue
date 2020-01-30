<template>

  <div class="row justify-content-md-center">
    <div class="col col-lg-4">

      <div class="select">
        <select class="form-control" :disabled=selectPais @change="selectHandler($event)">
          <option value="0" :selected="true">Seleccione País</option>
          <option v-for="pais in paises" :value="pais.id">
            {{pais.pais}}
          </option>
        </select>
      </div>


    </div>
    <div class="col col-lg-4">
      <div class="select">
        <select id="ciudades" class="form-control" :disabled=selectCiudad @change="setCiudad($event)">
          <option value="" :selected="true">Seleccione Ciudad</option>
          <option v-for="ciudad in displayedCiudades" :selected="false" :value="ciudad.id" >
            {{ciudad.ciudad}}
          </option>
        </select>
      </div>


    </div>
  </div>

</template>

<script>

import axios from 'axios'

export default {
    name: "SelectPais",
    props: ["listenerChild"],
    data() {
        return {
          paises:[],
          ciudades:[],
          selectPais:true,
          selectCiudad:true,
          idPais:0
        }
    },
    methods: {
      getPaises () {
            axios.get(URL+'paises')
            .then(response => {
                this.paises = response.data;
            })
            .catch(response => {
                console.log(response);
            });
          //console.log(paises);
      },
      getCiudades () {
            axios.get(URL+'ciudades')
            .then(response => {
                this.ciudades = response.data;
            })
            .catch(response => {
                console.log(response);
            });
      },
      selectHandler(event){
        console.log(event.target.value)
        if(event.target.value>0){
          this.idPais = event.target.value;
          document.getElementById("ciudades").selectedIndex = "0";
        }
      },
      setCiudad(event){
        if(event.target.value>0){
          this.$emit("listenerChild", event.target.value);
        }
      }
    },
    computed: {
      displayedCiudades() {
          let filtered = this.ciudades;
          if(this.idPais>0){
            filtered = filtered.filter(el => {
              return el.paises_id==this.idPais;
            })
            this.selectCiudad=false;
          }
          return filtered;
      }
    },
    created: function() {
      this.getPaises();
      this.getCiudades();
      this.selectPais = false;
    }
}
</script>

<style lang="scss">
  @import './styles/tiendas.scss'

</style>
