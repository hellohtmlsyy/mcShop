<template>
	<footer class="footerMy">
    <div>
			<div class="rowMy wrap hidden-sm">
        <div class="df">
          <div class="colMy">
            <h3 class="title">友情链接</h3>
            <ul>
              <li class="df">
                <div class="lab-box">
                  <span>矿业公司：</span>
                </div>
                <div class="txt-box">
                  <a class="txt" href="http://www.minmetals.com.cn/" target="_blank">五矿集团</a>
                  <a class="txt" href="http://www.chalco.com.cn/" target="_blank">中铝集团</a>
                  <a class="txt" href="http://www.zjky.cn/" target="_blank">紫金集团</a>
                  <a class="txt" href="http://www.gold-zhaoyuan.com/" target="_blank">招金集团</a>
                    <a class="txt" href="http://www.sd-gold.com/" target="_blank">山金集团</a>
                </div>
              </li>
              <li class="df">
                <div class="lab-box">
                  <span>银行机构：</span>
                </div>
                <div class="txt-box">
                  <a class="txt" href="http://www.abchina.com/cn/" target="_blank">农业银行</a>
                  <a class="txt" href="http://www.ccb.com/cn/home/index.html" target="_blank">建设银行</a>
                  <a class="txt"  href="http://www.cmbc.com.cn/" target="_blank">民生银行</a>
                  <a class="txt" href="http://bank.pingan.com/" target="_blank">平安银行</a>
                    <a class="txt" href="http://www.cmbchina.com/" target="_blank">招商银行</a>
                    <a class="txt" href="http://www.hxb.com.cn/home/cn/" target="_blank">华夏银行</a>
                </div>
              </li>
              <li class="df">
                <div class="lab-box">
                  <span>行业部门：</span>
                </div>
                <div class="txt-box">
                  <a  class="txt" href="http://www.chinamining.org.cn/" target="_blank">中国矿业联合会</a>
                  <a  class="txt" href="http://www.chinania.org.cn/" target="_blank">中国有色金属工业协会</a>
                  <a  class="txt" href="http://www.mmac.org.cn/" target="_blank">中国冶金矿山企业协会</a>
                  <a  class="txt" href="http://www.cnmia.cn/" target="_blank">中国非金属工业协会</a>
                </div>
              </li>
              <li class="df">
                <div class="lab-box">
                  <span >清蓝集团：</span>
                </div>
                <div class="txt-box">
                  <a href="http://www.goldenlend.com/" target="_blank">黄金贷</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="colMy">
            <h3 class="title">客户服务</h3>
            <div class="df">
              <div class="lab-box">
                <span >银行机构：</span>
              </div>
              <div class="txt-box df jcSa">
                <div>
                  <div>
                    <img src="../static/imgs/qr/dingyue.png" alt="">
                    <p class="taC">服务号</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img src="../static/imgs/qr/fuwu.png" alt="">
                    <p class="taC">服务号</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="df">
              <div class="lab-box">
                <span >手机客户端：</span>
              </div>
              <div class="txt-box df jcSa">
                <div >
                  <div >
                    <img src="../static/imgs/qr/android.png" alt="">
                    <p class="taC">Android</p>
                  </div>
                </div>
                <div >
                  <div >
                    <img src="../static/imgs/qr/iphone.png" alt="">
                    <p class="taC">iphone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="colMy">
            <h3 class="title">友情链接</h3>
            <div></div>
            <div class="contact">
              <p>客服电话：</p>
              <p><a href="tel:400-819-6985">400-819-6985</a><span>(9:00-18:00)</span></p>
              <p>地址：北京朝阳区建国门外大街中海广场5层</p>
              <p><a href="mailto:info@miningcircle.com">邮箱：info@miningcircle.com</a></p>
            </div>
          </div>
        </div>
			</div>
			<div class="copy taC">
				©2014&nbsp;矿业圈&nbsp;All&nbsp;rights&nbsp;reserved&nbsp;&nbsp;|&nbsp;&nbsp;北京清蓝矿业圈信息科技有限公司&nbsp;&nbsp;|&nbsp;&nbsp;<a class="hov-pri" href="http://www.miningcircle.com/aboutus.do" target="_blank">关于我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="hov-pri" href="">京ICP证150482</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="hov-pri" href="">京公网安备11010502027200</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="hov-pri" href="">京ICP备14044935号-2</a>
			</div>
    </div>
	</footer>

</template>

<script>
	export default {
		data(){
			return{

			}
		}
	}
</script>

<style lang="less" scoped>
@media (max-width: 991px) and (min-width: 768px){
  .hidden-sm {
      display: none;
  }
}
@media (max-width: 767px){
  .hidden-sm {
      display: none;
  }
}

  .footerMy{
    color:#fff;
    background: #585f69;
    font-size: 12px;
    margin-top: 25px;
    a{
      color: #fff;
      line-height: 30px;
    }
    .rowMy{

      .colMy{
        flex:1;
        padding: 0 5px;
        .title{
          margin-bottom: 10px;
          font-size: 16px;
          padding: 10px 0;
          border-bottom: 2px solid #ccc;
        }
        img{
          margin: 5px 0;
        }
        // li{
          .lab-box{
            width: 25%;
            span{
              line-height: 30px;
            }
          }
          .txt-box{
            width: 75%;

          }
        // }
        .txt{
          padding: 8px;
        }
        .contact{
          line-height: 30px;
        }

      }
    }
    .copy{
      background: #3E4753;
      padding: 10px;
    }
  }
</style>
