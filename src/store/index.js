import { createStore } from 'vuex'

// render server-error
import error from './modules/error.js'

// test user module
import user from './modules/user.js'

// all cards on pages
import card from './modules/card.js'

export default createStore({
  modules: {
    error, user, card
  },
})
