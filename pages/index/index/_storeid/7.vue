<!-- 联系方式 -->
<template>
  <div class='contact-page'>
    <section class="wrap cur-local">
      <el-row type="flex"  align="middle" class="fwW">
        <el-col :sm="12">
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink('')">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item>联系方式</el-breadcrumb-item>
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
          <Company-survey class="bd marginB" :data="baseInfoData"></Company-survey>
          <!--后期上 <Classify-mall class="bd marginB"></Classify-mall> -->
          <!--后期上 <Groom-photo class="bd marginB"></Groom-photo> -->
          <Contact class="bd" :data="baseInfoData"></Contact>
        </el-col>
        <el-col class="right">
          <section>
            <Header-card title="联系我们" class="bd">
              <div class="df jcSb box-info">
              <div class='info'>
               <div>
                  <span>联系人：</span>{{baseInfoData.contactPerson}}
                </div>
                <div>
                  <span>手&nbsp;&nbsp;&nbsp;机：</span>{{baseInfoData.contactMobile}}
                </div>
                <div>
                  <span>电&nbsp;&nbsp;&nbsp;话：</span>{{baseInfoData.contactTel}}
                </div>
                <div>
                  <span>地&nbsp;&nbsp;&nbsp;址：</span>{{baseInfoData.country}} {{baseInfoData.province}} {{baseInfoData.city}}
                </div>
                <div>
                  <span>邮&nbsp;&nbsp;&nbsp;箱：</span>{{baseInfoData.contactEmail}}
                </div>
                <div>
                  <span>公司主页：</span>
                  <strong>{{baseInfoData.website}}</strong>
                </div>
                <!-- <button class="btn" @click="leavMess">给我留言</button> -->
              </div>
              <div  class='qrcode-box' >
                  <div class='qrcode' id="qrcode">
                    <div class="img-box">
                      <img :src="baseInfoData.logo" alt="" width="46" height="46">
                    </div>
                  </div>
                  <p>扫一扫进入手机旺铺</p>

              </div>
              </div>
            </Header-card>
          </section>
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
import HeaderCard from '~/components/headerCard'

import { myMixin } from '~/mixin/mixin'

import { baseInfo } from '~/assets/api/company'

export default {
  components: {
    CompanySurvey,
    ClassifyMall,
    GroomPhoto,
    Contact,
    HeaderCard,
  },
  mixins:[myMixin],
  data() {
    return {
      qrcodeConfig:{},
      shopId:this.$route.params.storeid
    };
  },
  async asyncData(context){
      let [
      request3Data,
      // request4Data,
      ] = await Promise.all([
        baseInfo('868308159016472576'),
        // styleGood('868308159016472576')，
      ])
      return {
        baseInfoData:request3Data.data,
        // getStyle:request4Data,
      }
  },
  created() {

  },
  mounted(){
    this.qrcodeConfig = new QRCode('qrcode',{
      width:165,
      height:165,
      correctLevel:QRCode.CorrectLevel.H,
      text:location.href
    })
  },
  computed: {

  },
  watch: {},
  methods: {
    toLink(){
      this.$store.commit('navActiveM','')
      this.$router.push({
          path:`/index/${this.shopId}.html`
      })
    },
    leavMess(){
      // 左侧已经有留言了，为什么还要留言
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
.contact-page{
  .box-info{
    padding: 40px;
    .info{
      font-size:16px;
      line-height:32px;
      strong{
        color: #00A0E9
      }
      .btn{
        padding: 10px 40px;
        border:1px solid rgba(170,170,170,1);
        border-radius:5px;
        font-size:16px;
        color:rgba(117,117,117,1);
        margin-top: 20px;
      }
    }
    .qrcode-box{
      .qrcode{
        position: relative;
      }
      p{
        margin-top: 10px;
        text-align: center;
      }
      .img-box{
        position: absolute;
        z-index: 999;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
      }
    }
  }

}

</style>
