import Home from "../components/Home.vue";
import Catalogo from "../components/Catalogo.vue";
import Producto from '../components/Producto.vue';
import Informacion from '../components/Informacion.vue';
import Informacion_detalle from '../components/Informacion_detalle.vue';
import Historia from '../components/Historia.vue';
import Tiendas from '../components/Tiendas.vue';
import Contacto from '../components/Contacto.vue';



const routes= [
      { path: '/', component: Home },
      { path: '/catalogo', component: Catalogo },
      { path: '/catalogo/:id', component: Catalogo },
      { path: '/catalogo/page/:page', component: Catalogo },
      { path: '/producto/:id',component: Producto },
      { path: '/informacion', component: Informacion },
      { path: '/informacion/:id', component: Informacion_detalle },
      { path: '/historia', component: Historia },
      { path: '/tiendas', component: Tiendas },
      { path: '/contacto', component: Contacto },

    ]
export default routes;
