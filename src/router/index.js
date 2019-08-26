import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import list from '@/components/page/list'
import content from '@/components/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },,
    {
      path: '/content',
      name: 'content',
      component: content
    },
  ]
})
