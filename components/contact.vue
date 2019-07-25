<!-- contact -->
<template>
  <div class='contact'>
     <Header-card title="联系方式">
       <div slot="moreText">
          <span class="more-txt" @click="toLink(7)">更多></span>
        </div>
     </Header-card>
     <div class="content">
       <div class="rowm">
        <span class="lab">联系人：</span>{{data.contactPerson}}
       </div>
      <div class="rowm">
         <span class="lab">电话：</span>{{data.contactTel}}
      </div>
      <div class="rowm">
        <span class="lab">手机：</span>{{data.contactMobile}}
      </div>
      <div class="rowm">
        <span class="lab">地址：</span>{{data.country}} {{data.province}} {{data.city}}
      </div>
      <div class="rowm">
        <span class="lab">网址：</span>
        <span class="wbBa">{{data.website}}</span>
      </div>
     </div>
  </div>
</template>

<script>
import HeaderCard from '~/components/headerCard'
import { mapState } from 'vuex'
export default {
  components: {
    HeaderCard
  },
  props:['data'],
  data() {
    return {

    };
  },
  created() {

  },
  mounted(){
    this.shopId = localStorage.getItem('shopId')
  },
  computed: mapState([
    'styleGood'
  ]),
  watch: {},
  methods: {
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
    toLinkWZ(){
      location = this.data.website
    }
  },
}
</script>

<style lang='less' scoped>
.contact{
  width: 220px;
  .more-txt{
    color:#fff;
  }
  .content{
    padding:15px 0 15px 15px;
    font-size:14px;
    .rowm{
      line-height:30px;
      .lab{
        font-weight:bold;
      }
    }

  }
}

</style>
