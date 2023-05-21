import { createRouter, createWebHistory } from 'vue-router'
// import store from './store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/index.vue'),
      // meta: {
      //   hideNavbar: true,
      //   layout: loginLayout,
      // },
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})
// router.beforeEach((to, from, next) => {
//     console.log(to)
// //   if (!to.meta.middleware) {
// //     return next()
// //   }
// //   const middleware = to.meta.middleware
//   const context = {
//     to,
//     from,
//     next
//   }
//   return middleware[0]({
//     ...context,
//   })
// })
export default router
