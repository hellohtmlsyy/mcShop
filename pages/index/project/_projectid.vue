<!-- 项目详情页 -->
<template>
  <div class="project-detailsP">
    <section class="wrap cur-local">
      <el-row type="flex" al ign="middle" class="fwW">
        <el-col>
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink('')">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink(4)">矿业项目</a></el-breadcrumb-item>
            <el-breadcrumb-item>{{projectInfoData.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </section>

    <section class="simple wrap bd marginB">
      <el-row type="flex">
        <el-col class="left">
          <img :src="projectInfoData.img" alt width="320" height="200">
          <div class="btn-box df">
            <!-- <div>
              <i class="icon iconfont icon-bqxin"></i>
              <span>关注</span>
            </div>
            <div>
              <i class="icon iconfont icon-fenxiang"></i>
              <span>分享</span>

            </div>
            <div>
              <i class="icon iconfont icon-yuetan"></i>
              <span>约谈</span>
            </div> -->
            <!-- <div @click="inverst">
              <i class="icon iconfont icon-touzi"></i>
              <span>预约投资</span>
              <el-dialog
                title="我要预约投资"
                :visible.sync="dialogVisible"
                >
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <el-form-item label="真是姓名" prop="contactPerson">
                    <el-input v-model="ruleForm.contactPerson" placeholder="真实姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="计划总投资额(万)" prop="price">
                    <el-input v-model="ruleForm.price" placeholder="投资额度最小投资额的倍数"></el-input>
                  </el-form-item>
                  <el-form-item label="币种" prop="typeP">
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in ruleForm.typeP"
                        :key="item.key"
                        :label="item.value"
                        :value="item.key">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="submi">确 定</el-button>
                </span>
              </el-dialog>
            </div> -->
          </div>
        </el-col>
        <el-col class="right">
          <h1>{{projectInfoData.title}}</h1>
          <div class="bling-box">
            <div class="df jcSb aiC">
              <span class="title">项目亮点</span>
              <div v-if="projectInfoData.downUrl !== 'null'">
                <a class="downLoad" :href="projectInfoData.downUrl && projectInfoData.isCharge == 'isPay' ? projectInfoData.downUrl : ''" download=""
                 v-show="projectInfoData.downUrl && projectInfoData.isCharge == 'isPay'">下载项目资料</a>
                <a class="downLoad" href="javascript:void(0)"
                v-show="projectInfoData.downUrl && projectInfoData.isCharge == 'noPay'" @click="fenqingkuang" >下载项目资料</a>
              </div>
            </div>
            <div class="scroll">
              <p>{{projectInfoData.desc}}</p>
            </div>
          </div>
          <div class="lab-box">
            <div class="df fwW">
              <div class="block">
                <span class="lab">转让价格</span>
                <span class="light">￥{{projectInfoData.price == 0 || projectInfoData.price == 'null' ? '面议' : projectInfoData.price}}</span>
              </div>
              <div class="block txt-indent">
                <span class="lab">矿种</span>
                <span>{{projectInfoData.type}}</span>
              </div>
            </div>
            <div class="df fwW">
              <div class="block">
                <span class="lab">转让股比</span>
                <span>{{projectInfoData.ratio}}</span>
              </div>
              <div class="block txt-indent">
                <span class="lab">阶段</span>
                <span>{{projectInfoData.stage}}</span>
              </div>
            </div>
            <div class="df fwW">
              <div class="block">
                <span class="lab">原矿品位</span>
                <span>{{projectInfoData.taste}}</span>
              </div>
              <div class="block txt-indent">
                <span class="lab">地区</span>
                <span>{{projectInfoData.adr}}</span>
              </div>
            </div>
            <div class="df fwW">
              <div class="block">
                <span class="lab">资源储量</span>
                <span>{{projectInfoData.reserve}}</span>
              </div>
              <div class="block">
                <span class="lab">发布日期</span>
                <span>{{projectInfoData.date}}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>

    <el-row type="flex" class="box-leftright wrap detail">
      <el-col class="left">
        <Company-survey class="bd marginB" :data="baseInfoData.data"></Company-survey>
        <!--后期上 <Classify-mall class="bd marginB"></Classify-mall> -->
        <!-- 后期上<Groom-photo class="bd marginB"></Groom-photo> -->
        <Contact class="bd" :data="baseInfoData.data"></Contact>
      </el-col>
      <el-col class="right">
        <el-tabs type="border-card" class="marginB">
          <el-tab-pane label="项目详情">
            <div class="card card_com" v-html="projectInfoData.content">
            </div>
          </el-tab-pane>
        </el-tabs>

        <!-- <div v-show="false">
          <Header-card title="店内其他商品">

          </Header-card>
        </div> -->

        <!-- <div>
           <Header-card title="相关产品" class="bd">
              <ul class="relate-list df fwW">
                <li v-for="(item,i) in relateProducts" :key="i">{{item.name}}</li>
              </ul>
          </Header-card>
        </div> -->
      </el-col>
    </el-row>
    <!-- {{baseInfoData}}----info -->
    <!-- {{projectInfoData}}  ---pro -->
  </div>
</template>

<script>
import CompanySurvey from '~/components/companySurvey'
import ClassifyMall from '~/components/classifyMall'
import Contact from '~/components/contact'

import { baseInfo } from '~/assets/api/company'
import { projectInfo } from '~/assets/api/project'
import { meetingList } from '~/assets/api/meeting'
import { styleGood } from '~/assets/api/style'

import { getCookie } from '~/assets/utils/tool'
export default {
  // head(){
  //   return {
  //     title:this.projectInfoData.title,
  //     meta:[
  //       {name:"keywords",content:this.baseInfoData.data.mainProduct},
  //       {name:'description',content:this.projectInfoData.desc},
  //     ]
  //   }
  // },
  components: {
    CompanySurvey,
    ClassifyMall,
    Contact
  },
  data() {
    return {

      dialogVisible:false,
      ruleForm:{
        contactPerson:'',
        price:'',
        typeP:[{
					key: 'CNY人民币',
					value: 'CNY人民币'
				}, {
					key: 'USB美元',
					value: 'USB美元'
				}, {
					key: 'EUR欧元',
					value: 'EUR欧元'
				}, {
					key: 'HKD港币',
					value: 'HKD港币'
				}, {
					key: 'GBP英镑',
					value: 'GBP英镑'
				}, {
					key: 'JPY日元',
					value: 'JPY日元'
				}, {
					key: 'KRW韩元',
					value: 'KRW韩元'
        }],

      },
      rules:{
        contactPerson:[
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
        ],
        price:[
          { required: true, message: '请输入计划总投资额', trigger: 'blur' },
        ],
      },
      value:'',
      shopId:'',

    }
  },
  created() {},
  mounted(){
    localStorage.setItem('shopId',this.projectInfoData.com_no)
    this.shopId = localStorage.getItem('shopId')

  },
  async asyncData(context){
    let error = context.error
    let store = context.store
    if( context.req && context.req.headers.cookie){
       var ck =  context.req && context.req.headers.cookie;
       var MC_UID = getCookie('MC_UID',ck)
    }
      let id = context.params.projectid

      try{
        let request5Data = await projectInfo(id,MC_UID)

        let request3Data = await baseInfo(request5Data.data.com_no,MC_UID)
        let request4Data = await styleGood(request5Data.data.com_no)
        store.commit('baseInfoDataM',request3Data.data)
        store.commit('styleGoodM',request4Data.data)
        return {
          projectInfoData:request5Data.data,
          baseInfoData:request3Data,
        }
      }catch(err){
        return error({ message: '页面找不到', statusCode: 404 })
      }
      // let request5Data = await projectInfo(id,MC_UID)
      // .catch((e) => {
      //   console.log('kdjflkasjflkdjsalkfjdsaklfj')
      //   return error({ statusCode: 404, message: 'Post not found' })

      // })
      // let request3Data = await baseInfo(request5Data.data.com_no).catch((e) => {
      //   console.log('kdjflkasjflkdjsalkfjdsaklfj-----222')
      //   return error({ statusCode: 404, message: 'Post not found' })

      // })

      // return {
      //   projectInfoData:request5Data.data,
      //   baseInfoData:request3Data,
      // }
  },

  computed: {

  },
  watch: {},
  methods: {

    fenqingkuang(){
      this.tankuang()
    },
    inverst(){

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
    tankuang(){
      const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '此项目为热门项目，是否下载全部资料并享受矿业圈提供的1对1对接服务？'),
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              location = `http://www.miningcircle.com/yi/project/order.do?orderDetail&yiId=${this.projectInfoData.id}`
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {

        });
    },
  }
}
</script>

<style lang='less' scoped>
@import '../../../static/css/curLocalpage.less';
.project-detailsP {
  .simple {
    padding: 30px;
    .left {
      width: 320px;
      margin-right: 40px;
      .btn-box {
        justify-content: space-around;
        font-size: 14px;
        margin-top: 25px;
      }
    }
    .right {
      h1 {
        font-size: 18px;
        line-height: 36px;
      }
      .bling-box {
        background: rgba(248, 246, 244, 1);
        padding: 13px;
        font-size: 14px;
        color: rgba(112,112,112,1);
        line-height:26px;
        .title {
          color: #ff7300;
          font-size: 16px;
          font-weight: bold;
          line-height: 24px;
        }
        .downLoad {
          color: #ff7300;
          font-size: 14px;
          border: 1px solid rgba(255, 115, 0, 1);
          border-radius: 12px;
          line-height: 24px;
          padding: 0 12px;
        }
        .scroll {
          overflow-y: scroll;
          margin-top: 5px;
          p {
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
      .lab-box {
        font-size: 14px;
        margin: 23px 0 30px;
        .block{
          min-width: 200px;
          line-height:30px;
          flex: 1;
          .lab {
            margin-right: 16px;
          }
          .light {
            color: #ff7300;
            font-size: 20px;
          }
        }
      }
      .txt-indent{
        text-indent: 26px;
      }
    }
  }
  .box-leftright{
    .left{
        width:220px;
        margin-right: 10px;
    }
    .right{
      .el-tab-pane .card{
          padding: 15px 70px;

      }
    }
  }
}
</style>
