<template>
    
    <div class="col">
      <div class="box-buscador">
        <span class="fa fa-search"></span>
        <input v-on:keyup="buscar" type="text" class="form-control" placeholder="Buscar">
      </div>
    </div>

</template>

<script>
export default {
    name: "Buscador",

    methods:{
      buscar(event){
        this.$parent.busqueda = event.target.value;
      }
    }
}
</script>

<style lang="scss">
  @import "./styles/buscador.scss";
</style>
