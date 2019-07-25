<!-- companyQualifica -->
<template>
  <div class='company-qualifica'>
    <Header-card title="企业资质"></Header-card>
    <div class="content">
      <el-row class="rowm fwW" type="flex" >
        <el-col class="box-img">
          <img src="../static/imgs/logo/1.png" />
        </el-col>
        <el-col class="box-img">
          <img src="../static/imgs/logo/1.png" />
        </el-col>
        <el-col class="box-img">
          <img src="../static/imgs/logo/1.png" />
        </el-col>
        <el-col class="box-img">
          <img src="../static/imgs/logo/1.png" />
        </el-col>
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
  .company-qualifica{
    .content{
      padding:15px;
      .rowm{
        justify-content: space-between;
        .box-img{
          padding:18px;
          border:solid 1px #d2d2d2;
          margin:10px;
          width:22.8%;
          min-width: 214px;

          img{
            width: 177px;
            height: 252px;
          }
        }
      }
    }
  }
</style>
