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
    '@sidebase/nuxt-auth'
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
  //       refreshToken: {
  //         property: 'refresh_token',
  //         data: 'refresh_token',
  //         maxAge: 60 * 60 * 24 * 30
  //       },
  //       user: {
  //         property: 'user',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/api/auth/login', method: 'post' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         refresh: { url: '/api/auth/refresh', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get' }
  //       }
  //     }
  //   }
  // }
})