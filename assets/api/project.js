import request from '../utils/request';

const prefix = '/pc/project/';

export const groomProject = (shopId) => {
  return request({
    url: "/pc/list/homePageProjectList",
    method: 'GET',
    data: {
      shopId
    },
  })
}


export const projectList = (shopId,pageNum,numPerPage) => {
  return request({
    url: "/pc/list/projectlist",
    method: 'GET',
    data: {
      shopId,
      pageNum,numPerPage
    },
  })
}

export const projectInfo = (id,MC_UID) => {
  return request({
    url: "/pc/details/projectdetails",
    method: 'GET',
    data: {
      id,
      MC_UID
    },
  })
}

