import request from '../utils/request';
const prefix = '/pc/shop/';

export const baseInfo = (shopId,MC_UID) => {
  return request({
    url: `${prefix}baseInfo`,
    method: 'GET',
    data: {
      shopId:shopId,
      MC_UID
    },
  })
}


export const atten = (companyId) => {
  return request({
    url: "pc/attention/attentionMall",
    method: 'GET',
    data: {
      id:companyId
    },
  })
}


export const cancelAtten = (companyId) => {
  return request({
    url: "pc/attention/cancelAttentionMall",
    method: 'GET',
    data: {
      id:companyId
    },
  })
}

// 全部信息
export const fullInfo = (shopId) => {
  return request({
    url: `${prefix}fullInfo`,
    method: 'GET',
    data: {
      shopId
    },
  })
}
// 留言
export const message = ({id,contactPerson,contactTel,content}) => {
  return request({
    url: "/pc/message/messageMall",
    method: 'GET',
    data: {
      id,contactPerson,contactTel,content
    },
  })
}
