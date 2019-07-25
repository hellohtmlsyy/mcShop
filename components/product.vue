<!-- product -->
<template>
  <div class='product'>
    <div class="content">
      <ul class="df fwW">

        <li class="item" v-for="(item,i) in data" :key="i">
          <nuxt-link :to="'/products/'+ (item.no==null ? item.id : item.no)">
          <div>
            <img :src="item.img" style="min-width:210px;min-height:210px;"/>
          </div>
          <div>
            <div>
              <span class="price">￥{{item.price == 0 ? '面议' :item.price | amountCon}}</span>
            </div>
            <div>
              <p class="intro">{{item.title}}</p>
            </div>
          </div>
          </nuxt-link>
        </li>
        <li class="item hidden">1</li>
        <li class="item hidden">1</li>
        <!-- <li class="item hidden">1</li> -->
        <!-- <li class="item hidden">1</li> -->
        <!-- <li class="item hidden">1</li> -->
        <!-- <li class="item hidden">1</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderCard from '~/components/headerCard'
// import v from "~/assets/utils/tool";

export default {
  components: {
    HeaderCard
  },
  props:['data'],
  data() {
    return {
      // data:[{
      //   price:'￥4630.00',
      //   intro:'葆德厂家 变频螺杆式空压机 7.5葆德厂家',
      //   img:'../static/imgs/logo/1.png'
      // },{
      //   price:'￥4630.00',
      //   intro:'葆德厂家 变频螺杆式空压机 7.5葆德厂家',
      //   img:'../static/imgs/logo/1.png'
      // },{
      //   price:'￥4630.00',
      //   intro:'葆德厂家 变频螺杆式空压机 7.5葆德厂家',
      //   img:'../static/imgs/logo/1.png'
      // },{
      //   price:'￥4630.00',
      //   intro:'葆德厂家 变频螺杆式空压机 7.5葆德厂家',
      //   img:'../static/imgs/logo/1.png'
      // },{
      //   price:'￥4630.00',
      //   intro:'葆德厂家 变频螺杆式空压机 7.5葆德厂家',
      //   img:'../static/imgs/logo/1.png'
      // }],

    };
  },
  created() {


  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
}
</script>

<style lang='less' scoped>
  .product{
    .content{
      padding: 15px 15px 15px 15px;
      ul{
        display:flex;
        justify-content: space-between;
        align-content: flex-start;

        li{
          width:22.5%;
          min-width:210px;
          margin:11px;
          &.hidden{
            visibility:hidden;
            margin-top:0;
            margin-bottom:0;
            height:0;
          }
        }

      }
      .colm{
        margin:20px;
      }
      img{
        width:100%;
        height:100%;
        margin-bottom:5px;
      }
      .price{
        font-size:16px;
        color:rgba(255,68,0,1);
        line-height:26px;
      }
      .intro{
        font-size:14px;
        color:rgba(51,51,51,1);
        line-height:18px;
      }
    }
  }

</style>
