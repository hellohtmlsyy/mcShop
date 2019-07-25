<!--  -->
<template>
  <div class="news">
    <section class="wrap cur-local">
      <el-row type="flex" align="middle" class="fwW">
        <el-col :sm="12">
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <!-- <el-col class="search" :sm="12">
          <input type="text" placeholder="请输入关键字搜索...">
          <button class="btn">搜本店</button>
        </el-col> -->
      </el-row>
    </section>

    <el-main class="mainm wrap">
      <el-row class="box-leftright" type="flex">
        <el-col class="left" v-show="showLeft">
          <Company-survey class="bd marginB" :data="baseInfoData.data"></Company-survey>
          <!--后期上 <Classify-mall class="bd marginB"></Classify-mall> -->
          <!--后期上 <Groom-photo class="bd marginB"></Groom-photo> -->
          <Contact class="bd" :data="baseInfoData.data"></Contact>
        </el-col>
        <el-col class="right">
          <Header-card title="公司动态" class="bd">
            <div class="list">
              <ul>
                <li v-for="(item,i) in newsData" :key="i">
                  <nuxt-link :to="'/news/'+item.id+'.html'">
                  <div class="df">
                    <div>
                      <img :src="item.img" alt width="200px" height="130px">
                    </div>
                    <div>
                      <div class="box-txt">
                        <h1>{{item.title}}</h1>
                        <p>
                          {{item.vdesc}}
                        </p>
                      </div>
                      <div class="df jcSb box-lab">
                        <div>
                          <i class="icon iconfont icon-yan"></i>
                          <span>{{item.insert_time}}</span>
                        </div>
                        <div>
                          <span>发布日期</span>
                          <span>{{item.view_times}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="paging">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="500"
              ></el-pagination>
            </div>
          </Header-card>
        </el-col>
      </el-row>
    </el-main>

  </div>
</template>

<script>
import CompanySurvey from '~/components/companySurvey'
import ClassifyMall from '~/components/classifyMall'
import GroomPhoto from '~/components/groomPhoto'
import Contact from '~/components/contact'
import HeaderCard from '~/components/headerCard'
import { myMixin } from '~/mixin/mixin'

import { baseInfo } from '~/assets/api/company'
import { newsList } from '~/assets/api/news'
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  mixins:[myMixin],
  created() {},
  async asyncData(context){
      let [
      request3Data,
      // request4Data,
      request5Data
      ] = await Promise.all([
        baseInfo('868308159016472576'),
        // styleGood('868308159016472576')，
        newsList('868308159016472576')
      ])
      return {
        baseInfoData:request3Data,
        // getStyle:request4Data,
        newsData:request5Data.data.data
      }
  },
  computed: {},
  watch: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../../../static/css/curLocalpage.less';

.news{
  .left{
     width: 220px;
     margin-right: 10px;
  }
  .right{
    .list{
      li{
        margin: 0 25px;
        padding:25px 0;
        border-bottom: 1px solid rgba(181,181,181,1);
        img{
          margin-right: 30px;
        }
        .box-txt{
          min-height:115px;
          h1{
            font-size:18px;
            line-height:26px;
            background:rgba(239,246,250,1);
            margin-bottom: 10px;
          }
          p{
            font-size:14px;
            line-height:20px;
            color:rgba(112,112,112,1);
          }
        }

        .box-lab{
          color:rgba(170,170,170,1);
          font-size:12px;
        }
      }
      li:last-child{
        border: none;
      }
    }
    .paging{
      padding: 30px;
      text-align: center;
    }
  }
}
</style>
