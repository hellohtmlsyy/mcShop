import request from '../utils/request';

const prefix = '/pc/';

export const meetingList = (id, pageNum, numPerPage) => {
  return request({
    url: `${prefix}list/meetlist`,
    method: 'GET',
    data: {
      id,
      pageNum, numPerPage
    },
  })
}


export const meetingInfo = (id) => {
  return request({
    url: `${prefix}details/meetingdetails`,
    method: 'GET',
    data: {
      id
    },
  })
}


// 报名人-列表
export const peopleList = (rid, uid) => {
  return request({
    url: "http://www.miningcircle.com/meeting.do?infolink",
    method: 'GET',
    data: {
      rid,
      uid
    },
  })
}
// 报名人-添加
export const addPeople = ({ mtiname,
  mtimobile,
  mtiemail,
  mticompany,
  mtijob},uid) => {
  return request({
    url: "http://www.miningcircle.com/meeting.do?savelink",
    method: 'GET',
    data: {
      mtiname,
      mtimobile,
      mtiemail,
      mticompany,
      mtijob,
      uid
    },
  })
}
// 报名人-删除
export const delPeople = (linkid) => {
  return request({
    url: "http://www.miningcircle.com/meeting.do?dellink",
    method: 'GET',
    data: {
      linkid
    },
  })
}
// 票-剩余票数
export const isTicket = (tid, uid) => {
  return request({
    url: "http://www.miningcircle.com/meeting.do?isticket",
    method: 'GET',
    data: {
      tid,
      uid
    },
  })
}

// 加入购物车
export const addCartMeeting = (id,type,ticketId,quantity,uid) => {
  return request({
    url: "http://www.miningcircle.com/wap/meeting.do?addCart",
    method: 'GET',
    data: {
      id,
      type,
      ticketId,
      quantity,
      uid,
    },
  })
}


