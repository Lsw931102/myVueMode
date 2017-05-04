import Vue from 'vue'
// import App from '../App.vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import yida from '@/components/yida'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      component: Hello
    }, {
      path: '/yida',
      component: yida
    }
  ]
})
