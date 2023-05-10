<template>

  <!-- <v-error v-model="getGroupError"></v-error> -->

  <header class="header">
    <nav class="header__nav">
      <p class="header__nav-link header__nav-link_logo">Logo</p>

      <router-link class="header__nav-link" to="/">Home</router-link>
      <router-link class="header__nav-link" to="/about">About</router-link>
      <router-link class="header__nav-link" to="/admin" v-if="isAdmin">Admin</router-link>
      <router-link class="header__nav-link" to="/catalog">Catalog</router-link>
      <router-link class="header__nav-link" to="/cart" v-if="getAllProductInCart.length">Cart</router-link>

      <span class="header__nav-auth">
        <router-link class="header__nav-link" to="/login" v-if="!isAuth">Login</router-link>
        <p class="header__nav-link header__nav-link_border" v-if="!isAuth">/</p>
        <router-link class="header__nav-link" to="/registration" v-if="!isAuth">Registration</router-link>
      </span>
    </nav>
  </header>

  <router-view />

</template>

<script>
// import vError from '@/scripts/components/vError.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import router from './router'

export default {
  name: 'App',

  data: () => ({
    isLoading: true
  }),

  watch: {

  },

  methods: {
    ...mapActions([

    ]),

    ...mapMutations([
      'setUser',
    ]),
  },

  computed: {
    ...mapGetters([
      'getAllProductInCart',
      'getGroupError',
      'isAdmin',
      'isAuth',
    ]),
  },

  components: {
    // 'v-error': vError
  },

  created() {
    localStorage.removeItem( 'current-prod' )

    const user = localStorage.getItem( 'user' )
    user && this.setUser( JSON.parse(user) )
  },

  mounted() {
    router.push('/')
  }
}
</script>

<style>
  @import "@/styles/css/config.min.css";
</style>
