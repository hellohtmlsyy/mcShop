<!-- groomPhpto -->
<template>
  <div class='groom-phpto'>
    <div class="">
        <Header-card title="推荐相册"></Header-card>
        <ul class="content">
          <li>
            <div>
              <img src="../static/imgs/logo/1.png" />
            </div>
            <div class="info">
              <h1>我的商城相册</h1>
              <p>15张图片</p>
            </div>
          </li>
          <li>
            <div>
              <img src="../static/imgs/logo/1.png" />
            </div>
            <div class="info">
              <h1>我的商城相册</h1>
              <p>15张图片</p>
            </div>
          </li>
          <li>
            <div>
              <img src="../static/imgs/logo/1.png" />
            </div>
            <div class="info">
              <h1>我的商城相册</h1>
              <p>15张图片</p>
            </div>
          </li>
        </ul>
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
@fs14:14px;
  .groom-phpto{
    .content{
      padding:15px;
      li{
        display: flex;
        margin-bottom:20px;
        img{
          width:80px;
          height:80px;
          border-radius:2px;
          margin-right: 12px;
        }
        .info{
          line-height:26px;
          h1{
            font-size:@fs14;
          }
          p{
            font-size:12px;
            color:rgba(51,51,51,1);
          }
        }
      }
      li:last-child{
        margin-bottom:0;
      }

    }
  }
</style>
