import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import VueQriously from 'vue-qriously'
import ElementUI from 'element-ui' // element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css' // element-ui的css
//引入组件库
import jvuewheel from '@jyeontu/jvuewheel'
//引入样式
import '@jyeontu/jvuewheel/lib/jvuewhell.css'

Vue.use(jvuewheel);
Vue.use(ElementUI) // 使用elementUI
Vue.use(VueQriously)
Vue.use(VueAwesomeSwiper)

