<!-- 会展 -->
<template>
  <div class='meeting-page'>
    <section class="wrap cur-local">
      <el-row type="flex"  align="middle" class="fwW">
        <el-col :sm="12">
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink('')">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item>行业会展</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <!-- <el-col class="search" :sm="12">
          <input type="text" placeholder="请输入关键字搜索..."/><button class="btn">搜本店</button>
        </el-col> -->
      </el-row>
    </section>

    <el-row class="box-leftright wrap mainm" type="flex">
        <el-col class="left">
          <Company-survey class="bd marginB" :data="baseInfoData.data"></Company-survey>
          <!--后期上 <Classify-mall class="bd marginB"></Classify-mall> -->
          <!--后期上 <Groom-photo class="bd marginB"></Groom-photo> -->
          <!-- <Contact class="bd" :data="baseInfoData.data"></Contact> -->
        </el-col>
        <el-col class="right">
          <Header-card title="矿业会展" class="bd">
            <div v-if="meetingList">
              <Meeting class="marginB" :data="meetingList.meetingBOS"></Meeting>
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
  </div>
</template>

<script>
import CompanySurvey from '~/components/companySurvey'
import Contact from '~/components/contact'
import Meeting from '~/components/meeting'
import HeaderCard from '~/components/headerCard'

import { baseInfo } from '~/assets/api/company'
import { meetingList } from '~/assets/api/meeting'
import { getCookie } from '~/assets/utils/tool'
export default {
  components: {
    CompanySurvey,
    Contact,
    Meeting,
    HeaderCard
  },
  data() {
    return {
      pageNum:1,
      numPerPage:12,
      totalCount:0,
      shopId:'',
      baseInfoData:''
    };
  },
  mounted(){
    this.shopId = localStorage.getItem('shopId')
    if(this.meetingList){
      this.totalCount = this.meetingList.totalCount
    }
  },
  // validate ({ params }) {
  //   this.getBaseInfo()
  //   // return /^\d+$/.test(params.id)
  // },
   async asyncData(context){
     if( context.req && context.req.headers.cookie){
       var ck =  context.req && context.req.headers.cookie;
       var MC_UID = getCookie('MC_UID',ck)
    }
     var error = context.error
     try{
       let shopId = context.params.storeid
        let [
        request3Data,
        // request4Data,
        request5Data
        ] = await Promise.all([
          baseInfo(shopId,MC_UID),
          // styleGood('868308159016472576')，
          meetingList(shopId,1,12)
        ])
        // .then(res=>{
        //   if(!res[0].success){
        //     console.log(res[0].errMsg)
        //     return
        //   }
        //   if(!res[1].success){
        //     console.log(res[1].errMsg)
        //     return
        //   }

        //   return res
        // })

        return {
          baseInfoData:request3Data,
          // getStyle:request4Data,
          meetingList:request5Data.data,
        }
     }catch(err){
       return error({ message: '页面找不到', statusCode: 404 })
     }

  },
  created() {

  },
  computed: {

  },
  watch: {},
  methods: {

    async getDate() {
      const { data} = await meetingList(this.shopId,this.pageNum,this.numPerPage)
      this.meetingList = data
    },
    handleCurrentChange(val) {
      this.pageNum = val
      this.getDate()
    },
    handleSizeChange(){

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
.meeting-page{
  .paging{
    text-align: center;
    margin:0 25px 25px 25px;
  }
}

</style>
