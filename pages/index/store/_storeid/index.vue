<!-- 首页 -->
<template>
  <div class='home'>
    <Carousel1 :styleGood="styleGood" v-if="styleGood"></Carousel1>
    <section class="wrap cur-local">
      <el-row type="flex"  align="middle" class="fwW">
        <el-col :sm="12">
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item><span class="txt-cur">首页</span></el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <!-- <el-col class="search" :sm="12">
          <input type="text" placeholder="请输入关键字搜索..."/><button class="btn">搜本店</button>
        </el-col> -->
      </el-row>
    </section>

    <el-main class="mainm wrap">
      <el-row class="box-leftright">
        <el-col class="left">
          <Company-survey class="bd marginB" :data="baseInfoData.data"></Company-survey>
          <!--后期上 <Classify-mall class="bd marginB"></Classify-mall> -->
          <!--后期上 <Groom-photo class="bd marginB"></Groom-photo> -->
          <Contact class="bd" :data="baseInfoData.data"></Contact>
        </el-col>
        <el-col class="right">
        <!-- 公司简介 -->
          <Company-Intro class="bd marginB" :data="baseInfoData.data"></Company-Intro>
          <Header-card title="供应产品" v-if="groomMallList.data">
            <div slot="moreText">
                <a href="javascript:void(0)" class="color_f" @click="toLink(210)">更多></a>
            </div>

            <Product class="bd marginB" v-if="groomMallList.data" :data="groomMallList.data.mallBOS"></Product>
          </Header-card>
          <Header-card title="矿业项目" v-if="groomProjectList.data">
            <div slot="moreText">
              <a href="javascript:void(0)" class="color_f" @click="toLink(4)">更多></a>
            </div>
            <Mineral class="bd marginB"  :groomProjectList="groomProjectList.data.projectBOS"></Mineral>
          </Header-card>
          <!-- <Company-qualifica class="bd marginB"></Company-qualifica> -->
        </el-col>
      </el-row>
    </el-main>

  </div>
</template>

<script>
import HeaderCard from '~/components/headerCard'
import CompanySurvey from '~/components/companySurvey'
import CompanyIntro from '~/components/companyIntro'
import ClassifyMall from '~/components/classifyMall'
import GroomPhoto from '~/components/groomPhoto'
import Contact from '~/components/contact'
import Product from '~/components/product'
import Mineral from '~/components/mineral'
import Carousel1 from '~/components/carousel1'
import CompanyQualifica from '~/components/companyQualifica'


import { groomMall } from '~/assets/api/mall'
import { groomProject } from '~/assets/api/project'
import { baseInfo } from '~/assets/api/company'
import { styleGood } from '~/assets/api/style'
import { myMixin } from '~/mixin/mixin'

import {getCookie } from '~/assets/utils/tool'
import { mapState } from 'vuex'

import Vue from 'vue'
export default {
  components: {
    HeaderCard,
    CompanySurvey,
    CompanyIntro,
    ClassifyMall,
    GroomPhoto,
    Contact,
    Product,
    Mineral,
    CompanyQualifica,
    Carousel1
  },
  data() {
    return {
      pageNum:1,
      numPerPage:10,
      getStyle:'',
      shopId:this.$route.params.storeid,
      baseInfoData:''
    };
  },
  // head(){
  //   return {
  //     title:'矿业圈公司',
  //     meta:[
  //       {hid:'description',name:'keywords',content:'矿业圈,MININGCIRCLE,企业商品列表,矿业商城,商城,购物,网上购物,网上商城,互联网金融,投资金条,招金金条,矿石,矿业贸易,国际贸易,国内贸易'},
  //       {hid:'description',name:'description',content:'矿业圈-MiningCircle,MININGCIRCLE.COM-专业的矿业综合平台,集信息,资讯,招聘,培训,网上平台交易,金融,投资于一身,为中国矿业资源乃至世界资源的流通服务,为您在矿业资源领域提供最便捷最优质的服务。'},
  //     ]
  //   }
  // },
  mixins:[myMixin],
  created() {

  },
  mounted(){
    // this.getDataInfo()
  },
  computed: mapState([
    'counter',
    'data',
    // 'shopId'
  ]),
  async asyncData(context){
    let error = context.error
    if( context.req && context.req.headers.cookie){
       var ck =  context.req && context.req.headers.cookie;
       var MC_UID = getCookie('MC_UID',ck)
    }
    try{
      let shopId = context.params.storeid
      let [
        request1Data,
      request2Data,
      request3Data,
      request4Data
      ] = await Promise.all([
        groomMall(shopId),
        groomProject(shopId),
        baseInfo(shopId,MC_UID),
        styleGood(shopId)
      ])

      return {
        groomMallList:request1Data,
        groomProjectList:request2Data,
        baseInfoData:request3Data,
        styleGood:request4Data.data
      }
    }catch(err){
      return error({ message: '页面找不到', statusCode: 404 })
    }

  },
  methods: {
    async getDataInfo(){
      let data = await baseInfo(this.shopId)

      this.baseInfoData = data
    },
    increment() {
      this.$store.commit('increment')
    },
    test2(){
      this.$store.dispatch('baseInfoA')
    },
    toLink(type){
      this.$store.commit('navActiveM',type)
      if(type == ''){
        this.$router.push({
          path:`/store/${this.shopId}`
        })
        return
      }
      this.$router.push({
          path:`/store/${this.shopId}/${type}`
      })
    },
  },

}
</script>

<style lang='less' scoped>
@import '../../../../static/css/curLocalpage.less';
@m:10px;
.el-main{
  padding:0
}
.box-leftright{
  display:flex;
}

  .mainm{

    .left{
      width:220px;
    }
    .right{
      flex:1;
      width: 81%;
      margin-left: @m;
    }
  }
</style>
