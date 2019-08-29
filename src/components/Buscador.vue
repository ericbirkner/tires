<template>
    <div class="col-lg-6 col-xl-6">
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
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
.has-search{
  .form-control {
    padding-left: 2.375rem;
  }
  .form-control-feedback {
      position: absolute;
      z-index: 2;
      display: block;
      width: 2.375rem;
      height: 2.375rem;
      line-height: 2.375rem;
      text-align: center;
      pointer-events: none;
      color: #aaa;
  }
}
</style>
