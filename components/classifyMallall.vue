<!-- classifyMallall -->
<template>
  <div class='classify-mallAll'>
    <div class="list bd">
      <ul class="df fwW aiC">
        <li v-for="(item,i) in classify" :key="i">{{item.name}}</li>
      </ul>
      <div class="box-more">
        <span class="line"></span>
        <span class="txt" @click="more">加载更多》</span>
        <span class="line"></span>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
  data() {
    return {
      classify:[{
        name:'全部'
      },{
        name:'机械设备'
      },{
        name:'干粉建材添加剂'
      },{
        name:'机械设备'
      },{
        name:'干粉建材添加剂'
      },{
        name:'机械设备'
      },{
        name:'干粉建材添加剂'
      },{
        name:'机械设备'
      },{
        name:'干粉建材添加剂'
      },{
        name:'机械设备'
      },{
        name:'干粉建材添加剂'
      },{
        name:'机械设备'
      },{
        name:'干粉建材添加剂'
      },{
        name:'机械设备'
      },{
        name:'干粉建材添加剂'
      },{
        name:'机械设备'
      },{
        name:'干粉建材添加剂'
      }]
    };
  },
  created() {

  },
  computed: {

  },
  watch: {},
  methods: {
    more(){

    }
  },
}
</script>

<style lang='less' scoped>
@import '../assets/less/base.less';
  .classify-mallAll{
    .list{
      font-size:@fontSize14;
      margin:25px;
      border-bottom:none;
      ul{
        li{
          width:25%;
          min-width:150px;
          line-height:36px;
          text-align: center;
        }
      }
    }
    .box-more{
      color:rgba(170,170,170,1);
      text-align: center;
      .line{
        display: inline-block;
        width: 39.3%;
        border-top: 1px solid #ccc ;
      }
      .txt{
        color: #686868;
        vertical-align: middle;
        padding:0 33px;
      }

    }
  }
</style>
