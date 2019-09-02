<template>

    <div class="container">

      <div v-if="loading" class="row text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

       <div class="row">
            <div class="col-sm-12 col-lg-4">
              <img :src="producto.imagen" class="img-fluid">
            </div>
            <div class="col-sm-12 col-lg-8">
              <h1 class="text-danger">{{producto.nombre}}</h1>
              <p v-html="producto.descripcion"></p>
          </div>

       </div>



    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: "Producto",
    data() {
        return {
          loading:true,
          producto: [],
          idProducto: this.$route.params.id
        }
    },
    created: function() {
      /*
      var not_id = this.$route.params.id
      axios
        .get("http://jsonplaceholder.typicode.com/posts/"+not_id)
        .then(res => {
          this.producto = res.data;
          this.loading = false;
        })
      */
      this.producto = {"id":13,"nombre":"3. AS P01","descripcion":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><\/p>","imagen":"http:\/\/localhost\/sumitomo-tires\/files\/81wsjl3qlautsijwloaz\/3. AS P01.png"};
      this.loading=false;
    }
}
</script>
