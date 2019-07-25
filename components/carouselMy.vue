<!--  -->
<template>
  <div class='carousel-my'>
    <section>
      <div class="carousel1" >
        <!-- <img src="../static/imgs/cake1.jpeg" alt=""> -->
          <ul class="df">
            <li v-for='(item,i) in data' :key='i'>
              <transition name="slide-fade">
                <img :src="item.img" alt="" v-show='cur == i'>
              </transition>
            </li>
          </ul>
      </div>

      <div @click='clickLeft'><</div>
      <div @click="clickRight">></div>
      <div class="carousel2" >
        <ul class="df jcSb" ref="test" :style="{transform: 'translate3d(' + distance + 'px, 0px, 0px)'}" @mousedown='down' @mousemove='move' @mouseup='up'>
          <li v-for='(item,i) in data' :key='i' >
            <!-- <img :src="item.img" alt=""> -->
            <div class="img" :class='{curcss:cur == i}' >{{i}}</div>
          </li>
        </ul>
      </div>
      <div @click='clickLeft1'><</div>
      <div @click="clickRight1">></div>
    </section>
    <!-- test{{data}} -->
  </div>
</template>

<script>

export default {
  components: {},
  // props:['data'],
  data() {
    return {
      data:[{
        img:require('../static/imgs/cake1.jpeg')
      },{
        img:require('../static/imgs/cake2.jpg')
      },{
        img:require('../static/imgs/cake4.jpg')
      },{
        img:require('../static/imgs/cake5.jpeg')
      },{
        img:require('../static/imgs/cake6.jpg')
      },{
        img:require('../static/imgs/cake7.jpg')
      },{
        img:require('../static/imgs/cake8.jpeg')
      },{
        img:require('../static/imgs/cake9.jpg')
      },{
        img:require('../static/imgs/cake10.jpg')
      },{
        img:require('../static/imgs/sky.jpg')
      },],
      cur:0, //当前图片下标
      distance:0,
      downClient:'',
      downing:false,
      juli:0,
      offsetL:0,
      x:0,
    };
  },
  created() {

  },
  computed: {

  },
  watch: {},
  methods: {
    clickLeft(){
      this.cur--
      if(this.cur < 0 ){
        this.cur = 4
      }
    },
    clickRight(){
      this.cur++
      if(this.cur > this.data.length - 1){
        this.cur = 0
      }
    },
    clickLeft1(e){
      // console.log(e)
      // this.juli += 137 * 2

    },
    clickRight1(e){
      // console.log(e)
      // if(this.juli <= 0) return
      // this.juli -= 137 * 2
    },
    down(e){

      this.downing = true
      this.$nextTick(()=>{
       this.offsetL = this.$refs.test.offsetLeft
      })
      this.x = e.clientX - this.offsetL

    },
    move(e){
      if(this.downing){
        // console.log(e,this.downClient,this.distance)
        this.distance = e.clientX - this.x
      }

    },
    up(e){
      // console.log(e,'up')
      this.downing = false
    },
    qiehuan(idx){
      this.cur = idx
    }
  },
}
</script>

<style lang='less' scoped>
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.curcss{
  border:2px solid rgba(0,160,233,1);
}
  .carousel-my{
    .carousel1{
      overflow: hidden;
      width: 866px;
      height: 866px;
      position: relative;
      li{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        img{
          width: 866px;
          height: 866px
        }
      }
    }
    .carousel2{
      width:866px;
      height:137px;
      overflow: hidden;
      cursor: move;
      li{
        margin-right: 10px;
      }
      .img{
        width:137px;
        height:137px;
        background: red;
        font-size: 24px;
      }
    }
  }
</style>
