import { post } from '@/scripts/helper.js'
import router from '@/router';


export default {
  actions: {
    login: async ( { commit }, data ) => {
      const res = await post( 'http://kkk/public/api/login', data )
      if( res?.error ) { commit( 'setError', res.error ); return; }
      
      commit( 'setError', { 
        message: {
          success: [ 'Добро пожаловать. Вы успешно вошли в аккаунт! (-_-)/' ],
        },

        code: 200
      });

      localStorage.setItem( 'user', JSON.stringify( res ) )
      commit( 'setUser', res )
    },

    registration: async ( { commit }, data ) => {
      const res = await post( 'http://kkk/public/api/registration', data )
      if( res?.error ) { commit( 'setError', res.error ); return; }

      commit( 'setError', { 
        message: {
          success: [ 'Добро пожаловать. Вы успешно зарегались и вошли в аккаунт! (-_-)/' ],
        },
        
        code: 200
      });

      commit( 'setUser', res )
    }
  },

  mutations: {
    setUser( state, newUser ) {
      state.user = newUser
      router.push('/')
    }
  },

  state: {
    user: null
  },

  getters: {
    isAuth: ( state ) => !!state.user,
    isAdmin: ( state ) => state?.user?.role === 'admin'
  },
}