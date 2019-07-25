<!-- filter -->
<template>
  <div class='filter df bd'>
    <div class="left">
      <span class="type bd" @click="saleNum">销量<span v-show='saleNumIco'>↑</span><span v-show='!saleNumIco'>↓</span></span>
      <span class="type bd" @click='date'>时间<span v-show='dateO'>↑</span><span v-show='!dateO'>↓</span></span>
      <span class="type bd price" @click='price'>价格<span v-show='priceO'>↑</span><span v-show='!priceO'>↓</span></span>
    </div>
    <!-- <div class="right">
      <input class="bd" type="text" placeholder="最低价" v-model="priceFilter.minPrice"/>
      <span>-</span>
      <input class="bd" type="text" placeholder="最高价" v-model="priceFilter.maxPrice"/>
      <button class="btn" @click="filterRangPrice">确认</button>
    </div> -->
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      saleNumIco:true,
      dateO:true,
      priceO:true,
      priceFilter:{
        minPrice:'',
        maxPrice:''
      }

    };
  },
  created() {

  },
  computed: {

  },
  watch: {},
  methods: {
    saleNum(){
      this.saleNumIco = !this.saleNumIco
      this.$emit('saleNum',this.saleNumIco)
    },
    date(){
      this.dateO = !this.dateO
      this.$emit('dateO',this.dateO)
    },
    price(){
      this.priceO = !this.priceO
      this.$emit('priceO',this.priceO)
    },
    filterRangPrice(){
      this.$emit('priceF',this.priceFilter)
    }
  },
}
</script>

<style lang='less' scoped>
@import '../assets/less/base.less';
  .filter{
    justify-content: space-between;
    font-size:@fontSize14;
    margin:25px;
    margin-bottom:0;
    background:rgba(242,242,242,1);
    padding:5px 25px;
    .type{
      width:77px;
      height:26px;
      display: inline-block;
      text-align: center;
      line-height: 26px;
      margin-right: 3px;
    }
    .price{
      background:#F27171;
      color:#fff;
    }
    .right{
      input{
        width:66px;
        height: 26px;
        padding-left: 4px;
      }
      .btn{
        color:#fff;
        width:47px;
        height:26px;
        background:rgba(174,174,174,1);
        border-radius:5px;
        margin-left: 7px;
      }
    }
  }
</style>
