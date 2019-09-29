<template>

    <div class="col">
      <div class="box-buscador">
        <input v-on:keyup="buscar" type="text" class="form-control" placeholder="Buscar">
        <span class="fa fa-search"></span>
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
