
<template>
  <div v-swiper:mySwiper="swiperConfig" class="swiper-container carousel1">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,i) in styleGood.bannerTemplateVOS" :key="i">
        <a :href="item.hrefUrl">
          <img :src="item.imgUrl">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>

 export default {
    props:["styleGood"],
    data(){
        return {
          swiperConfig: {
            autoplay: 4000,
            direction: 'horizontal',
            loop: true,
            pagination: '.swiper-pagination'
          },
        }
    },
    mounted(){

    },
    methods:{
      toLink(){

      }
    }
}
</script>


<style lang="less" scoped>
 .carousel1{
    width:100%;
    img{
      width:100%;
      height: 500px;
    }
  }



</style>
