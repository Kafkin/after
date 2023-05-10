<template>
  
  <div 
    @mousemove="this.handleOnMove"
    @touchmove="this.handleOnMove"
    @touchend="this.handleOnUp"
    @mouseup="this.handleOnUp"
    class="photo-block" 
  >
    <blockquote 
      @touchstart="handleOnDownTouch($event)"
      class="photo-block__track" 
      @mousedown="handleOnDown" 
      ref="track"
    >
      <div 
        v-for="(el, index) in validArray" :key="index"
        :style="{ ...el.style }"
        class="photo-block__polaroid" 
      >
        <div class="photo-block__card">
          <div class="photo-block__image">
            <img :src="require(`@/assets/img/${ el.img }`)" :alt="el.img">
          </div>

          <p>{{ el.title }}</p>
        </div>

      </div>

      <cite class="photo-block__ending">{{ ending }}</cite>
    </blockquote>
  </div>

</template>

<script>
export default {
  name: 'vPhotoCard',

  data: () => ({
    animationInterval: null,
    curScroll: 0,

    mouseDownAt: 0,
    prevPercentage: 0,
    percentage: 0
  }),

  props: {
    array: {
      required: true,
      type: Array
    },

    ending: {
      required: true,
      type: String
    },
  },

  methods: {
    handleOnDown(e) {
      this.mouseDownAt = e.clientY
    },

    handleOnDownTouch(e) {
      this.mouseDownAt = e.touches[0].clientY
    },

    handleOnUp() {
      this.mouseDownAt = 0
      this.prevPercentage = this.percentage
    },

    handleOnMove(e) {
      if (this.mouseDownAt === 0) return

      const mouseDelta = parseFloat(this.mouseDownAt) - e.clientY
      const maxDelta = window.innerHeight / 2

      const percentage = (mouseDelta / maxDelta) * -75
      const nextPercentageUnconstrained = parseFloat(this.prevPercentage) + percentage
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -75)

      this.percentage = nextPercentage

      this.$refs.track.animate(
        { transform: `translateY(${nextPercentage}%)` },
        { duration: 5000, fill: "forwards" }
      )
    },

    ranRange( min, max ) {
      return Math.random() * ( min - max ) + max
    },

    transform( index ) {
      return index % 3 === 0 
        ? 'rotate(8deg) translatex(4vw)'
        : index % 2 === 0 
          ? 'rotate(-6deg) translatex(-2vw)'
          : 'rotate(4deg) translatex(2vw)'
    }
  },

  computed: {
    validArray() {
      let styles = [
        {
          'transform': 'rotate(4deg) translatex(2vw)',
          '--tform': 'translate( -25%, -60% )',
          '--r': 'auto',
          '--b': 'auto',
          '--t': 0,
          '--l': 0,
        },
        {
          'transform': 'rotate(-6deg) translatex(-2vw)',
          '--tform': 'translate( 45%, -60% )',
          '--l': 'auto',
          '--b': 'auto',
          '--t': 0,
          '--r': 0,
        },
        {
          'transform': 'rotate(8deg) translatex(4vw)',
          '--tform': 'translate( -25%, -60% )',
          '--r': 'auto',
          '--b': 'auto',
          '--t': 0,
          '--l': 0,
        },
      ]

      let counter = 0

      return this.array.map(( el, index = index + 1 ) => {
        counter += 1

        if( index % 3 === 0  ) counter = 0

        return {
          ...el, style: styles[ counter ] 
        }
      })
    }
  }

}
</script>