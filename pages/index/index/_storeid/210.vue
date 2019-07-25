<!--mallListPage  -->
<template>
  <div class='mall-list'>
    <section class="wrap cur-local">
      <el-row type="flex"  align="middle" class="fwW">
        <el-col :sm="12">
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item>供应产品</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <!-- <el-col class="search" :sm="12">
          <input type="text" placeholder="请输入关键字搜索..."/><button class="btn">搜本店</button>
        </el-col> -->
      </el-row>
    </section>

    <el-main class="mainm wrap">
      <el-row class="box-leftright">
        <el-col class="left" v-show="showLeft">
          <Company-survey class="bd marginB" :data="baseInfoData.data"></Company-survey>
          <!--后期上 <Classify-mall class="bd marginB"></Classify-mall> -->
          <!--后期上 <Groom-photo class="bd marginB"></Groom-photo> -->
          <Contact class="bd" :data="baseInfoData.data"></Contact>
        </el-col>

        <el-col class="right">
          <Header-card title="全部分类" class="bd">
            <!-- <Classify-mallall></Classify-mallall> -->
            <div v-if="mallData">
              <Filter-my @saleNum="saleNum" @dateO='dateO' @priceO='priceO' @priceF='priceF'></Filter-my>
              <Product :data="mallData.mallBOS"></Product>
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
  </div>
</template>

<script>
import CompanySurvey from '~/components/companySurvey'  //公司概况
import ClassifyMall from '~/components/classifyMall'
import GroomPhoto from '~/components/groomPhoto'
import Contact from '~/components/contact'
import ClassifyMallall from '~/components/classifyMallall'
import HeaderCard from '~/components/headerCard'
import FilterMy from '~/components/filter'
import Product from '~/components/product'
import { groomMall,mallList } from '~/assets/api/mall'
import { myMixin } from '~/mixin/mixin'
// 数据
import { baseInfo } from '~/assets/api/company'

import { mapState } from 'vuex'
export default {
  components: {
    CompanySurvey,
    ClassifyMall,
    GroomPhoto,
    Contact,
    ClassifyMallall,
    HeaderCard,
    FilterMy,
    Product
  },
  data() {
    return {
      mallData:[],
      queryCategory:0,
      queryType:1,
      pageNum:1,
      numPerPage:12,
      totalCount:0,
      shopId:this.$route.params.storeid
    };
  },
  mixins:[myMixin],
  created() {
    // this.getDate()
  },
  mounted(){
    if(this.mallData){
      this.totalCount = this.mallData.totalCount
    }
  },
  beforeUpdate(){

  },
  updated(){

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
        mallList(context.params.storeid,0,1,1,12)
      ])

      return {
        baseInfoData:request3Data,
        // getStyle:request4Data,
        mallData:request5Data.data,
      }
  },
  computed: mapState([
    'shopId'
  ]),
  watch: {},
  methods: {
    async getDate() {

      const { data} = await mallList(this.shopId,this.queryCategory,this.queryType,this.pageNum,this.numPerPage)
      this.mallData = data
      this.totalCount = this.mallData.totalCount
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pageNum = val
      this.getDate()
    },
    saleNum(val){
      if(val){
        this.queryType = 1
      }else{
        this.queryType = 2
      }

      this.getDate()
    },
    dateO(val){
      if(val){
        this.queryType = 3
      }else{
        this.queryType = 4
      }

      this.getDate()
    },
    priceO(val){
      if(val){
        this.queryType = 5
      }else{
        this.queryType = 6
      }

      this.getDate()
    },
    priceF(val){
      this.mallData = this.mallData.filter((item,index,arr)=>{
        return item.price >= val.minPrice && item.price <= val.maxPrice
      })
      this.totalCount = this.mallData.length
      return this.mallData
    },
    toLink(){
      this.$store.commit('navActiveM','')
      this.$router.push({
          path:`/index/${this.shopId}`
      })
    }
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
      margin-left: @m;
    }
  }
.mall-list{
  .paging{
    text-align: right;
    margin:0 25px 25px 25px;
  }
}

</style>
