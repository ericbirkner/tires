<template>
    <div class="row">
      <div class="col-6"><router-link to="/">Inicio</router-link></div>
      <div class="col-6">
      <ul>
        <li>
          <router-link to="/catalogo">Catálogo</router-link>
        </li>
        <li>
          <router-link to="/tiendas">Tienda</router-link>
        </li>
        <li>
          <router-link to="/informacion">Información</router-link>
        </li>
        <li>
          <router-link to="/historia">Historia</router-link>
        </li>
      </ul>
      </div>
    </div>
</template>

<script>
export default {
    name: "Menu"
}

</script>
