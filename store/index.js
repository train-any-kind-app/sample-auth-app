export const state = () => ({
    counter: 0,
    currentUser: {
        user: null,
        token: '',
        isAuth: false
    }
})
  
export const getters = {
    getCounter(state) {
      return state.counter;
    },

    getcurrentUser(state){
        return state.currentUser;
    }
}


/**
 * mutations
 */  
export const mutations = {
    increment(state) {
      state.counter++
    }
}
  
/**
 * actions
 */
export const actions = {
    async fetchCounter({ state }) {
      // make request
      const res = { data: 10 };
      state.counter = res.data;
      return res.data;
    },
    
}
  