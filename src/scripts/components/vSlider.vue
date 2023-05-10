<template>
  
  <div class="slider">
    <div 
      @scroll="$refs.slider.scrollLeft == 0 ? settings.start = true : settings.start = false; Math.abs(($refs.slider.scrollWidth - $refs.slider.offsetWidth) - $refs.slider.scrollLeft) < 5 ? settings.end = true : settings.end = false;"
      class="slider__content" 
      ref="slider" 
    >
      <div class="slider__item" v-for="el in array" :key="el">
        <img class="slider__image" :src="require(`@/assets/img/${ el.img }`)" :alt="el.img">
        <div class="slider__info">
          <h2>{{ el.title }}</h2>
        </div>
      </div>
    </div>

    <div class="slider__nav">
      <button class="slider__nav__button" v-on:click="$refs.slider.scrollBy({left: $refs.slider.offsetWidth * -1, behavior: 'smooth'});" v-bind:class="settings.start ? '' : 'slider__nav__button--active'">Previous</button>
      <button class="slider__nav__button" v-on:click="$refs.slider.scrollBy({left: $refs.slider.offsetWidth, behavior: 'smooth'});" v-bind:class="settings.end ? '' : 'slider__nav__button--active'">Next</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'vSlider',

  props: {
    array: {
      required: true,
      type: Array,
    }
  },

  data: () => ({
    settings: {
      start: true,
      end: false
    }
  }),

  metohds: {

  }
}
</script>
