<template>
  <el-container class="container">
    <Header :styleGood="styleGood" :userBO="userBO" :data="baseInfoData" ></Header>
    <Nav :styleGood="styleGood" :navA="navA" ></Nav>
    <!-- <Carousel1 :styleGood="styleGood" v-if="styleGood"></Carousel1> -->
    <nuxt-child @navActive="navActive" :qiyehegerenid="qiyehegerenid"/>
    <FooterMy></FooterMy>
  </el-container>
</template>

<script>
import Header from '~/components/header'
import Nav from '~/components/nav'
import Carousel1 from '~/components/carousel1'
import { styleGood ,accInfo,qiyehegerenId} from '~/assets/api/style'
import { groomMall } from '~/assets/api/mall'
import { baseInfo } from '~/assets/api/company'
import FooterMy from '~/components/footerMy'
import { } from '~/assets/utils/tool'

import { mapState } from 'vuex'

export default {
  // layout:'styleGood',
  components: {
    Nav,
    Header,
    Carousel1,
    FooterMy
  },
  head(){
    return {
      title:this.baseInfoData.companyName,
      meta:[
        {name:"keywords",content:this.baseInfoData.mainProduct},
        {name:'description',content:this.baseInfoData.introduction},
      ]
    }
  },
  data(){
    return {
      // styleGood:'',
      navA:'',
      userBO:'',
      shopId:'',
      qiyehegerenid:''
    }
  },

  async fetch (context) {
    var error = context.error
    try{
      let shopId = context.params.storeid
      let store = context.store

      let { data } = await baseInfo(shopId)
      let request1Data = await styleGood(shopId)

      store.commit('baseInfoDataM', data)
      store.commit('styleGoodM', request1Data.data)
    }catch(err){
       return error({ message: '页面找不到', statusCode: 404 })
    }
  },
  created(){

  },
  mounted(){
    this.shopId = localStorage.getItem('shopId')
    this.getUser()
    // this.getStyleGood()
    this.getQiyehegerenId()
  },
  computed: mapState([
    'baseInfoData',
    'styleGood'
  ]),
  methods:{
    async getStyleGood(){
        let {data} = await styleGood(this.shopId)
        this.styleGood = data
    },
    async getUser(){
        let userBO =  await accInfo('')
        this.userBO = userBO.data
    },
    async getQiyehegerenId(){
        let request3Data = await qiyehegerenId()
        this.qiyehegerenid = request3Data.data
    },
    navActive(nav){
      this.navA = nav
    },

  }

}
</script>

<style lang="less" scoped>


.container{
  flex-direction: column;
  min-width: 990px;
}


</style>
