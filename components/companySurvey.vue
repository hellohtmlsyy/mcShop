<!-- 公司概况 -->
<template>
  <div class='compony-survey'>
      <Header-card title="企业概况" :styleGood="styleGood">
      </Header-card>
      <div class="content">
        <p class="name">{{data.companyName}}</p>
        <p class="info">经营模式：{{data.mainProduct}}</p>
        <p class="info">所在地区：{{data.country}} {{data.province}} {{data.city}}</p>
        <div class="box-btn">
          <div class="btn btn1" @click="follow">
            <span class="icom icom-atten"></span>
            <span>{{data.attention ? '已关注' : '关注'}}</span>
          </div>
          <div class="btn btn2">
            <span class="icom icom-mess"></span>
            <span @click="leave">留言</span>
          </div>
        </div>
      </div>
      <el-dialog
        title="留言给改供应商"
        :visible.sync="dialogVisible"
        >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="联系人" prop="contactPerson">
            <el-input v-model="ruleForm.contactPerson"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="contactTel">
            <el-input v-model="ruleForm.contactTel"></el-input>
          </el-form-item>
          <el-form-item label="留言" prop="content">
            <el-input type="textarea" v-model="ruleForm.content" placeholder="我们建议您在这里详细说明您的产品要求和公司信息" rows="8"></el-input>
            <span>20到4000字符之间输入</span>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" :loading="loading2" @click="submi">{{loading2 ? '提交中...' : '确 定'}}</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import HeaderCard from '~/components/headerCard'
import { atten,cancelAtten,message,baseInfo} from '~/assets/api/company'

import { getCookie } from '~/assets/utils/tool'

import { } from '~/assets/utils/tool'
import { mapState } from 'vuex'


export default {
  components: {
    HeaderCard
  },
  props:['data','styleGood'],
  data() {
    return {
      test:'',
      dialogVisible: false,
      ruleForm:{
        contactPerson:'',
        contactTel:'',
        content:''
      },
      rules:{
        contactPerson:[
          { required: true, message: '请输入联系人', trigger: 'blur' },
        ],
        contactTel:[
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          {pattern:/^1\d{10}$/,message:'请填写11位数字的手机号码'}
        ],
        content:[
          { required: true, message: '请输入内容', trigger: 'blur' },
          {min:20,max:4000,message:'长度在20到4000个字符',trigger:'blur'}
        ]
      },
      shopId:'',
      loading2:false
    };
  },
  created() {

  },
  mounted(){
    this.shopId = localStorage.getItem('shopId')
  },
  computed: mapState([
    'loc'
  ]),
  watch: {},
  methods: {
    // async getBaseInfo() {
    //   debugger
    //   let data = await baseInfo(this.shopId)
    //   this.data = data.data
    // },
    async getDate() {
      if(!this.data.attention){
        const { data} = await atten(this.shopId)
        if(data.isSuccess){
          this.$set(this.data,'attention',true)
        }else{
          this.$message.error(data.msg);
        }
      }else{
        const { data} = await cancelAtten(this.shopId)
        if(data.isSuccess){
          this.$set(this.data,'attention',false)
          console.log(this.data)
        }else{
          this.$message.error(data.msg);
        }
      }

    },
    async getMessage() {
      const { data} = await message(this.ruleForm)
      if(data.isSuccess){
        this.dialogVisible = false
        this.$message({
          message: data.msg,
          type: 'success'
        });
      }else{
        this.$message.error(data.msg);
      }
      console.log(data)
    },
    follow(){
      if(getCookie('MC_UID')){
        this.getDate()
      }else{
        window.location.href = "http://member.miningcircle.com/login"
      }
    },
    submi(){
      this.$refs['ruleForm'].validate((valid)=>{
        if(valid){
          this.loading2 = true
          setTimeout(() => {
            this.loading2 = false;
          }, 400);
          this.ruleForm.id = localStorage.getItem('shopId')
          this.getMessage()
        }
      })
    },
    leave(){
      if(getCookie('MC_UID')){
        this.dialogVisible = true
      }else{
        window.location.href = 'http://member.miningcircle.com/login'
      }
    }
  },
}
</script>

<style lang='less' scoped>
@bd:1px solid rgba(210, 210, 210, 1);

  .compony-survey{
    font-size: 14px;
    width: 220px;
    .content{
      padding:18px 16px;
      .name{
        color: #333333;
        font-weight:bold;
        line-height:26px;
      }
      .info{
        line-height:26px;
      }
      .box-btn{
        display: flex;
        margin-top: 15px;
        .btn{
          height:30px;
          border-radius:5px;
          border:@bd;
          line-height: 30px;
          padding: 0 5px;
          text-align: center;
          .icom{
            vertical-align: middle;

          }
        }
        .btn2{
          margin-left: 40px;
        }
      }
    }

  }
  .icom-atten{
    background: url('../static/imgs/ico/ico-atten.png') no-repeat;
    background-size:100% 100%;
    display: inline-block;
    width: 18px;
    height: 18px;
  }
  .icom-mess{
    background: url('../static/imgs/ico/ico-mess.png') no-repeat;
    background-size:100% 100%;
    display: inline-block;
    width: 18px;
    height: 18px;
  }
</style>
