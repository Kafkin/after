// import { get, post } from '@/scripts/helper.js'

export default {
  actions: {
    
  },

  mutations: {
    setAllCard( state, newArr ) {
      state.products = newArr
    },

    addProdInCart( state, newProd ) {
      state.cart.push( newProd )
    },

    clearCart( state ) {
      state.cart = []
    }
  },

  state: {
    products: [],
    category: [],
    ageLimit: [],
    cart: []
  },

  getters: {
    getAllProductInCart( state ) {
      return state.cart
    },

    getAllProduct( state ) {
      return state.products
    },
  },
  
}