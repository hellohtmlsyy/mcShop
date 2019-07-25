<!-- groomMineral -->
<template>
  <div class='groom-mineral'>
    <!-- <Header-card title="矿业项目"></Header-card> -->

    <div>
      <div>
        <div>
          <el-row class="li" type="flex" align='middle'  v-for="(item,i) in groomProjectList" :key="i" >
            <nuxt-link :to="'/project/'+item.no" class="df link">
            <el-col class="box-img">
              <div>
                <img :src="item.img" />
              </div>
            </el-col>
            <el-col :span="24">
              <h1 class="title">{{item.title}}</h1>
              <div class="info">
              <div class="info1">
                <div class="df fwW">
                    <div class="lab flex1 minW">
                      <span>价格：</span>{{item.transferAmount ? item.transferAmount : '面议'}}
                    </div>
                    <div class="lab flex1 minW clamp1">
                      <span>矿种：</span>{{item.mineralSpecies}}
                    </div>
                </div>
                <div class="df fwW">
                  <div class="lab flex1 minW">
                    <span>转让股比：</span>{{item.transferShareRatio}}
                  </div>
                  <div class="lab flex1 minW">
                    <span>阶段：</span>{{item.stage}}
                  </div>
                </div>
                <div class="lab clamp1">
                  <span>地区：</span>{{item.region}}
                </div>
                <div class="clamp1">
                  <span>项目亮点：</span>{{item.brightSpot}}
                </div>
              </div>
              <!-- <el-row> -->

              <!-- </el-row> -->
              </div>
              <el-row class="num" type="flex">
                <el-col class="look">
                  <i class="icon iconfont icon-yan"></i>
                  <span>{{item.viewTimes}}</span>
                </el-col>
                <el-col class="date">
                  <span>发布日期：</span>{{item.releaseDate}}
                </el-col>
              </el-row>
            </el-col>
            </nuxt-link>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HeaderCard from '~/components/headerCard'

export default {
  components: {
    // HeaderCard
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
.minW{
  min-width: 200px;
}
  .groom-mineral{
    .li{
      margin: 25px 25px 0 25px;
      padding-bottom: 25px;
      border-bottom:1px solid#b5b5b5;
      .link{
        width: 100%;
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
            margin-bottom:5px;
            background-color: #eff6fa;
          }
          .info{
            font-size: 14px;
            color: #707070;
            line-height: 20px;
            margin-bottom:5px;
            .info1{
              .lab{
                  // width: 240px;
              }
            }
        }
        .num{
          font-size:12px;
          color: #707070;
          .date{
            text-align:right;
          }
          .look{
            width: 100px;
          }
        }
      }

    }
    .li:last-child{
      border:none;
    }
  }
</style>
