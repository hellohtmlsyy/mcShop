<!-- 相册详情 -->
<template>
  <div class='photo-details'>
    <section class="wrap cur-local">
      <el-row type="flex"  align="middle" class="fwW">
        <el-col :sm="12">
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </section>

    <div class="carousel wrap">
      <Carousel-my :data='photoDetailsData'></Carousel-my>
      <!-- <div class="carousel1 marginB">
        <Carousel :data="photoDetailsData.data.list" containerW="866"  containerH="866" nextEl=".swiper-button-next" prevEl=".swiper-button-prev" ></Carousel>
      </div> -->
      <!-- <div class="carousel2">
        <Carousel :data="photoDetailsData.data.list" containerW="866" slidesPer="5" containerH="192" loopFillGroupWithBlank="true"  nextEl=".swiper-button-next" prevEl=".swiper-button-prev"
        @clickImg="clickImg"
        ></Carousel>
      </div> -->
    </div>

  </div>
</template>

<script>
import Carousel from '~/components/carousel'
import CarouselMy from '~/components/carouselMy'
// import mock from '~/plugins/mock'

export default {
  components: {
    Carousel,
    CarouselMy
  },
  data() {
    return {
      cur:0
    };
  },
  created() {

  },
  async asyncData({ app }) {
    const { data} = await app.$axios.get('/photoDetails')
    return { photoDetailsData : data }
  },
  computed: {

  },
  watch: {},
  methods: {
    clickImg(i){
      this.cur = i
    }
  },
}
</script>

<style lang='less' scoped>
  @import '../../../static/css/curLocalpage.less';
  .photo-details{
    .cur-local{
      border: none;
    }
    .carousel{
      .carousel1{
        width: 600px;
        height: 600px;
      }
    }
  }
</style>
