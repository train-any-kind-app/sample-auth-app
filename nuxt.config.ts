// https://nuxt.com/docs/api/configuration/nuxt-config
/* export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: [
     //'@nuxtjs/axios',
     '@nuxtjs/auth'
   ]
  
 })*/
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    //'@nuxtjs/axios',
    //'@nuxtjs/auth-next'
  ],
  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'token',
  //         global: true,
  //         required: true,
  //         type: 'Bearer'
  //       },
  //       user: {
  //         property: 'user',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/api/auth/login', method: 'post' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get' }
  //       }
  //     }
  //   }
  // }
})