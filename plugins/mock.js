// var axios = require('axios');
// var MockAdapter = require('axios-mock-adapter');

// var mock = new MockAdapter(axios);
// import Mock from 'mockjs'

// const photoDetails = Mock.mock({
//   'list|10':[{
//     title:Mock.Random.ctitle(),
//     img:Mock.Random.image()
//   }]
// })

// mock.onGet('/photoDetails').reply(function(config){
// 	return [200,{data:photoDetails,errMsg:null,success:true}]
// });


// // 首页-公司留言
// // accInfo
// // 首页-的企业基本信息
// const  baseInfo = Mock.mock({
//   shopId:'868308159016472576',
//   logo:Mock.Random.image('200x130'),
//   companyName:Mock.Random.ctitle(),
//   mainProduct:Mock.Random.ctitle(),
//   country:Mock.mock('@region'),
//   province:Mock.mock('@province'),
//   city:Mock.mock('@city'),
//   "attention|1": true,
//   introduction:Mock.mock('@paragraph(1, 3)'),
//   contactPerson:Mock.mock('@cname'),
//   contactTel:'400400400400',
//   contactMobile:18631231234,
//   website:'http://baidu.com',
//   contactEmail:Mock.Random.email()
// })
// mock.onGet('/pc/shop/baseInfo').reply(function(config){
// 	return [200,{data:baseInfo,errMsg:null,success:true,errCode:1}]
// });
// // 首页-推荐商品
// const  groomMall = Mock.mock({
//   'mallBOS|1-10':[{
//     title:Mock.Random.ctitle(),
//     img:Mock.Random.image('215x215'),
//     "price|1-100":202,
//     "id|1-100":1
//   }]
// })
// mock.onGet('/pc/list/homePageGoodsList').reply(function(config){
// 	return [200,{data:groomMall,errMsg:null,success:true,errCode:0}]
// });
// // 首页-推荐项目
// const  groomProject = Mock.mock({
//   'projectBOS|1-10':[{
//     title:Mock.Random.ctitle(),
//     img:Mock.Random.image('215x215'),
//     "id|1-100":1,
//     mineralSpecies:Mock.Random.ctitle(),
//     stage:Mock.Random.ctitle(),
//     brightSpot:Mock.Random.ctitle(),
//     "transferAmount|1-100":202,
//     transferShareRatio:'10%',
//     region:Mock.mock('@region'),
//     "viewTimes|1-100":1,
//     releaseDate:Mock.Random.date('yyyy-MM-dd')
//   }]
// })
// mock.onGet('/pc/list/homePageProjectList').reply(function(config){
// 	return [200,{data:groomProject,errMsg:null,success:true,errCode:0}]
// });

// // 首页-标杆旗舰店
// const  styleGood = Mock.mock({
//   shopSignUrl:Mock.Random.image('50x50'),
//   linearGradientLeft:'4a535b',
//   linearGradientRight:'2b2525',
//   buttonLinearGradientTop:'00c1f9',
//   buttonLinearGradientBottom:'00a0e9',

// })
// mock.onGet('/pc/template/homePageCss').reply(function(config){
// 	return [200,{data:styleGood,errMsg:null,success:true,errCode:0}]
// });

// // 商品-列表
// const mallList = Mock.mock({
//   "shopId|1-100":1,
//   "numPerPage":12,
//   "pageNum":1,
//   "totalCount":8,
//   'mallBOS|1-10':[{
//     id:868308159016472576,
//     title:Mock.Random.ctitle(),
//     img:Mock.Random.image('215x215'),
//     "price|1-100":202,
//   }]
// })

// mock.onGet('/pc/list/commoditylist').reply(function(config){
// 	return [200,{data:mallList,errMsg:null,success:true}]
// });

// // 产品详情
// const mallInfo = Mock.mock({
//   imgs:{
//     "img":Mock.Random.image('215x215'),
//     "prdpic1":Mock.Random.image('10x10'),
//     "prdpic2":Mock.Random.image('20x20'),
//     // "prdpic3":Mock.Random.image('30x66'),
//     // "prdpic4":Mock.Random.image('40x66'),
//     // "prdpic5":Mock.Random.image('50x66'),
//     // "prdpic6":Mock.Random.image('60x66'),
//   },
//   title:Mock.Random.ctitle(),
//   desc:Mock.mock('@paragraph(1, 3)'),
//   "price|1-100":202,
//   "discounts|1-100":202,
//   adr:Mock.mock('@region'),
//   spec:'规格',
//   "beginNum|1-1000": 100,
//   "num|1-100": 100,
//   content:Mock.mock('@paragraph(1, 3)')
//   // bannerTemplateVOS:{
//   //   'imgUrl|5-10':[Mock.Random.image('215x215')]
//   // }
// })

// mock.onGet('/pc/details/productdetails').reply(function(config){
// 	return [200,{data:mallInfo,errMsg:null,success:true}]
// });

// // 公司-全部信息
// const fullInfo = Mock.mock({
//   shopId:"868308159016472576",
//         "logo": Mock.Random.image('215x215'),
//         "companyName":Mock.Random.ctitle(),
//         "type":"1",
//         "country":Mock.mock('@region'),
//         "province":Mock.mock('@province'),
//         "city":Mock.mock('@city'),
//         "introduction":Mock.Random.cparagraph(1),
//         "mainProduct":Mock.Random.ctitle(),
//         "aptitudeUrl":Mock.Random.image('215x215'),
//         "manageBusiness":Mock.Random.ctitle(),
//         "industry":"1",
//         "address":"国贸",
//         "postalCode":"100081",
//         "establishmentTime":"1522857600000",
//         "website":"http: //www.miningcircle.com/",
//         "registeredCapital":"10000",
//         "businessNo":"axweuih",
//         "businessLicense":"http://www.miningcircle.com/img/home/logo2.0.jpg",
//         "staffNumber":"60",
//         "realField":"123",
//         "qualityControl":"123",
//         "turnover":"123",
//         "export":"123",
//         "managementSystem":"123123",
//         "contactPerson":"段段段",
//         "contactTel":"68935555",
//         "contactMobile":"13301266260",
//         "contactEmail":"1@1.cn",
//         "contactPosition":"12123",
//         "contactDepartment":"2123",
//         "attention":false
// })

// mock.onGet('/pc/shop/fullInfo').reply(function(config){
// 	return [200,{data:fullInfo,errMsg:null,success:true}]
// });
// // 新闻-列表页
// const newsList = Mock.mock({
//   'data|1-10':[{
//     title:Mock.Random.ctitle(),
//     img:Mock.Random.image('200x130'),
//     vdesc:Mock.Random.cparagraph(1, 3),
//     view_times:Mock.Random.date('yyyy-MM-dd'),
//     'insert_time|1-1000':202,
//     "id|1-100":1
//   }]
// })

// mock.onGet('/pc/shop/news/list').reply(function(config){
// 	return [200,{data:newsList,errMsg:null,success:true}]
// });

// // 新闻-详情
// const newsInfo = Mock.mock({
//   title:Mock.Random.ctitle(),
//   source:Mock.Random.ctitle(),
//   "views|+1": 202,
//   date:Mock.Random.date('yyyy-MM-dd'),
//   content:Mock.Random.cparagraph(),
// })

// mock.onGet('/pc/shop/news/details').reply(function(config){
// 	return [200,{data:newsInfo,errMsg:null,success:true}]
// });

// // 公司-关注
// const atten = Mock.mock({
//   success:true
// })

// mock.onGet('/pc/attention/attentionMall').reply(function(config){
// 	return [200,{data:atten,errMsg:null,success:true}]
// });

// // 公司-取消关注
// const cancelAtten = Mock.mock({
//   success:false
// })

// mock.onGet('/pc/attention/cancelAttentionMall').reply(function(config){
// 	return [200,{data:cancelAtten,errMsg:null,success:true}]
// });

// // 项目-列表
// const projectList = Mock.mock({
//   shopId:868308159016472576,
//   pageNum:1,
//   numPerPage:10,
//   totalCount :100,
//   'projectBOS|1-10':[{
//     title:Mock.Random.ctitle(),
//     img:Mock.Random.image('200x130'),
//     releaseDate:Mock.Random.date('yyyy-MM-dd'),
//     'viewTimes|1-1000':202,
//     "id|1-100":1,
//     mineralSpecies:Mock.Random.ctitle(),
//     stage:Mock.Random.ctitle(),
//     brightSpot:Mock.Random.ctitle(),
//     "transferAmount|1-100":202,
//     transferShareRatio:'10%',
//     region:Mock.mock('@city'),

//   }]
// })

// mock.onGet('/pc/list/projectlist').reply(function(config){
// 	return [200,{data:projectList,errMsg:null,success:true}]
// });


// // 项目-详情
// // const projectInfo = Mock.mock({
// //   img:Mock.Random.image('200x130'),
// //   title:Mock.Random.ctitle(),
// //   downUrl:'',
// //   "price|1-100":202,
// //   type:'矿种类型',
// //   ratio:'转让比例',
// //   stage:'阶段',
// //   adr:Mock.mock('@city'),
// //   date:Mock.Random.date('yyyy-MM-dd'),
// //   content:Mock.mock('@paragraph(1, 3)'),
// //   taste:'原矿品位',
// //   isattention:'false',
// //   'pageview|1-1000':202,
// // })

// // mock.onGet('/pc/details/projectdetail').reply(function(config){
// // return [200,{data:projectInfo,errMsg:null,success:true}]
// // });

// // 会展-列表
// const meetingList = Mock.mock({
//   shopId:868308159016472576,
//   pageNum:1,
//   numPerPage:10,
//   totalCount :100,
//   'meetingBOS|1-10':[{
//     title:Mock.Random.ctitle(),
//     img:Mock.Random.image('200x130'),
//     desc:'展览',
//     "id|1-100":1,
//     beginDate:Mock.Random.date('yyyy-MM-dd'),
//     endDate:Mock.Random.date('yyyy-MM-dd'),
//     adr:Mock.mock('@city'),
//   }]
// })

// mock.onGet('/pc/list/meetlist').reply(function(config){
// 	return [200,{data:meetingList,errMsg:null,success:true}]
// });

// // 会展-详情
// const meetingInfo = Mock.mock({
//     img:Mock.Random.image('200x130'),
//     title:Mock.Random.ctitle(),
//     desc:Mock.mock('@paragraph(1, 3)'),
//     beginDate:Mock.Random.date('yyyy-MM-dd'),
//     endDate:Mock.Random.date('yyyy-MM-dd'),
//     date:Mock.Random.date('yyyy-MM-dd'),
//     adr:Mock.mock('@city'),
//     scale:'规模',
//     type:'免费',
//     num:'数量',
//     content:Mock.mock('@paragraph(1, 3)'),
//     "id|1-100":1,
// })

// mock.onGet('/pc/details/meetingdetails').reply(function(config){
// 	return [200,{data:meetingInfo,errMsg:null,success:true}]
// });
