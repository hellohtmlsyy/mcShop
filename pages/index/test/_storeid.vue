<!-- 首页 -->
<template>
  <div class='home'>
    test
  </div>
</template>

<script>
import CompanySurvey from '~/components/companySurvey'
import CompanyIntro from '~/components/companyIntro'
import ClassifyMall from '~/components/classifyMall'
import GroomPhoto from '~/components/groomPhoto'
import Contact from '~/components/contact'
import Product from '~/components/product'
import Mineral from '~/components/mineral'
import CompanyQualifica from '~/components/companyQualifica'
import { groomMall } from '~/assets/api/mall'

export default {
  components: {
    CompanySurvey,
    CompanyIntro,
    ClassifyMall,
    GroomPhoto,
    Contact,
    Product,
    Mineral,
    CompanyQualifica
  },
  data() {
    return {
      pageNum:1,
      numPerPage:10,
      getStyle:''
    };
  },
  head(){
    return {
      title:'矿业圈公司',
      meta:[
        {hid:'description',name:'keywords',content:'矿业圈,MININGCIRCLE,企业商品列表,矿业商城,商城,购物,网上购物,网上商城,互联网金融,投资金条,招金金条,矿石,矿业贸易,国际贸易,国内贸易'},
        {hid:'description',name:'description',content:'矿业圈-MiningCircle,MININGCIRCLE.COM-专业的矿业综合平台,集信息,资讯,招聘,培训,网上平台交易,金融,投资于一身,为中国矿业资源乃至世界资源的流通服务,为您在矿业资源领域提供最便捷最优质的服务。'},
      ]
    }
  },
  created() {

  },
  mounted(){

  },
  computed: {

  },
  async asyncData(context){
      let {data} = await groomMall(1,5)
      return {groomMallList:data}
  },
  // async asyncData(){
  //     let {data} = await styleGood('904114255928758273')
  //      return {getStyle:data}
  // },
  methods: {

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
