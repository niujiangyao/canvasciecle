import Vue from 'vue'
import Router from 'vue-router'
import carOwner from '@/components/carOwner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'carOwner',
      component: carOwner
    }
  ]
})
