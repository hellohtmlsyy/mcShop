<!-- 公司介绍页 -->
<template>
  <div class='company-intro-page'>
   test
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
      // groomMallList:[]
    };
  },
  head(){
    return {
      title:'旗舰店',
      meta:[
        {hid:'description',name:'keywords',content:'矿业圈,MININGCIRCLE,企业商品列表,矿业商城,商城,购物,网上购物,网上商城,互联网金融,投资金条,招金金条,矿石,矿业贸易,国际贸易,国内贸易'},
        {hid:'description',name:'description',content:'矿业圈-MiningCircle,MININGCIRCLE.COM-专业的矿业综合平台,集信息,资讯,招聘,培训,网上平台交易,金融,投资于一身,为中国矿业资源乃至世界资源的流通服务,为您在矿业资源领域提供最便捷最优质的服务'}
      ]
    }
  },
  created() {

  },
  mounted(){
      // this.getGroomMall()
  },
  computed: {

  },
  asyncData(context){
      console.log(context)

  },
  methods: {
    // async getGroomMall(){
    //     let {data} = await groomMall(this.pageNum,this.numPerPage)
    //     this.groomMallList = data.data.list
    // },
  },
  watch: {},
}
</script>

<style lang='less' scoped>
@color:#00A0E9;
@m:10px;
.el-main{
  padding:0
}
.box-leftright{
  display:flex;
}
.cur-local{
    font-size:14px;
    padding: 10px 30px 10px 12px;
    border:1px solid rgba(181, 181, 181, 1);
    margin-top:@m;
    margin-bottom:@m;
    .search{
      text-align:right;
      input{
        width:68%;
        border:1px solid @color;
        height:30px;
        padding-left: 8px;
      }
      .btn{
        background-color:@color;
        color:#fff;
        padding: 5px 15px;
      }
    }
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
