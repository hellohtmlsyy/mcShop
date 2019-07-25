
<template>
  <div>
    <div
      v-swiper:mySwiper="swiperConfig"
      class="swiper-container"
      :style="{width:containerW + 'px',height:containerH + 'px'}"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide carousel2" v-for="(item,i) in data" :key="i">
          <img :src="item.img" @click="clickImg(i)">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <!--左箭头-->
      <div class="swiper-button-next"></div>
      <!--右箭头-->
    </div>

    <div
      v-swiper:mySwiper1="swiperConfig1"
      class="swiper-container"
      :style="{width:containerW + 'px',height:containerH + 'px'}"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,i) in data" :key="i">
          <img :src="item.img" @click="clickImg(i)">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <!--左箭头-->
      <div class="swiper-button-next"></div>
      <!--右箭头-->
    </div>
{{data}}
  </div>
</template>

<script>
export default {
  props: ['data', 'containerW', 'containerH', 'nextEl', 'prevEl', 'slidesPer'],
  data() {
    return {
      swiperConfig: {
        // autoplay: 4000,
        // direction: 'horizontal',
        // loop: true,
        // pagination: '.swiper-pagination',
        // spaceBetween : 12,
        navigation: {
          nextEl: this.nextEl,
          prevEl: this.prevEl
        }
      },
      swiperConfig1: {
        slidesPerView: 5,
        centeredSlides: true
      },
      swiperConfig2: {
        controller: {
          control: [this.mySwiper, this.mySwiper1],
          inverse: true,
          by: 'slide'
        }
      },
      imgList: [
        {
          imgUrl: '/_nuxt/static/imgs/logo/1.png'
        },
        {
          imgUrl: '/_nuxt/static/imgs/logo/2.png'
        },
        {
          imgUrl: '/_nuxt/static/imgs/ico/ico-atten.png'
        },
        {
          imgUrl: '/_nuxt/static/imgs/ico/ico-mess.png'
        }
      ]
    }
  },
  created() {
    if (this.slidesPer) {
      this.swiperConfig.slidesPerView = this.slidesPer
      this.swiperConfig.slidesPerGroup = this.slidesPer
    }
  },
  methods: {
    clickImg(i) {
      this.$emit('clickImg', i)
    }
  }
}
</script>


<style lang="less" scoped>
.swiper-container {
  // width:100%;
  img {
    width: 100%;
  }
}
</style>
