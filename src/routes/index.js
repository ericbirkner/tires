import Home from "../components/Home.vue"
import Catalogo from "../components/Catalogo.vue"
import Producto from '../components/Producto.vue'
import Informacion from '../components/Informacion.vue'
import Historia from '../components/Historia.vue'
import Tiendas from '../components/Tiendas.vue'

const routes= [
      { path: '/', component: Home },
      { path: '/catalogo', component: Catalogo },
      { path: '/catalogo/:id', component: Catalogo },
      { path: '/catalogo/page/:page', component: Catalogo },
      { path: '/producto/:id',component: Producto },
      { path: '/informacion', component: Informacion },
      { path: '/historia', component: Historia },
      { path: '/tiendas', component: Tiendas }
    ]
export default routes;
