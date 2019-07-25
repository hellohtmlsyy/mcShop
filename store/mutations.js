const mutations = {
  increment(state) {
    state.counter++
  },
  databaseM(state,data){
    state.data = data
  },
  navActiveM(state,data){
    state.navActive = data
  },
  locM(state,data){
    state.loc = data
  },
  shopIdM(state,data){
    state.shopId = data
  },
  baseInfoDataM(state,data){
    state.baseInfoData = data
  },
  styleGoodM(state,data){
    state.styleGood = data
  }
}

export default mutations
