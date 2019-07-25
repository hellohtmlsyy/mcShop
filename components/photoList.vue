<!-- 相册列表 -->
<template>
  <div class='photo-list'>
    <ul class="df jcSb fwW">
      <li>
        <div class="box-img">
          <img src="/_nuxt/static/imgs/logo/1.png" alt="">
          <div class="tag">
            <!-- <span>相册</span> -->
          </div>
          <div class="tag1">
            <span>279张</span>
          </div>
        </div>
        <div class="title">产品相册</div>
      </li>
      <li>
        <div class="box-img">
          <img src="/_nuxt/static/imgs/logo/1.png" alt="">
          <div class="tag">
            <!-- <span>相册</span> -->
          </div>
          <div class="tag1">
            <span>279张</span>
          </div>
        </div>
        <div class="title">产品相册</div>
      </li>
      <li>
        <div class="box-img">
          <img src="/_nuxt/static/imgs/logo/1.png" alt="">
          <div class="tag">
            <!-- <span>相册</span> -->
          </div>
          <div class="tag1">
            <span>279张</span>
          </div>
        </div>
        <div class="title">产品相册</div>
      </li>
       <li>
        <div class="box-img">
          <img src="/_nuxt/static/imgs/logo/1.png" alt="">
          <div class="tag">

          </div>
          <div class="tag1">
            <span>279张</span>
          </div>
        </div>
        <div class="title">产品相册</div>
      </li>
      <li>
        <div class="box-img">
          <img src="/_nuxt/static/imgs/logo/1.png" alt="">
          <div class="tag">

          </div>
          <div class="tag1">
            <span>279张</span>
          </div>
        </div>
        <div class="title">产品相册</div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {},
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
  .photo-list{
    li{
      .box-img{
        position: relative;
        img{
          width:160px;
          height:160px;
          border-radius:2px;
        }
        .tag1{
          width:70px;
          height:32px;
          background:rgba(22,22,22,1);
          border:1px solid rgba(170, 170, 170, 1);
          opacity:0.5;
          border-radius:2px;
          color:#fff;
          font-size:14px;
          text-align: center;
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 999;
          span{
            line-height:32px;
          }
        }
      }
      .title{
        font-size:18px;
        text-align: center;
        margin-top: 20px;
      }
      // .tag{
      //   content:"相册";
      //   position: absolute;top: 0;left: 0;
      //   background:linear-gradient(0deg,rgba(5,85,155,1),rgba(79,180,246,1));
      //   width: 48px;
      //   height: 48px;
      //   border: 24px solid rgba(79,180,246,1);
      //   border-bottom-color: transparent;
      //   border-right-color: transparent;
      //   span{
      //     font-size: 14px;
      //   }
      // }

    }
  }
</style>
