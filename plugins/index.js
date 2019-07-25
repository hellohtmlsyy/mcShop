import Vue from 'vue'
import { getCookie } from '~/assets/utils/tool'

export default {
  IS_RELEASE: false, // true线上，false测试(为了当是测试时控制台可以console)

  BASE_URL: 'http://shopapi.miningcircle.com:8093', // 测试
  MEMBERAPI:'http://memberapi.miningcircle.com:8090',
  WWWAPI:'http://www.miningcircle.com',    //代码里直接写上去的，没用这个全局的



  // BASE_URL: 'http://shopapi.miningcircle.com', // 生产
  // MEMBERAPI:'http://memberapi.miningcircle.com',
  // WWWAPI:'http://www.miningcircle.com',

  HEADERS: {
    'Content-Type': 'application/json;charset=UTF-8',
  },

  TIMEOUT: 12000, // api超时时间

};
