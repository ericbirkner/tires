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
          this.paises= [
            {"id":2,"deleted_at":null,"created_at":"2019-08-28 21:41:51","updated_at":"2019-08-28 21:41:51","pais":"argentina"},
            {"id":1,"deleted_at":null,"created_at":"2019-08-23 15:46:47","updated_at":"2019-08-23 15:46:47","pais":"chile"}
            ]
          //console.log(paises);
      },
      getCiudades () {
          this.ciudades= [
            {"id":3,"deleted_at":null,"created_at":"2019-08-28 21:44:43","updated_at":"2019-08-28 21:44:43","ciudad":"Buenos aires","paises_id":2},
            {"id":1,"deleted_at":null,"created_at":"2019-08-23 15:50:05","updated_at":"2019-08-23 15:50:05","ciudad":"Regi\u00f3n Metropolitana","paises_id":1},
            {"id":2,"deleted_at":null,"created_at":"2019-08-23 16:09:39","updated_at":"2019-08-23 16:09:39","ciudad":"Vi\u00f1a del mar","paises_id":1}
            ];
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
