<!-- mallDetail -->
<template>
  <div class='mallDetail'>
    <section class="wrap cur-local">
      <el-row type="flex"  align="middle" class="fwW">
        <el-col :sm="12">
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink('')">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink(210)">供应产品</a></el-breadcrumb-item>
            <el-breadcrumb-item>{{mallInfoData.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </section>

     <section class="simple wrap bd marginB">
      <el-row type="flex">
        <el-col class="left">
          <div class="box-img">

            <img :src="swiperImgFilter[curSwiper]" width="300" height="300" />
            <div class="swiper">
                <div v-swiper:mySwiper="swiperOption">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide box-lab" v-for="(item,i) in swiperImgFilter" :key="i"
                       :class="{cur:curSwiper == i}"
                        @click="curSwiper = i"
                      >
                        <img :src="item" alt="">
                      </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
            </div>
          </div>

          <!-- <div class="box-btn df">
            <div @click="follow" :style="{color:colorFollow}">
              <i class="icon iconfont icon-bqxin"></i>
              <span>{{isFollow ? '已关注' : '关注'}}</span>
            </div>
            <div class="share-box" @click="share" :style="{color:colorShare}">
              <i class="icon iconfont icon-fenxiang"></i>
              <span>分享</span>
              <div class="shareO df" v-show="isShare">
                <span class="icomy ico-webo" @click="shareWeBo"></span>
                <span class="icomy ico-qqzone" @click="shareQQKJ"></span>
              </div>
            </div>
            <div @click="speak" :style="{color:colorSpeak}">
              <i class="icon iconfont icon-yuetan"></i>
              <span>约谈</span>
            </div>
          </div> -->
        </el-col>
        <el-col class="right">
          <h1>{{mallInfoData.title}}</h1>
          <p class="title2">{{mallInfoData.desc}}</p>
          <div class="content df fwW">
            <div class="price df">
              <span class="lab">价格</span>
              <span class="cur">￥{{mallInfoData.price == 0 || mallInfoData.price == 'null' ? '面议' :mallInfoData.price}}</span>
            </div>
            <div class="price price-orign df">
              <span class="lab">原价</span>
              <span class="delete-line">￥{{mallInfoData.discounts}}</span>
            </div>
            <div class="block df">
              <span class="lab">规格</span>
              <span>{{mallInfoData.spec}}</span>
            </div>
            <div class="block df">
              <span class="lab lab2">发货地点</span>
              <span>{{mallInfoData.adr}}</span>
            </div>
          </div>
          <div class="content2 df fwW">
            <div class="colm">
              <span class="txt">起订量</span>
              <span>{{mallInfoData.beginNum}}</span>
              <span class="txt">{{mallInfoData.price == 'null' ? '面议' : mallInfoData.beginNum * mallInfoData.price + '元'}}</span>
            </div>
            <div class="colm2">
              <span class="txt">{{mallInfoData.num}}件可售</span>
              <el-input-number v-model="buyNum" @change="handleChange"  label="描述文字"></el-input-number>
            </div>
          </div>
          <div class="line"></div>
          <div class="box-btn">
            <button class="btn btn1" @click="curBuy">立即订购</button>
            <button class="btn btn2" @click="addCart">
              <i class="icon iconfont icon-cart1"></i>
              加入购物车
            </button>
            <el-dialog
              title="加入购物车"
              :visible.sync="dialogVisible"
              >
              <div class="addCart">
                <div>
                  <span>产品名称：</span>{{mallInfoData.title}}
                </div>
                <div>
                  <span>品位/规格：</span>{{mallInfoData.spec}}
                </div>
                <div>
                  <span>供应单价：</span>{{mallInfoData.price == 'null' || mallInfoData.price == 0 ? '面议' : mallInfoData.price}}
                </div>
                <div>
                  <span>剩余供应量：</span>{{mallInfoData.num}}
                </div>
                <div>
                  <span>起订量：</span>{{mallInfoData.beginNum}}
                </div>
                <div class="df">
                  <span>认购数量：</span>{{buyNum}}
                  <!-- <el-input class="inputmy" v-model="buyNum" placeholder="请输入内容"></el-input> -->
                </div>
                <div>
                  <span>认购总价：</span>{{mallInfoData.price == 'null' || mallInfoData.price == 0 ? '面议' : mallInfoData.price * buyNum}}
                </div>
              </div>
              <span slot="footer" class="dialog-footer">

                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submi">确 定</el-button>
              </span>
            </el-dialog>
          </div>
        </el-col>
      </el-row>
    </section>

    <el-row type="flex" class="box-leftright wrap">
      <el-col class="left">
        <Company-survey class="bd marginB" :data="baseInfoData.data"></Company-survey>
        <!--后期上 <Classify-mall class="bd marginB"></Classify-mall> -->
        <!-- 后期上<Groom-photo class="bd marginB"></Groom-photo> -->
        <Contact class="bd" :data="baseInfoData.data"></Contact>
      </el-col>
      <el-col class="right">
        <el-tabs type="border-card" class="marginB">
          <el-tab-pane label="产品详情">
            <div class="card card_com" v-html="mallInfoData.content == 'null' ? '无' : mallInfoData.content">

            </div>
          </el-tab-pane>
          <!-- <el-tab-pane label="规格参数">规格参数</el-tab-pane>
          <el-tab-pane label="运送说明">运送说明</el-tab-pane>
          <el-tab-pane label="退货换货">退货换货</el-tab-pane> -->
        </el-tabs>

        <!-- 后期上<div>
           <Header-card title="相关项目" class="bd">
              <ul class="relate-list df fwW">
                <li v-for="(item,i) in relateProducts" :key="i">{{item.name}}</li>
              </ul>
          </Header-card>
        </div> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Carousel from '~/components/carousel'
import CompanySurvey from '~/components/companySurvey'
import ClassifyMall from '~/components/classifyMall'
import Contact from '~/components/contact'
import GroomPhoto from '~/components/groomPhoto'
import HeaderCard from '~/components/headerCard'


import {mallInfo,addCart,cartList,cartListBig} from '~/assets/api/mall'
import { baseInfo } from '~/assets/api/company'
import { styleGood } from '~/assets/api/style'

import { getCookie,shareWB ,shareQQKJ} from '~/assets/utils/tool'

export default {
  head(){
    return {
      title:this.mallInfoData.title,
      meta:[
        {name:"keywords",content:this.baseInfoData.data.mainProduct},
        {name:'description',content:this.mallInfoData.desc},
      ]
    }
  },
  components: {
    Carousel,
    CompanySurvey,
    ClassifyMall,
    Contact,
    GroomPhoto,
    HeaderCard
  },
  data() {
    return {
      isFollow:false,
      isShare:false,
      isSpeak:false,
      activeName2: 'first',
      relateProducts:[{
        name:'小型压缩机'
      },{
        name:'空调压缩机'
      },{
        name:'微型压缩机'
      },{
        name:'无油压缩机'
      },{
        name:'谷轮压缩机'
      },{
        name:'螺杆式空气压缩机'
      },{
        name:'活塞式压缩机'
      }],
      swiperOption: {
        slidesPerView : 4,
        spaceBetween : 10,
      },
      curSwiper:'img',
      dialogVisible:false,
      buyNum:1,
      shopId:'',
    };
  },
  props:['qiyehegerenid'],
  created() {

  },
  mounted(){
    localStorage.setItem('shopId',this.mallInfoData.com_no)
    this.shopId = localStorage.getItem('shopId')
  },
  async asyncData(context){
    let store = context.store
    if( context.req && context.req.headers.cookie){
       var ck =  context.req && context.req.headers.cookie;
       var MC_UID = getCookie('MC_UID',ck)
    }
      let id = context.params.goodsid


      let request5Data = await mallInfo(id,MC_UID)
      let request3Data = await baseInfo(request5Data.data.com_no,MC_UID)
      let request4Data = await styleGood(request5Data.data.com_no)

      store.commit('baseInfoDataM',request3Data.data)
      store.commit('styleGoodM',request4Data.data)
      return {
        mallInfoData:request5Data.data,
        baseInfoData:request3Data,
      }



    // console.log(context.from.params.storeid)
    //   let shopId = context.from.params.storeid
    //   let id = context.params.goodsid

    //   let [
    //   request3Data,
    //   // request4Data,
    //   request5Data
    //   ] = await Promise.all([
    //     baseInfo(shopId),
    //     // styleGood('868308159016472576')，
    //     mallInfo(id)
    //   ])
    //   return {
    //     baseInfoData:request3Data,
    //     // getStyle:request4Data,
    //     mallInfoData:request5Data.data
    //   }
  },
  computed: {
    colorFollow(){
      return this.isFollow ? '#00a0e9' : '#AFAFAF'
    },
    colorShare(){
      return this.isShare ? '#00a0e9' : '#AFAFAF'
    },
    colorSpeak(){
      return this.isSpeak ? '#00a0e9' : '#AFAFAF'
    },
    swiperImgFilter(){
      return JSON.parse(this.mallInfoData.imgs)
    },
  },
  watch: {},
  methods: {
    async getAddCart(callback){
        await addCart(this.mallInfoData.id,this.buyNum,this.mallInfoData.catId == 8300 ? this.qiyehegerenid.userBaseVO.userId : this.qiyehegerenid.userBaseVO.companyId).then((res)=>{
          if(res.success){
            callback()
          }else{
            this.$message.error(res.errMsg);
          }
        })
    },
    async getCartList(callback){
        await cartList(this.mallInfoData.catId == 8300 ? this.qiyehegerenid.userBaseVO.userId : this.qiyehegerenid.userBaseVO.companyId).then((res)=>{
          if(res.success){
            callback(res)
          }else{
            this.$message.error(res.errMsg);
          }
        })
    },
    async getCartListBig(callback){
        await cartListBig(this.mallInfoData.catId == 8300 ? this.qiyehegerenid.userBaseVO.userId : this.qiyehegerenid.userBaseVO.companyId).then((res)=>{
          if(res.success){
            callback(res)
          }else{
            this.$message.error(res.errMsg);
          }
        })
    },
    // 找到订单id，再跳转最终结算页面
    findOid(res){
      let curGoods = res.data.filter((item)=>{
        return item.id == this.mallInfoData.id
      })
      let oid = curGoods[0].oid
      location = 'http://www.miningcircle.com/mall.do?cartSettle&oids='+ oid +'&submitType=mallprd'
    },
    follow(){
      this.isFollow = !this.isFollow
    },
    share(){
      this.isShare = !this.isShare
    },
    speak(){
      this.isSpeak = !this.isSpeak
    },
    handleChange(value) {
      console.log(value);
    },
    handleClick(tab, event) {
        console.log(tab, event);
    },
    addCart(){
       if(!getCookie('MC_UID')){
        window.location.href = 'http://member.miningcircle.com/login'
        return
      }
      if(this.buyNum < this.mallInfoData.beginNum){
        this.$message('购买数量不能小于起订量');
        return
      }
      this.dialogVisible = true


    },
    submi(){
      if(!getCookie('MC_UID')){
        window.location.href = 'http://member.miningcircle.com/login'
        return
      }
      if(this.buyNum < this.mallInfoData.beginNum){
        this.$message('购买数量不能小于起订量');
        return
      }
      // 加入购物车接口
      this.getAddCart(()=>{
        location = 'http://www.miningcircle.com/mall.do?cart&type=' + this.mallInfoData.catId
      })
      // 跳转-成功加入购物车页面
    },
    curBuy(){
      // 判断是否登录
      // 判断数量大于起订量
      if(this.buyNum < this.mallInfoData.beginNum){
        this.$message('购买数量不能小于起订量');
        return
      }
      if(!getCookie('MC_UID')){
        window.location.href = "http://member.miningcircle.com/login"
        return
      }
      this.getAddCart(()=>{
          if(this.mallInfoData.catId == 8300){
            this.getCartList((res)=>{
              this.findOid(res)
            })
          }else{
            this.getCartListBig((res)=>{
              this.findOid(res)
            })
          }
      })
      // 调加入购物车接口
      // 调购物车列表接口（区分大宗还是普通）目的拿到orderid传给结算页(购物车列表里的id等于商品id的话就取出订单id)
      // 跳转最终的结算页

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
    shareWeBo(){
      shareWB(window.location.href,this.mallInfoData.title,this.swiperImgFilter['img'])
    },
    shareQQKJ(){
      shareQQKJ(window.location.href,this.mallInfoData.title,this.swiperImgFilter['img'])
    }
  },
}
</script>

<style lang='less' scoped>
  @import '../../../static/css/curLocalpage.less';
  .mallDetail{
    .cur-local{
      border: none;
    }
    .simple{
      padding: 30px;
      .left{
        width:300px;
        margin-right: 60px;
        .box-img{
          margin-bottom: 16px;
          .swiper{
            img{
              width: 66px;
              height: 66px;
            }
            .cur{
              border:1px solid #00A0EA;
            }
          }
        }
        .carousel{
          margin-bottom:50px;
          img{
            width:66px;
            hegiht:66px;
          }
        }
        .box-btn{
          justify-content: space-around;
          font-size:14px;
          .share-box{
            position:relative;
            .shareO{
              border: 1px solid rgb(0, 176, 236);
              border-radius: 5px;
              position: absolute;
              z-index: 999;
              top: 15px;
              background: #fff;
              top: 27px;
              .ico-qqzone{
                background: url('../../../static/imgs/ico/ico-qqzone.png')
              }
              .ico-webo{
                background: url('../../../static/imgs/ico/weibo.png')
              }
              .icomy{
                display: inline-block;
                width: 50px;
                height: 50px;
                border: 1px #DAD9D9 solid;
                border-radius: 100px;
                margin: 10px;
              }
            }
          }
        }

      }
      .right{
        h1{
          font-size:18px;
          font-weight:bold;
          color:rgba(51,51,51,1);
          line-height:24px;
        }
        .title2{
          font-size:14px;
          color:rgba(112,112,112,1);
          line-height:36px;
        }
        .content{
          font-size:14px;
          background:rgba(248,246,244,1);
          padding:20px;
          line-height:36px;
          flex:0 0 600px;
          .lab{
            flex:0 0 56px;
            margin-right: 26px;
            text-align:right;
          }
          .delete-line{
            text-decoration:line-through;
          }
          .price{
            width:50%;
            .cur{
              color:#FF7300;
            }
          }
          .block{
            width:100%;
          }
        }
        .content2{
          font-size:14px;
          margin-top: 20px;
          .colm{
            min-width: 100px;
            line-height: 40px;
            .txt{
              padding:0 35px;
            }
          }
          .colm2{
            .txt{
              margin-right: 35px;
            }
          }
        }
        .line{
          width:72%;
          height:1px;
          background:rgba(237,237,237,1);
          margin: 20px 0;
        }
        .box-btn{
          font-size: 18px;
          .btn{
           border-radius:5px;
          }
          .btn1{
            color:#fff;
            background: #00A0EA;
            padding: 10px 40px;
            margin: 0 4% 0 10%;
          }
          .btn2{
            color:#00A0EA;
            border:1px solid#00A0EA;
            padding: 10px 20px;
          }
          .el-dialog__wrapper .el-dialog__body .addCart{
            font-size: 14px;
            line-height: 40px;
            span{
              width: 12%;
              display: inline-block;
              text-align: right;
            }
            .inputmy{
              width: 88%;
            }
          }
        }
      }
    }
    .box-leftright{
      .left{
        width:220px;
        margin-right: 10px;
      }
      .right{
        width: 76%;
        .card{
          padding: 15px 70px;
          line-height: 28px;
          width: 100%;
          p{
            img{
              width: 100% !important;
            }
          }

        }
        .relate-list{
          font-size: 14px;
          padding: 15px 45px;
          li{
            flex: 0 0 20%;
            min-width: 120px;
            line-height:34px;
          }
        }
      }
    }
  }
</style>
