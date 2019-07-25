<!--  -->
<template>
  <div class='meeting-detail'>
    <section class="wrap cur-local">
      <el-row type="flex" al ign="middle" class="fwW">
        <el-col>
          <span>当前位置:</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="dIb">
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink('')">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:void(0)" @click="toLink(1)">行业会展</a></el-breadcrumb-item>
            <el-breadcrumb-item>{{meetingInfo.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </section>

    <section class="simple wrap bd marginB">
      <el-row type="flex">
        <el-col class="left" style="display:block">
          <!-- {{shopId}} -->
          <img :src="meetingInfo.img" alt width="320" height="200">
          <!-- <div class="btn-box df">
            <div>
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
            </div>
          </div> -->
        </el-col>
        <el-col class="right">
          <h1>{{meetingInfo.title}}</h1>
          <div class="intro">
              <p>{{meetingInfo.desc}}</p>
          </div>
          <div class="lab-box">
            <div class="df fwW">
              <div class="block block-2">
                <span class="lab mar40">时间</span>
                <span class="minW300">
                    {{meetingInfo.beginDate}} —— {{meetingInfo.endDate}}
                </span>
              </div>
              <div class="block txt-indent block-2">
                <span class="lab mar40">地点</span>
                <span>{{meetingInfo.adr}}</span>
              </div>
            </div>
            <div class="df fwW">
              <div class="block block-2">
                <span class="lab mar12">售票截止</span>
                <span>{{meetingInfo.date}}</span>
              </div>
              <div class="block txt-indent block-2">
                <span class="lab mar40">规模</span>
                <span>{{meetingInfo.scale}}人</span>
              </div>
            </div>
            <div class="block">
                <span class="lab mar40">票种</span>
                <span class="tickettype-val">{{meetingInfo.type}}</span>
            </div>
            <div class="block">
              <span class="lab mar40">售价</span>
              <span class="light">￥{{meetingInfo.price}}</span>
            </div>
            <div class="block">
              <span class="lab mar40">数量</span>
              <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="0" size="mini"></el-input-number>张
            </div>
          </div>
          <div class="box-btn">
              <el-button class="btn btn1"  :loading="loading3" @click="curBuy">{{loading3 ? '提交中...' : '立即报名'}}</el-button>
              <button class="btn btn2" @click="signUp">
                <i class="icon iconfont icon-cart1"></i>
                加入购物车
              </button>

              <el-dialog
                title="报名流程"
                :visible.sync="dialogVisible"
                width="80%"
                >

                <div class="title">订购展票单</div>
                <el-table
                :data="[info]"
                style="width: 100%"
                class="formmy"
                >
                <el-table-column
                  prop="title"
                  label="商品名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="单价"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="num1"
                  label="数量">
                </el-table-column>
                <el-table-column
                  prop="ammontPrice"
                  label="总价">
                </el-table-column>
                <el-table-column
                  prop="beginDate"
                  label="展会开始时间">
                </el-table-column>
                <el-table-column
                  prop="endDate"
                  label="展会结束时间">
                </el-table-column>
                <el-table-column
                  prop="adr"
                  label="展会地点">
                </el-table-column>
              </el-table>

              <div class="title">订购人操作</div>
              <el-table
              :data="peopleData.obj"
              style="width: 100%"
               class="formmy"
               border="true"
               @selection-change="selectP">
              <el-table-column
                type="selection"

                >
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                min-width="200px"
                resizable="true">
              </el-table-column>
              <el-table-column
                prop="mobile"
                label="手机"
                min-width="200px"
                resizable="true">
              </el-table-column>
              <el-table-column
                prop="email"
                label="邮箱"
                min-width="200px"
                resizable="true">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <!-- <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="addPForm-box">
              <div class="title">新增报名人</div>
              <el-form ref="addPForm" :model="addPForm" label-width="80px" :rules="rules" class="addPForm">
                <el-col :span='6'>
                <el-form-item label="姓名" prop="mtiname" >
                  <el-input v-model="addPForm.mtiname"></el-input>
                </el-form-item>
                </el-col>
                <el-col :span='6'>
                <el-form-item label="手机" prop="mtimobile">
                  <el-input v-model="addPForm.mtimobile"></el-input>
                </el-form-item>
                </el-col>
                <el-col :span='6'>
                <el-form-item label="邮箱" prop="mtiemail">
                  <el-input v-model="addPForm.mtiemail"></el-input>
                </el-form-item>
                </el-col>
                <el-col :span='1'>
                <el-form-item>
                  <el-button type="primary"  plain @click="savePeople">保存</el-button>
                </el-form-item>
                </el-col>
              </el-form>
              </div>
                <span slot="footer" class="dialog-footer">

                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <!-- <el-button type="primary" >加载中</el-button> -->
                  <el-button type="primary" :loading="loading2" @click="submi">{{loading2 ? '提交中...' : '提 交'}}</el-button>
                </span>
              </el-dialog>
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
          <el-tab-pane label="会议详情">
            <div class="card card_com" v-html="meetingInfo.content">

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
  </div>
</template>

<script>
import CompanySurvey from '~/components/companySurvey'
import ClassifyMall from '~/components/classifyMall'
import Contact from '~/components/contact'

import { baseInfo } from '~/assets/api/company'
import { cartList } from '~/assets/api/mall'
import { styleGood } from '~/assets/api/style'

import { meetingInfo,peopleList,addPeople,delPeople,isTicket,addCartMeeting} from '~/assets/api/meeting'
import { getCookie } from '~/assets/utils/tool'
export default {
  head(){
    return {
      title:this.meetingInfo.title,
      meta:[
        {name:"keywords",content:this.baseInfoData.data.mainProduct},
        {name:'description',content:this.meetingInfo.desc},
      ]
    }
  },
  components: {
    CompanySurvey,
    ClassifyMall,
    Contact
  },
  props:['qiyehegerenid'],
  data() {
    return {
      num1:1,
      dialogVisible:false,
      tableData3: [{
          date: '2016-05-02',
          'name': '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      peopleData:'',
      addPForm:{
        mtiname:'',
        mtimobile:'',
        mtiemail:''
      },
      ticketNum:'',
      shopId:'',
      rules:{
          mtiname: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            // {pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:'邮箱填写不正确'}
          ],
          mtimobile:[
            { required: true, message: '请输入电话', trigger: 'blur' },
            {pattern:/^1\d{10}$/,message:'请填写11位数字的手机号码'}
          ],
          mtiemail:[
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            {pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:'邮箱填写不正确'}
          ],
      },
      loading2:false,
      loading3:false,
      selectPArr:[],
      curDel:'',

    };
  },
  async asyncData(context){
    if( context.req && context.req.headers.cookie){
       var ck =  context.req && context.req.headers.cookie;
       var MC_UID = getCookie('MC_UID',ck)
    }
      let id = context.params.meetingid
      let store = context.store

      let request5Data = await meetingInfo(id)
      let request3Data = await baseInfo(request5Data.data.com_no,MC_UID)
      let request4Data = await styleGood(request5Data.data.com_no)
      store.commit('baseInfoDataM',request3Data.data)
      store.commit('styleGoodM',request4Data.data)
      return {
        meetingInfo:request5Data.data,
        baseInfoData:request3Data,
      }
  },
  created() {

  },
  mounted(){
    localStorage.setItem('shopId',this.meetingInfo.com_no)
    this.shopId = localStorage.getItem('shopId')
  },
  computed: {
    info(){
      this.$set(this.meetingInfo,'num1',this.num1)
      this.$set(this.meetingInfo,'ammontPrice',(this.num1 * this.meetingInfo.price))
      return this.meetingInfo
    }
  },
  watch: {},
  methods: {
    async peopleList(){
        let peopleData =  await peopleList(this.meetingInfo.id,this.qiyehegerenid.userBaseVO.userId)
        this.peopleData = peopleData

    },
    async getAddPeople(callback){
        let addP =  await addPeople(this.addPForm,this.qiyehegerenid.userBaseVO.userId).then((res)=>{

          if(res.success && res.msg !== -1){
            this.$message({
              message: res.msg,
              type: 'success'
            });
            this.addPForm.mtiname = ''
            this.addPForm.mtimobile = ''
            this.addPForm.mtiemail = ''
            callback()
          }else{
            this.$message.error(res.obj);
          }
        })
        // this.addP = addP.data
    },
    async getDelPeople(callback){
        let addP =  await delPeople(this.curDel.id).then((res)=>{
          if(res.success && res.msg !== -1){
            this.$message({
              message: res.msg,
              type: 'success'
            });
            callback()
          }else{
            this.$message.error(res.obj);
          }
        })
        // this.addP = addP.data
    },
    async getIsTicket(){
        let addP =  await getIsTicket(this.meetingInfo.num,this.qiyehegerenid.userBaseVO.userId)
        // this.addP = addP.data
    },
    async getAddCartMeeting(callback){
        let addP =  await addCartMeeting(this.meetingInfo.id,8100,this.meetingInfo.ticketId,this.num1,this.qiyehegerenid.userBaseVO.userId).then((res)=>{
          if(res.success){
            callback()
          }else{
            this.$message.error(res.errMsg);
          }
        })
        // this.addP = addP.data
    },
    async getCartList(callback){
        await cartList(this.qiyehegerenid.userBaseVO.userId).then((res)=>{
          if(res.success){
            callback(res)
          }else{
            this.$message.error(res.errMsg);
          }
        })
    },
    handleChange(){

    },
    // 找到订单id，再如果是收费跳转最终结算页面。如果是免费给出提示即可
    findOid(res){
      let cur = res.data.filter((item)=>{
        return item.id == this.meetingInfo.id
      })
      let oid = cur[0].oid
      if(this.meetingInfo.type == '收费'){
        location = 'http://www.miningcircle.com/mall.do?cartSettle&oids=' + oid + '&submitType=putong&nums='+this.num1
      }else{
        this.$message({
          message: '恭喜您，报名成功!随后会务组会和您联系。',
          type: 'success',
          // duration:0,
          // showClose: true,
        });
      }

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
    signUp(){
      if(getCookie('MC_UID')){
        this.dialogVisible = true
        this.peopleList()
      }else{
        window.location.href = "http://member.miningcircle.com/login"
      }
    },
    selectP(val){
      this.selectPArr = val
    },
    submi(){
      if(this.selectPArr.length == 0) {
        this.$message({
            message: '请选择报名人',
            type: 'error',
        });
        return
      }
      this.loading2 = true
      setTimeout(() => {
        this.loading2 = false;
      }, 400);
      this.getAddCartMeeting(()=>{
        if(this.meetingInfo.type == '收费'){
        location = 'http://www.miningcircle.com/mall.do?cart&type=8100'
        }else{
          this.$message({
            showClose: true,
            message: '恭喜您，报名成功!随后会务组会和您联系。',
            type: 'success',
            duration:0,
          });
        }

      })
      // 调加入购物车接口
      // 跳转提示加入购物车成功界面-jsp

    },
    handleEdit(){

    },
    handleDelete(index,row){
      this.curDel = row
      this.getDelPeople(()=>{
        this.peopleList()
      })
      // 调用删除接口
      // 调用列表接口，刷新列表
    },
    savePeople(){
      this.$refs['addPForm'].validate((valid)=>{
        if(valid){
          this.getAddPeople(()=>{
            this.peopleList()
          })
        }
      })

    },
    curBuy(){
      if(this.meetingInfo.num == 0){
        this.$message('没有剩余票数了');
        return
      }

      if(!getCookie('MC_UID')){
        window.location.href = "http://member.miningcircle.com/login"
        return
      }

      this.loading3 = true
      setTimeout(() => {
        this.loading3 = false;
      }, 2000);

      this.getAddCartMeeting(()=>{
        this.getCartList((res)=>{
          this.findOid(res)
        })
      })
      // 调剩余票数的接口(判断还有没有票了)，如果有继续，如果没有了提示。
      // 调加入购物车接口
      // 调购物车列表（目的：拿订单id）
      // 判断是收费免费，如果是收费项目跳转结算页，如果是免费项目提示信息即可。
      // (跳转结算页链接:
      // location = 'http://www.miningcircle.com/mall.do?cartSettle&oids=23b5de9d5bc6465b8149ea9ee689cacc&submitType=putong&nums=1'
    },

  },
}
</script>

<style lang='less' scoped>
@import '../../../static/css/curLocalpage.less';


.el-input-number--mini{
  margin-right: 16px;
}
.meeting-detail{
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
      .intro {
        background: rgba(248, 246, 244, 1);
        padding: 13px;
        line-height:24px;
        font-size: 14px;
        color: rgba(112,112,112,1);
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
        padding: 23px 0 15px;
        border: 1px solid rgba(237,237,237,1);
        .block{
          flex: 1;
          line-height:30px;
          .lab{
            // text-align: right;
            // width: 56px;
            display: inline-block;
          }
          .mar12{
            margin-right: 12px;
          }
          .mar40{
            margin-right: 40px;
          }
          // .mar12{
          //   margin-right: px;
          // }
          .light {
            color: #ff7300;
            font-size: 20px;
          }
          .tickettype-val{
            border:1px solid #00A0EA;
            border-radius:10px;
            padding: 0px 14px;
          }
        }
        .block-2{
          min-width:200px;
        }
      }
      .box-btn{
        font-size: 18px;
        justify-content: space-around;
        font-size:14px;
        margin-top: 20px;

        .btn{
          border-radius:5px;
        }
        .btn1{
          color:#fff;
          background: #00A0EA;
          padding: 10px 40px;
          margin: 0 4% 0 0;
          line-height: 20px;
        }
        .btn2{
          color:#00A0EA;
          border:1px solid#00A0EA;
          padding: 10px 20px;
        }
        .el-dialog__wrapper {
          .title{
            font-size: 18px;
            text-align: center;
            margin: 12px 0;
          }
          .formmy{
            margin: 20px;
            border: 1px solid rgba(204, 204, 204, 0.45);
          }
          .addPForm{
            margin-bottom: 63px;
            .item{
              width: 30%
            }
          }
        }
      }
    }
  }
  .detail{
    .left{
      width:220px;
      margin-right: 10px;
    }
    .right{
      .card{
          padding: 15px 70px;
          line-height: 28px;
      }
    }
  }
}


</style>
