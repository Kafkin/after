<template>
  <section class="page catalog" v-cloak>

    <v-slider
      :array="arrCard"
    ></v-slider>

  </section>
</template>

<script>
import vSlider from '@/scripts/components/vSlider.vue'

export default {
  name: 'CatalogView',

  data: () => ({
    arrCard: [
      { img: 'imgOne.jpg', title: 'This is card' },
      { img: 'imgTwo.jpg', title: 'This is card' },
      { img: 'imgThree.jpg', title: 'This is card' },
      { img: 'imgFour.jpg', title: 'This is card' },
      { img: 'imgFive.jpg', title: 'This is card' },
      { img: 'imgSix.jpg', title: 'This is card' },
    ],
  }),

  watch: {
    
  },
  
  methods: {
    
  },

  computed: {
    
  },

  components: {
    'v-slider': vSlider
  },

  created() {
    
  },

  mounted() {
    
  }
}
</script>