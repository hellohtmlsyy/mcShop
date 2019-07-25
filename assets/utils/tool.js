// 转换为金额（用逗号分隔，2位小数）
// export default class  Tool{
//   static lowerAmount(s,n){
//     n = n > 0 && n <= 20 ? n : 2;
//     s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";//更改这里n数也可确定要保留的小数位
//     var l = s.split(".")[0].split("").reverse(),
//  r = s.split(".")[1];
//     t = "";
//     for (i = 0; i < l.length; i++) {
//         t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
//     }
//     return t.split("").reverse().join("") + "." + r.substring(0, 2);//保留2位小数  如果要改动 把substring 最后一位数改动就可
//   }
// }

export function setCookie(cname,cvalue,exdays){
  var d = new Date()
  d.setTime(d.getTime() + (exdays*24*60*60*1000))
  var expires = 'expires=' + d.toGMTString()
  document.cookie = `${cname}=${cvalue};${expires};path=/;domain=.miningcircle.com`
}

// 获取cookie
export function getCookie(cname,ck){
  var name = cname + '=';
  if(ck){
    var ca = ck.split(';');
  }else{
    var ca = document.cookie.split(';');

  }

  for(var i = 0 ; i<ca.length;i++){
    var c = ca[i].trim()
    if(c.indexOf(name) == 0) return c.substring(name.length,c.length)

  }
  return ''
}
// 删除cookie
export function delCookie(cname){
  setCookie(cname,'','-1')
}

// 分享到qq空间
export function shareQQKJ(url,title,picurl){
  var q = {
    url: url,
    showcount: '1',
    /*是否显示分享总数,显示：'1'，不显示：'0' */
    desc: '',
    /*默认分享理由(可选)*/
    summary: '',
    /*分享摘要(可选)*/
    title: title,
    /*分享标题(可选)*/
    site: 'c.miningcircle.com',
    /*分享来源 如：腾讯网(可选)*/
    pics: picurl,
    /*分享图片的路径(可选)*/
    style: '203',
    width: 98,
    height: 22
  };
  var s = [];
  for (var i in q) {
    s.push(i + '=' + encodeURIComponent(q[i] || ''));
  }
  var content = s.join('&')
  window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + content)
}
// 分享到微博
export function shareWB(url,title,pic){
  window.open('http://service.weibo.com/share/share.php?url=' + url + '&title=' + title + '&pic=' + pic)
}



