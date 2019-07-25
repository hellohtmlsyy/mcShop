<!--  -->
<template>
  <div class="meeting">
    <ul>
      <li class="df" v-for="(item,i) in data" :key="i">
        <nuxt-link :to="'/meeting/'+item.no" class="df link">
          <div class="img-box">
            <img :src="item.img" alt width="200" height="130">
          </div>
          <div class="right-box">
            <h1>{{item.title}}</h1>
            <p class="intro">{{item.desc}}</p>
            <div class="dateAdress df fwW">
              <div class="addr">地点：{{item.adr}}</div>
              <div class="date">时间：{{item.beginDate}}至{{item.endDate}}</div>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['data'],
  data() {
    return {}
  },
  created() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang='less' scoped>
.meeting {
  li {
    margin: 20px 20px 0 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(181, 181, 181, 1);
    .link {
      width: 100%;
      .img-box {
        width: 200px;
        height: 130px;
        margin-right: 30px;
      }
      .right-box {
        flex-grow: 1;
        h1 {
          background: rgba(239, 246, 250, 1);
          font-size: 18px;
          line-height: 33px;
          margin-bottom: 14px;
        }
        .intro {
          font-size: 14px;
          line-height: 20px;
          color: rgba(112, 112, 112, 1);
        }
        .dateAdress {
          font-size: 14px;
          line-height: 26px;
          color: rgba(170, 170, 170, 1);
          .addr {
            min-width: 236px;
            flex: 1;
          }
          .date {
            text-align: right;
          }
        }
      }
    }
  }
  li:last-child {
    border: none;
  }
}
</style>
