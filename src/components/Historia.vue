<template>

<div class="container-fluid">
<div class="row">
<!-- <transition name="slide-fade"></transition> -->
  <div class="col no-gutter-m">
    <div class="box-slider" ref="thumb">
      <div class="wrapper-slider">
        <span class="border-top"></span>
        <span class="border-bottom"></span>
        <swiper ref="mySwiper" :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="historia in historias" v-bind:key="historia.id">
            <div class="row">

              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 thumb-slide web">
                <img :src="historia.imagen" class="img-fluid"/>
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
                    <p v-html="historia.descripcion">

                    </p>
                  </vue-scrollbar>
                </div>
              </div>
              <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 thumb-slide movil">
                <img :src="historia.imagen" class="img-fluid"/>
              </div>
            </div>
          </swiper-slide>
          <!-- slides -->
        </swiper>
      </div>
    </div>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 box-control no-gutter-m web">
    <div class="box-control-slider">
      <div class="box-ctrl">
        <div class="swiper-pagination swiper-pagination-bullets"  slot="pagination"></div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>

  <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 box-control-movil movil">
    <div class="row">
      <div class="col">
        <h2> HISTORIA</h2>
      </div>
      <div class="col">
        <div class="box-select-ano">
          <!-- <v-select :options="historias.ano"></v-select> -->
          <select v-model="ano_selected" @change="onSetSelect($event)">
            <option v-for="fecha in historias" :key="fecha.id">
              {{ fecha.ano }}
            </option>
          </select>
          <!-- {{ historias[0].ano }} -->
        </div>
      </div>
    </div>

  </div>


</div>
</div>


</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import VueScrollbar from 'vue2-scrollbar';
import axios from 'axios';
import { TweenMax } from 'gsap';
import { fxPgInSingle, fxPgOut } from '../helpers/Devfun';

const anos = [];


export default {
    name: "Historia",
    data() {
        return {
          ano_selected:'',
          historias:[],
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
    methods: {
      onSetSelect(event) {
        console.log('fecha seleccionada', );
        const goToSlider = anos.indexOf(event.target.value)
        this.swiper.slideTo(goToSlider, 1000, true);
      },
      getAnosData: function(newVal){
        const goToSlider = anos.indexOf(newVal)
        this.swiper.slideTo(goToSlider, 1000, false);
      },
      enterAnim(done){
        // entra
        fxPgInSingle(this.$el, done);
      },
      leaveAnim(done){
        // sale
        fxPgOut(this.$el, this.$refs.thumb, done);
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    watch: {
      ano_selected( newVal, oldVal) {
        // this.getAnosData(newVal);
      }
    },
    created: function() {
      axios.get(URL+'historias')
      .then(response => {
          this.historias = response.data;
          this.historias.forEach(element => {
            anos.push(element.ano);
          });
      })
      .catch(response => {
          console.log(response);
      });

      // console.log('created', anos);
    },
    mounted() {
      console.log('this.swiperthis.swiper', this.swiper)
      this.swiper.slideTo(0, 1000, false);
    }
}
</script>

<style lang="scss">
  @import "./styles/style.scss";
  @import "./styles/historia.scss";
</style>
