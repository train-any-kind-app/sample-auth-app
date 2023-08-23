//import { createApp } from 'vue'
import { createStore } from 'vuex'



/**
 * store state
 */ 
const state = () => ({
    counter: 0,
    currentUser: {
        user: null,
        token: '',
        isAuth: this.$auth.loggedIn
    }
})

/**
 * getters
 */ 

const getters = {
    getCounter(state) {
      return state.counter;
    },

    getCurrentUser(state, current){
        return state.currentUser;
    }
}


/**
 * mutations
 */  
const mutations = {
    increment(state) {
      state.counter++;
    },
    setCurrentUser(state, current){
        state.currentUser = current;
    }
}
  
/**
 * actions => api
 */
const actions = {
    async fetchCounter({ state }) {
      // make request
      const res = { data: 10 };
      state.counter = res.data;
      return res.data;
    },
    async fetchUserAuth(state, userAuth){
        if(!state.currentUser.isAuth || !state.currentUser.isAuth){

            commit('setCurrentUser', userAuth);
        }
    },
    async clearUserAuth(state){ //user expire or user deconnect
        if(state.currentUser.isAuth &&  state.currentUser.token != '' && state.currentUser.user != null)
        commit('setCurrentUser', {
            user: null,
            token: '',
            isAuth: false
        });
    }

}


// Create a new store instance.
export default createStore({
    state,
    getters,
    actions,
    mutations
})

//const app = createApp({ /* your root component */ })


//app.use(store)