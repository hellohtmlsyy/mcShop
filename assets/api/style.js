import request from '../utils/request';
import config from '~/plugins/index.js';
import { getCookie } from '~/assets/utils/tool'
export const styleGood = (shopId) => {
  return request({
    url:"/pc/template/homePageCss",
    method: 'GET',
    data: {
      shopId:shopId
    },
  })
}

export const accInfo = () => {
  return request({
    url: `${config.MEMBERAPI}/account/accountInfo`,
    method: 'GET',
    data: {

    },
  })
}

export const qiyehegerenId = () => {
  return request({
    url: `${config.MEMBERAPI}/user/userHome`,
    method: 'GET',
    data: {

    },
  })
}
