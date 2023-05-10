<template>
  <section class="page home" v-cloak>

    <h1 class="home__title">Комиксы для настоящих фанатов!</h1>
    <p class="home__subtitle">ComicShop - ваш идеальный партнер в мире комиксов! Наш интернет-магазин предлагает огромный выбор комиксов от известных издательств и авторов, чтобы удовлетворить запросы самых требовательных фанатов. Мы гарантируем быструю доставку и конкурентоспособные цены, чтобы вы могли наслаждаться своими любимыми героями в полной мере!</p>
    <button class="home__btn" @click="$router.push( 'catalog' )">Подробнее</button>

    <v-photo-card
      :array="arrImages"
      :ending="ending" 
    ></v-photo-card>

  </section>
</template>

<script>
import vPhotoCard from '@/scripts/components/vPhotoCard.vue'

export default {
  name: 'HomeView',

  data: () => ({
    ending: "From the song 'Things We Left Behind' by Atlas",

    arrImages: [
      { img: 'imgOne.jpg', title: "Little traces in the snow..." },
      { img: 'imgTwo.jpg', title: "...they're the faded tracks..." },
      { img: 'imgThree.jpg', title: "...of things we left behind" },
      { img: 'imgFour.jpg', title: "Little traces in the snow..." },
      { img: 'imgFive.jpg', title: "...they're the faded tracks..." },
      { img: 'imgSix.jpg', title: "...of things we left behind" },
    ],
  }),

  watch: {

  },
  
  methods: {
    
  },

  computed: {
    
  },

  components: {
    'v-photo-card': vPhotoCard
  },

  created() {
    
  }
}
</script>
