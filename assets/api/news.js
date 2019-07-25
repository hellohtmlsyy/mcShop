import request from '../utils/request';

const prefix = '/pc/shop/news/';

export const newsList = (id,pageNum,numPerPage) => {
  return request({
    url: `${prefix}list`,
    method: 'GET',
    data: {
      id,
      pageNum,
      numPerPage
    },
  })
}

export const newsInfo = (id) => {
  return request({
    url: `${prefix}details`,
    method: 'GET',
    data: {
      id
    },
  })
}
