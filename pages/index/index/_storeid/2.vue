<!-- 公司介绍页 -->
<template>
  <div class='company-intro-page'>
    <section class="wrap cur-local">
      <el-row type="flex"  align="middle" class="fwW">
        <el-col :sm="12">
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:void(0)">公司介绍</a></el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <!-- <el-col class="search" :sm="12">
          <input type="text" placeholder="请输入关键字搜索..."/><button class="btn">搜本店</button>
        </el-col> -->
      </el-row>
    </section>
    <el-main class="mainm wrap">
      <el-row class="box-leftright">
        <el-col class="left hidden-left">
          <Company-survey class="bd marginB" :data="baseInfoData.data"></Company-survey>
          <!--后期上 <Classify-mall class="bd marginB"></Classify-mall> -->
          <!--后期上 <Groom-photo class="bd marginB"></Groom-photo> -->
          <Contact class="bd" :data="baseInfoData.data"></Contact>
        </el-col>
        <el-col class="right">
        <!-- 公司简介 -->
          <Company-intro class="bd marginB" :data="fullInfoData"></Company-intro>
          <Company-details class="bd marginB" :data="fullInfoData"></Company-details>
          <!--后期上 <Company-qualifica class="bd"></Company-qualifica> -->
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import CompanySurvey from '~/components/companySurvey'  //公司概况
import CompanyIntro from '~/components/companyIntro' //公司简介
import CompanyDetails from '~/components/companyDetails' //公司详情
import CompanyQualifica from '~/components/companyQualifica'
import ClassifyMall from '~/components/classifyMall'
import GroomPhoto from '~/components/groomPhoto'
import Contact from '~/components/contact'
import { myMixin } from '~/mixin/mixin'

import { } from '~/assets/utils/tool'
import { baseInfo,fullInfo } from '~/assets/api/company'

import Vue from 'vue'
export default {
  components: {
    CompanyIntro,
    CompanySurvey,
    ClassifyMall,
    GroomPhoto,
    Contact,
    CompanyDetails,
    CompanyQualifica
  },
  data() {
    return {
      // pageNum:1,
      // numPerPage:10,
      // groomMallList:[],
      shopId:''
    };
  },
  created() {

  },
  mounted(){
      // this.getGroomMall()
     this.shopId = localStorage.getItem('shopId')
  },
  computed: {

  },
  async asyncData(context){
    let shopId = context.params.storeid
      let [
      request3Data,
      // request4Data,
      request5Data
      ] = await Promise.all([
        baseInfo(shopId),
        // styleGood('868308159016472576')，
        fullInfo(shopId)
      ])
      return {
        baseInfoData:request3Data,
        // getStyle:request4Data,
        fullInfoData:request5Data.data
      }
  },
  methods: {
    // async getGroomMall(){
    //     let {data} = await groomMall(this.pageNum,this.numPerPage)
    //     this.groomMallList = data.data.list
    // },
    toLink(){
      this.$store.commit('navActiveM','')
      this.$router.push({
          path:`/index/${this.shopId}`
      })
    }
  },
  watch: {},
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
      margin-left: @m;
    }
  }
</style>
