import request from '../utils/request';

const prefix = '/pc/mall/';

export const groomMall = (shopId) => {
  return request({
    url: "/pc/list/homePageGoodsList",
    method: 'GET',
    data: {
      shopId
    },
  })
}

// queryCategory矿种分类默认值0
// queryType排序类型1
export const mallList = (shopId,queryCategory,queryType,pageNum,numPerPage) => {
  return request({
    url: "/pc/list/commoditylist",
    method: 'GET',
    data: {
      shopId,
      queryCategory,
      queryType,
      pageNum,
      numPerPage
    },
  })
}

export const mallInfo = (id,MC_UID) => {
  return request({
    url: "pc/details/productdetails",
    method: 'GET',
    data: {
      id,
      MC_UID
    },
  })
}

export const addCart = (id,quantity,uid) => {
  return request({
    url: "http://www.miningcircle.com/wap/mall.do?addCart",
    method: 'GET',
    data: {
      id,
      uid,
      quantity
    },
  })
}
// 购物车-普通-列表
export const cartList = (uid) => {
  return request({
    url: "http://www.miningcircle.com/wap/trade.do?normalPurchaseCartList",
    method: 'GET',
    data: {
      uid,
    },
  })
}
// 购物车-大宗-列表
export const cartListBig = (uid) => {
  return request({
    url: "http://www.miningcircle.com/wap/trade.do?storePurchaseCartList",
    method: 'GET',
    data: {
      uid,
    },
  })
}
