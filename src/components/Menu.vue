<template>

  <div id="menu-nav" class="container-fluid no-gutter">
    <div class="wrapper-menu">
      <div class="row">
        <div class="col">
          <div class="logo-menu">
            <router-link to="/">
              <img src="../assets/logo-sumitomo.png" />
            </router-link>
          </div>
        </div>
        <div class="col">
          <div class="nav">
            <ul>
              <li>
                <router-link to="/catalogo"><p>CATÁLOGO</p></router-link>
              </li>
              <li>
                <router-link to="/tiendas"><p>TIENDA</p></router-link>
              </li>
              <li>
                <router-link to="/informacion"><p>INFORMACION</p></router-link>
              </li>
              <li>
                <router-link to="/historia"><p>HISTORIA</p></router-link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
  export default {
      name: "Menu"
  }
</script>

<style lang="scss">
  @import './styles/menu.scss';
</style>
