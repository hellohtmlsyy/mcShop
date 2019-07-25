<!-- 矿业项目页 -->
<template>
  <div class='project-page'>
    <section class="wrap cur-local">
      <el-row type="flex"  align="middle" class="fwW">
        <el-col :sm="12">
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink('')">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item>矿业项目</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <!-- <el-col class="search" :sm="12">
          <input type="text" placeholder="请输入关键字搜索..."/><button class="btn">搜本店</button>
        </el-col> -->
      </el-row>
    </section>

    <el-main class="mainm wrap">
      <el-row class="box-leftright" type="flex">
        <el-col class="left">
          <Company-survey class="bd marginB" :data="baseInfoData.data"></Company-survey>
          <!--后期上 <Classify-mall class="bd marginB"></Classify-mall> -->
          <!--后期上 <Groom-photo class="bd marginB"></Groom-photo> -->
          <Contact class="bd" :data="baseInfoData.data"></Contact>
        </el-col>
        <el-col class="right">
          <Header-card title="矿业投资"  class="bd">
            <div v-if="projectList.data">
            <Mineral class="marginB"  :groomProjectList="projectList.data.projectBOS"></Mineral>
            <div class="paging">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="pageNum"
                :page-size="numPerPage"
                layout="prev, pager, next, jumper"
                :total="totalCount">
              </el-pagination>
            </div>
            </div>
            <div class="nodata" v-else>
              暂无数据
            </div>
          </Header-card>
        </el-col>
      </el-row>
    </el-main>
    <!-- {{projectList}} -->
    <!-- <nuxt-link to="/project/123">
      <button>点击进入相册详情</button>
    </nuxt-link> -->
  </div>
</template>

<script>
import CompanySurvey from '~/components/companySurvey'
import Contact from '~/components/contact'
import Mineral from '~/components/mineral'
import HeaderCard from '~/components/headerCard'

import { baseInfo } from '~/assets/api/company'
import { projectList } from '~/assets/api/project'
import { getCookie } from '~/assets/utils/tool'
export default {
  components: {
    CompanySurvey,
    Contact,
    Mineral,
    HeaderCard
  },
  data() {
    return {
      pageNum:1,
      numPerPage:12,
      totalCount:0,
      shopId:""
    };
  },
  created() {

  },
  mounted(){
    this.shopId = localStorage.getItem('shopId')

    if(this.projectList.data){
      this.totalCount = this.projectList.data.totalCount
    }
  },
  async asyncData(context){
    let shopId = context.params.storeid
    if( context.req && context.req.headers.cookie){
       var ck =  context.req && context.req.headers.cookie;
       var MC_UID = getCookie('MC_UID',ck)
    }
      let [
      request3Data,
      // request4Data,
      request5Data
      ] = await Promise.all([
        baseInfo(shopId,MC_UID),
        // styleGood('868308159016472576')，
        projectList(shopId,1,12)
      ])

      return {
        baseInfoData:request3Data,
        // getStyle:request4Data,
        projectList:request5Data,
        // totalCount:request5Data.data.totalCount
      }
  },
  computed: {

  },
  watch: {},
  methods: {
    async getDate() {
      const { data} = await projectList('992213171894751232',this.pageNum,this.numPerPage)
      this.projectList = data
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
    handleCurrentChange(val) {
      this.pageNum = val
      this.getDate()
    },
    handleSizeChange(){

    }
  },
}
</script>

<style lang='less' scoped>
@import '../../../../static/css/curLocalpage.less';
@m:10px;
.mainm{

    .left{
      width:220px;
    }
    .right{
      flex:1;
      margin-left: @m;
    }
  }
.project-page{
  .paging{
    text-align: center;
    margin:0 25px 25px 25px;
  }
}

</style>
