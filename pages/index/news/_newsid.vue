<!--  -->
<template>
  <div class='news-details'>
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

    <el-row type="flex" class="box-leftright wrap">
      <el-col class="left marginR">
        <Company-survey class="bd marginB" :data="baseInfoData.data"></Company-survey>
        <!--后期上 <Classify-mall class="bd marginB"></Classify-mall> -->
        <!--后期上 <Groom-photo class="bd marginB"></Groom-photo> -->
        <Contact class="bd" :data="baseInfoData.data"></Contact>
      </el-col>
      <el-col class="right">
        <div class="details">
          <div class="title bd">
            <h1>{{newsInfoData.title}}</h1>
            <div class="box-lab">
              <span>新闻来源：</span>
              <span>{{newsInfoData.source}}</span>
              <span class="line">|</span>
              <span>浏览：</span>
              <span class="look-num">{{newsInfoData.views}}</span>
              <span class="line">|</span>
              <span>创建日期：</span>
              <span>{{newsInfoData.date}}</span>
            </div>
          </div>
          <div class="content bd">
              {{newsInfoData.content}}
            <div class="box-share">
              <button class="follow">关注</button>
              <span>|</span>
              <span>分享：</span>
              <i class="icon iconfont icon-weixin"></i>
              <i class="icon iconfont icon-weibo"></i>
              <i class="icon iconfont icon-qq01"></i>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CompanySurvey from '~/components/companySurvey'
import ClassifyMall from '~/components/classifyMall'
import GroomPhoto from '~/components/groomPhoto'
import Contact from '~/components/contact'
import HeaderCard from '~/components/headerCard'

import { baseInfo } from '~/assets/api/company'
import { newsInfo } from '~/assets/api/news'
export default {
  components: {
    CompanySurvey,
    ClassifyMall,
    GroomPhoto,
    Contact,
    HeaderCard
  },
  data() {
    return {

    };
  },
  async asyncData(context){
      let [
      request3Data,
      // request4Data,
      request5Data
      ] = await Promise.all([
        baseInfo('868308159016472576'),
        // styleGood('868308159016472576')，
        newsInfo('868308159016472576')
      ])
      return {
        baseInfoData:request3Data,
        // getStyle:request4Data,
        newsInfoData:request5Data.data
      }
  },
  created() {

  },
  computed: {

  },
  watch: {},
  methods: {

  },
}
</script>

<style lang='less' scoped>
@import '../../../static/css/curLocalpage.less';
.news-details{
  .left{
    width: 220px;
  }
  .right{
    .details{
      .title{
        background:rgba(242,242,242,1);
        padding: 18px;
        h1{
          font-size:18px;
          margin-bottom: 10px;
        }
        .box-lab{
          font-size:14px;
          color:rgba(112,112,112,1);
          .look-num{
            color: #00A0E9;
          }
          .line{
            padding: 0 15px;
          }
        }
      }
      .content{
        padding: 30px 85px;
        line-height:32px;
        font-size:16px;
        .box-share{
          margin-top: 40px;
          .follow{
            color: #00A0E9;

          }
        }
      }
    }
  }
}
</style>
