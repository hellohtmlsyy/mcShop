<!-- groomMineral -->
<template>
  <div class='groom-mineral'>
    <Header-card title="矿业项目"></Header-card>
    <div>
      <el-row class="li" type="flex" align='middle' v-for="(item,i) in groomProjectList" :key="i">
        <!-- <nuxt-link :to="'/test/'+item.id+'.html'"> -->
        <el-col class="box-img">
          <div>
            <img :src="item.img" />
          </div>
        </el-col>
        <el-col>
          <h1 class="title">{{item.title}}</h1>
          <div class="info">
          <div class="info1 df fwW" >
            <div class="lab">
              <span>价格：</span>找数据
            </div>
            <div class="lab">
              <span>矿种：</span>{{item.mineralSpecies}}
            </div>
            <div class="lab">
              <span>转让股比：</span>找数据
            </div>
            <div class="lab">
              <span>阶段：</span>{{item.stage}}
            </div>
            <div class="lab">
              <span>地区：</span>找数据
            </div>
          </div>
          <el-row>
            <span>项目亮点：</span>{{item.brightSpot}}
          </el-row>
          </div>
          <el-row class="num" type="flex">
            <el-col>
              <img src="../static/imgs/easy.png" />
              <span>{{item.viewTimes}}</span>
            </el-col>
            <el-col class="date">
              <span>发布日期：</span>{{item.releaseDate}}
            </el-col>
          </el-row>
        </el-col>
        <!-- </nuxt-link> -->
      </el-row>
    </div>
  </div>
</template>

<script>
import HeaderCard from '~/components/headerCard'

export default {
  components: {
    HeaderCard
  },
  props:['groomProjectList'],
  data() {
    return {

    };
  },
  created() {

  },
  computed: {

  },
  watch: {},
  methods: {

  },
}
</script>

<style lang='less' scoped>
  .groom-mineral{
    .li{
      padding:25px;
      border-bottom:1px solid#b5b5b5;
      .box-img{
        width: 200px;
        height: 130px;
        margin-right:30px;
        img{
          width: 200px;
          height: 130px;
        }
      }
      .title{
        font-size: 18px;
        line-height: 26px;
        margin-bottom:17px;
        background-color: #eff6fa;
      }
      .info{
        font-size: 14px;
        color: #707070;
        line-height: 20px;
        margin-bottom:20px;
        .info1{
          .lab{
              width: 240px;
          }
        }
      }
      .num{
        font-size:12px;
        color: #707070;
        .date{
          text-align:right;
        }
      }
    }
    .li:last-child{
      border:none;
    }
  }
</style>
