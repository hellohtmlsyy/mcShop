<!-- nav -->
<template>
  <nav class="nav">
    <div class="wrap">
      <el-row type="flex">
        <!-- <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide box-lab" v-for="(item,i) in nav" :key="i" @click="selected(item.name,item.type)" :style="{
  background:(navActive == item.type && styleGood) ? 'linear-gradient(0deg,#' +
  styleGood.buttonLinearGradientTop + ',#' + styleGood.buttonLinearGradientBottom : ((navActive == item.type && !styleGood) ? 'linear-gradient(0deg,rgba(0,160,233,1),rgba(0,193,249,1))' : '')
            }">
              {{item.name}}
            </div>
        </div>
        <div class="swiper-pagination"></div>
        </div>-->
        <div class="nav-box df">
          <div
            class="flex1 taC"
            v-for="(item,i) in nav"
            :key="i"
            @click="selected(item.name,item.type)"
            :style="{
  background:(navActive == item.type && styleGood) ? 'linear-gradient(0deg,#' +
  styleGood.buttonLinearGradientTop + ',#' + styleGood.buttonLinearGradientBottom : ((navActive == item.type && !styleGood) ? 'linear-gradient(0deg,rgba(0,160,233,1),rgba(0,193,249,1))' : '')
            }"
          >{{item.name}}</div>
        </div>
      </el-row>
      <!-- {{groomMallList}} -->
      <!-- {{shopId}}| -->
      <!-- {{$route.params.storeid}}---- -->
    </div>
  </nav>
</template>

<script>
import { myMixin } from '~/mixin/mixin'
import Vue from 'vue'

import { mapState } from 'vuex'
export default {
  props: ['groomMallList', 'styleGood'],
  components: {},
  data() {
    return {
      nav: [
        {
          name: '首页',
          href: '/store/' + this.shopId,
          type: ''
        },
        {
          name: '公司介绍',
          type: 2
          // href:'/index/' + this.shopId + '/2.html'
        },
        {
          name: '供应产品',
          type: 210,
          href: '/store/' + this.shopId + '/210'
        },
        {
          name: '矿业项目',
          type: 4,
          href: '/store/' + this.shopId + '/4'
        },
        {
          name: '行业会展',
          type: 1,
          href: '/store/' + this.shopId + '/1'
        },
        // ,{
        //   name:'公司动态',
        //   type:20,
        //   href:'/index/' + this.shopId + '/20.html'
        // }
        // ,{
        //   name:'公司相册',
        //   href:'/index/' + this.groomMallList + '/3.html'
        // }
        {
          name: '联系方式',
          type: 7,
          href: '/store/' + this.shopId + '/7'
        }
      ],
      banners: ['/1.jpg', '/2.jpg', '/3.jpg'],
      swiperOption: {
        slidesPerView: 7
      },
      widthh: 0,
      shopId: this.$route.params.storeid,
      urlPath: '',
      Hub: new Vue()
    }
  },
  mixins: [myMixin],
  computed: mapState(['navActive']),
  created() {},
  mounted() {
    // 永远都是页面初始化时的地址
    this.urlPath = window.location.pathname
    var path = window.location.pathname
    var reg = /\d+/g

    if (path.slice(1, 6) !== 'store') {
      if (/products/.test(path)) {
        this.$store.commit('navActiveM', '210')
      } else if (/meeting/.test(path)) {
        this.$store.commit('navActiveM', '1')
      } else if (/project/.test(path)) {
        this.$store.commit('navActiveM', '4')
      }
      setTimeout(() => {
        this.shopId = localStorage.getItem('shopId')
      }, 500)
    } else {
      this.shopId = this.$route.params.storeid

      // this.shopId = path.match(reg)[0]
      localStorage.setItem('shopId', this.shopId)
      this.$store.commit('shopIdM', this.shopId)
      let type = path.match(reg)

      if (type.length > 2) {
        this.$store.commit('navActiveM', '')
        return
      }
      this.$store.commit('navActiveM', type[1] || '')
    }
  },
  beforeUpdate() {},
  methods: {
    selected(name, type) {
      this.$store.commit('navActiveM', type)
      if (name == '首页') {
        this.$router.push({
          path: `/store/${this.shopId}`
        })
      } else {
        this.$router.push({
          path: `/store/${this.shopId}/${type}`
        })
      }
    }
  }
}
</script>

<style lang='less' scoped>
.swiper-container {
  margin: 0;
  width: 100%;
}
.box-lab {
  flex: 1;
  text-align: center;
}
.nav {
  background-color: #535353;
  font-size: 16px;
  color: #fff;
  line-height: 30px;
  .wrap {
    padding: 0 30px;
    // .nuxt-link-exact-active{
    //   .item{
    //     background:linear-gradient(0deg,rgba(0,160,233,1),rgba(0,193,249,1));
    //     box-shadow:1px 1px 1px 0px rgba(169,157,160,0.75);
    //   }
    // }
    .nav-box {
      width: 100%;
    }
    a {
      color: #fff;
      .item {
        width: 10%;
        text-align: center;
      }
    }
  }
}
</style>
