<!-- 相册列表 -->
<template>
  <div class='photoList-page'>
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
        <!-- <el-col class="search" :sm="12">
          <input type="text" placeholder="请输入关键字搜索..."/><button class="btn">搜本店</button>
        </el-col> -->
      </el-row>
    </section>

    <el-main class="mainm wrap">
      <el-row class="box-leftright">
        <el-col class="left">
          <!-- <Company-survey class="bd marginB"></Company-survey> -->
          <Classify-mall class="bd marginB"></Classify-mall>
          <Groom-photo class="bd marginB"></Groom-photo>
          <Contact class="bd"></Contact>
        </el-col>
        <el-col class="right">
          <HeaderCard title="公司相册" class="bd">
            <div class="content">
              <Photo-list></Photo-list>
              <div class="paging">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
              </el-pagination>
            </div>
          </div>
          </HeaderCard>
        </el-col>
      </el-row>
      data{{mallData}}
    </el-main>
    <nuxt-link to="/photo/123">
      <button>点击进入相册详情</button>
    </nuxt-link>
  </div>
</template>

<script>
import HeaderCard from '~/components/headerCard'
import CompanySurvey from '~/components/companySurvey'  //公司概况
import ClassifyMall from '~/components/classifyMall'
import GroomPhoto from '~/components/groomPhoto'
import Contact from '~/components/contact'
import PhotoList from '~/components/photoList'
export default {
  components: {
    CompanySurvey,
    ClassifyMall,
    GroomPhoto,
    Contact,
    HeaderCard,
    PhotoList
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  created() {

  },
  computed: {

  },
  watch: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pageNum = val
      this.getDate()
    },
  },
}
</script>

<style lang='less' scoped>
@import '../../../../static/css/curLocalpage.less';
@m:10px;
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
.photoList-page{
  .content{
    padding: 25px;
    .paging{
      text-align: center;
      margin-top: 30px;
    }
  }

}
</style>
