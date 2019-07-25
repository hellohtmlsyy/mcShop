<!-- header-card -->
<template>
<div>
  <div class='header-card' :style="{background:styleGood ? 'linear-gradient(0deg,#' + styleGood.linearGradientLeft + ',#' + styleGood.linearGradientRight + ')' : '#00A0E9'}">
    <h1>{{title}}</h1>

    <slot name="moreText"></slot>
  </div>

  <slot></slot>
</div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  components: {},
  props:['title'],
  data() {
    return {
      shopId:''
    };
  },

  computed: mapState([
    'styleGood'
  ]),
  mounted() {
    this.shopId = localStorage.getItem('shopId')
  },
  watch: {

  },
  methods: {

  },
}
</script>

<style lang='less' scoped>
  .header-card{
    display:flex;
    width:100%;
    justify-content: space-between;
    line-height: 30px;
    padding:0 14px;
    h1{
      font-size:14px;
      color:#fff;
      font-weight:400;
    }
    a{
      color:#fff;
      font-size: 12px;
    }
  }
</style>
