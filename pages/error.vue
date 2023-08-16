<template>
    <header>
      <nav>
        <NuxtLink to="/">Go back home</NuxtLink>
      </nav>
      <!-- <NuxtWelcome /> -->
     <h1>Error Page</h1>
     <h2>Error Cause: {{ error_content.error.Title }}</h2>
     <h4>{{ error_content.error.message }}</h4>
    </header>
  </template>

  <script>
   import { ERROR_CASE } from "./../util";
import { Title } from '../.nuxt/components';
   const error_content = reactive({error:ERROR_CASE.DEFAULT_ERROR})

 </script>