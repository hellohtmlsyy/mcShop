export const myMixin = {
  data(){
    return {
      screenWidth:0,
      showLeft:true
    }
  },
  mounted(){
    const that = this
    if (process.client) {
      window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
        })()
      }
    }
  },
  methods:{

  },
  computed:{

  },
  watch: {
    screenWidth(val){
      this.screenWidth = val
      if(this.screenWidth < 768){
        this.showLeft = false
      }else{
        this.showLeft = true
      }
    }
  },
}

