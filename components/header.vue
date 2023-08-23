<template>
    <div>
        <header> 
            <h2> {{pgConnState.header_title_conn}} </h2>
            <li>   
                <NuxtLink :to="pg.register_redirect_link">{{pgConnState.head_link_register_title}}</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="pg.reset_redirect_link">{{ pgConnState.footer_link_forgot_pswd_title }}</NuxtLink>
            </li>
        </header>
      
    </div>
    
    <div v-if="current_user.user">
        Account : {{ current_user.user.username }}
    </div>
    <div v-if="current_user.user">
        <span v-if="current_user.isAuth">
            Status: connecté
        </span>
        <span v-else>
            Status: déconnecté
        </span>
    </div>
  </template>

<script>
export default {
    setup() {  
        const store = useStore();
        const current_user = computed(() => store.state.currentUser);
        return {
            current_user
        };
    }
}

</script>