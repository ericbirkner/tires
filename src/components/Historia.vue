<template>

<div class="container">
<div class="row">
<!-- <transition name="slide-fade"></transition> -->
  <div class="col">
    <div class="box-slider">
      <div class="wrapper-slider">
        <span class="border-top"></span>
        <span class="border-bottom"></span>
        <swiper ref="mySwiper" :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="historia in historias" v-bind:key="historia.id">
            <div class="row">
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 thumb-slide">
                <img :src="'./src/assets/'+historia.imagen" class="img-fluid"/>
              </div>
              <div class="col">
                <div class="datos-historia">
                  <h2>
                    {{historia.ano}}
                  </h2>
                  <h4>
                    {{historia.titulo}}
                  </h4>
                </div>
                
              </div>
            </div>
            <div class="row">
              <div class="col box-descripcion">
                <div class="datos-historia">
                  <vue-scrollbar classes="scrollMask" ref="Scrollbar">
                    <p>
                      {{historia.descripcion}}
                    </p>
                  </vue-scrollbar>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- slides -->
        </swiper>
      </div>
    </div>
  </div>
  <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 box-control">
    <div class="box-control-slider">
      <div class="box-ctrl">
        <div class="swiper-pagination swiper-pagination-bullets"  slot="pagination"></div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    
  </div>
  




  <!-- <div class="col-6" >
    <img :src="historia.imagen" class="img-fluid"/>
  </div>

  <div class="col-6">
    <h3>{{historia.ano}}</h3>
    <h6>{{historia.titulo}}</h6>
    <p v-html="historia.descripcion"></p>
  </div> -->

</div>
</div>


</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import VueScrollbar from 'vue2-scrollbar';
import axios from 'axios';

const anos = [];

export default {
    name: "Historia",
    data() {
        return {
          historias:[
            {
              "id":2,
              "titulo":"otro a\u00f1o mas antiguo",
              "ano":"1865",
              "descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              "imagen":"slide-1.png"
            },
            {
              "id":1,
              "titulo":"a\u00f1o de ejemplo",
              "ano":"1909",
              "descripcion":"<p>22 -Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><\/p>",
              "imagen":"slide-1.png"
            }
          ],
          swiperOption: {
            direction: 'vertical',
            autoHeight: true,
            pagination: {
              el: '.swiper-pagination',
              // type: 'progressbar',
              // dynamicBullets: true,
              clickable: true,
              renderBullet(index, className) {
                return `<span class="${className}" swiper-pagination-bullet-custom">${anos[index]}</span>`
              }
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
        }
    },
    components: {
      swiper,
      swiperSlide,
      VueScrollbar
    },
    methods: {},
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created: function() {
      console.log(this.historias);

      this.historias.forEach(element => {
        console.log('element', element.ano);  
        this.anos = element.ano;

        console.log('this.anos', this.anos);  

      });
      
      
    },
    mounted() {
      console.log('this.swiperthis.swiper', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    }
}
</script>

<style lang="scss">
  @import "./styles/style.scss";
  @import "./styles/historia.scss";
</style>
