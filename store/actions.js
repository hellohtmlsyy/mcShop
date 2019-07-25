import { baseInfo } from '~/assets/api/company'
import axios from 'axios';

const actions = {
  baseInfoA(context) {
    // let {test} = await baseInfo('866132611938914304').then((result)=>{
    //   console.log(result)
    //   context.commit('databaseM',result)
    // })

    // axios.get('http://shopapi.miningcircle.com:8093/pc/shop/baseInfo?shopId=866132611938914304').then(function (response) {
    //   context.commit('databaseM',response)
    // })
  },
  async shopIdA(context,data){

    context.commit('shopIdM',data)
  }
}

export default actions
