<!-- header -->
<template>
  <div class='header'>
    <el-row type="flex" class="row-bg nav" justify="end">
      <a href="http://www.miningcircle.com">首页</a>
        <span class="line">|</span>

        <div v-if="!userBO">
          <a href="http://member.miningcircle.com/login" class="light">登录</a>
          <span class="line">|</span>
          <a href="http://member.miningcircle.com/reg" class="light">注册</a>
          <span class="line">|</span>
        </div>
        <div v-else>
          <span class="light">{{userBO.userName}}</span>
          <span class="line">/</span>
          <a href="http://member.miningcircle.com/login" class="cur-p" @click="del">退出</a>
          <span class="line">|</span>
        </div>

        <a href="http://m.miningcircle.com" target="_blank">手机版</a>
        <span class="line">|</span>
        <a href="http://www.miningcircle.com/app.do" target="_blank">APP</a>
        <span class="line">|</span>
        <a href="http://www.miningcircle.com/en/index.do" target="_blank">ENG</a>
        <span class="line">|</span>
        <span>关于我们</span>
    </el-row>
    <div class="headerLine">
    <div class="wrap search df fwW">
      <div class="box-img">
        <img src="../static/imgs/logo/2.png" width="130" height="50">
      </div>
      <div class="box-input">
        <input type="text" placeholder="请输入关键字搜索..." v-model="searchKey" @keyup.enter="search" /><button class="btn btn1"  @click="search">搜全网</button>
        <!-- <button class="btn btn2">搜本店</button> -->
      </div>
    </div>
    </div>

    <div class="style-good-headerImg" v-if="styleGood !== null">
        <img :src="styleGood.shopSignUrl" />
    </div>
    <div class="wrap" v-else>

      <el-row type="flex" align="middle" class="intro fwW">
        <el-col   :sm="3" :xs="3" class="img">
          <img :src="data.logo" width="70" height="70">
        </el-col>
        <el-col  :sm="21" :xs="21">
          <h1>{{data.companyName}}</h1>
          <p>主营产品：{{data.mainProduct}}
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import {accInfo} from '~/assets/api/style'
import {delCookie} from '~/assets/utils/tool'

export default {
  props:["styleGood","test","userBO",'data'],
  components: {},
  data() {
    return {
      searchKey:''
    };
  },
  mounted() {

  },

  computed: {

  },

  watch: {},
  methods: {
    del() {
        delCookie('MC_UID');
        delCookie('allow_Comp');
    },
    search(){
      location = 'http://www.miningcircle.com/search.do?searchkey=' + this.searchKey + '&i0=0'
    }
  },
}
</script>

<style lang='less' scoped>
  @colorBase:#00A0E9;

.style-good{
  height:130px;
}

  .header{
    .nav{
      font-size:12px;
      line-height: 30px;
      background:rgba(245,245,245,1);
      .light{
        color:@colorBase;
      }
      .line{
        padding: 0 10px;
      }
    }
    .headerLine{
      border-bottom: 1px solid #B5B5B5;

    }
    .search{
      padding-top: 20px;
      padding-bottom: 20px;
      justify-content: space-between;
      align-items: center;
      .box-input{
        flex-grow:0.5;
        text-align: right;
        input{
          width:39%;
          height:35px;
          line-height: 35px;
          border:1px solid @colorBase;
          vertical-align: top;
          padding-left: 10px;
        }
        input::-webkit-input-placeholder{
          font-size: 14px;
        }
        .btn{
          width:87px;
          height:35px;
          color:#fff;
          font-size:18px;
        }
        .btn1{
          background:@colorBase;
        }
        .btn2{
          background:rgba(255,159,0,1);
        }
      }
    }

    .intro{
      padding: 25px 0;
      .img{
        text-align: center;
      }
      h1{
        font-size:26px;
        font-weight:bold;
        margin-bottom: 16px;
      }
      p{
        font-size:14px;
        line-height:20px;
        color:rgba(107,107,107,1);
      }
    }
    .style-good-headerImg{
      img{
        display:block;
        height: 100%;
        width: 100%;
      }
    }
  }

</style>
