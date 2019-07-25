
<template>
  <div>
    <div @click="toStore">
      旗舰店列表
    </div>
  </div>
</template>

<script>
// import mock from '~/plugins/mock'
import Swiper from 'swiper'

export default {
  data() {
    return {
    }
  },
  create(){

  },
  beforeMount(){

  },
  mounted() {

  },
  methods: {

    toStore(){
      window.location.href = "http://c.miningcircle.com:8084/store/868309680558968832"
    },
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
