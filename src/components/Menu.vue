<template>
  <div>
    <div class="menu-falso"></div>
    <div id="menu-nav" ref="navmenu" class="container-fluid no-gutter">
      <div class="wrapper-menu">
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 no-gutter-m">
            <div class="bg-menu-m">
              <div class="logo-menu">
                <router-link to="/">
                  <img class="web" src="img/logo-sumitomo.png" />
                  <img class="movil" src="img/logo-sumitomo_m.png" />
                </router-link>
              </div>
              <div class="btn-menu-m" v-on:click="menuToggle">
                <a href="javascript:void(0);">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </a>
              </div>
            </div>

          </div>
          <div class="col no-gutter-m">
            <div class="nav">
              <ul>
                <li>
                  <router-link to="/" v-on:click.native="menuToggle"><p>HOME</p></router-link>
                </li>
                <li>
                  <router-link to="/catalogo" v-on:click.native="menuToggle"><p>CATÁLOGO</p></router-link>
                </li>
                <li>
                  <router-link to="/historia" v-on:click.native="menuToggle"><p>HISTORIA</p></router-link>
                </li>
                <li>
                  <router-link to="/informacion" v-on:click.native="menuToggle"><p>CUIDADO DEL NEUMÁTICO</p></router-link>
                </li>
                <li>
                  <router-link to="/tiendas" v-on:click.native="menuToggle"><p>DISTRIBUIDORES</p></router-link>
                </li>
                <li>
                  <router-link to="/contacto" v-on:click.native="menuToggle"><p>CONTACTO</p></router-link>
                </li>
                <li>
                  <a href="POLIZA-DE-GARANTIA-2019.pdf" target="_blank"><p>GARANTÍA</p></a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div class="bg-menu-nav-m"></div>
    </div>
  </div>
</template>

<script>
  import { TimelineMax } from 'gsap'

  const tl = new TimelineMax({paused:true})
  let menuToggle = false;

  export default {
      name: "Menu",
      mounted: function(){
        const { navmenu } = this.$refs;
          tl.to(navmenu, 0.3, {height:'100%', opacity:1,})
      },
      methods: {
        menuToggle: function () {
          console.log('toggle menu open / close', tl);
          if( !menuToggle ) {
            tl.play();
            menuToggle = true;
          } else if( menuToggle ) {
            tl.reverse();
            menuToggle = false;
          }
        }
      }
  }
</script>

<style lang="scss">
  @import './styles/menu.scss';
</style>
