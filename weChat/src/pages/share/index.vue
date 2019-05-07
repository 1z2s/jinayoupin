<template>
  <div class="ShareWrap">
    <h2>雅诗兰黛口红420倾慕唇膏 保湿滋润玫瑰</h2>
    <div class="price">【在售价】168元</div>

    <div class="center">
      <div class="left">
        <dl>
          <dt>
            <img src="/static/images/1.png">
          </dt>
          <dd>
            <span>默默许愿…分享给你一个商品</span>
            <span>邀请码：C5JQD7O</span>
          </dd>
        </dl>
        <div class="bigImg">
          <img src="/static/images/2.png"/>
        </div>
        <div class="text">雅诗兰黛口红420倾慕唇膏 保湿滋润玫瑰</div>
        <div class="foot">
          <div class="footLeft">
            <p>
              <span>
                <i>￥</i>
                <b>168</b>
              </span>
              <span>￥499</span>
            </p>
            <p>长按识别二维码访问</p>
          </div>
          <div class="footRight">
            <img src="/static/images/3.png"/>
          </div>
        </div>
      </div>
      <div class="prolist">
        <div class="prolists">
          <image class="img1" src="/static/images/true2.png"/>
          <image class="img2" src="/static/images/2.png"/>
        </div>
        <div class="prolists">
          <image class="img1" src="/static/images/true.png"/>
          <image class="img2" src="/static/images/2.png"/>
        </div>
        <div class="prolists">
          <image class="img1" src="/static/images/true.png"/>
          <image class="img2" src="/static/images/2.png"/>
        </div>
        <div class="prolists">
          <image class="img1" src="/static/images/true.png"/>
          <image class="img2" src="/static/images/2.png"/>
        </div>
        <div class="prolists">
          <image class="img1" src="/static/images/true.png"/>
          <image class="img2" src="/static/images/2.png"/>
        </div>
        <div class="prolists">
          <image class="img1" src="/static/images/true.png"/>
          <image class="img2" src="/static/images/2.png"/>
        </div>
        <div class="prolists">
          <image class="img1" src="/static/images/true.png"/>
          <image class="img2" src="/static/images/2.png"/>
        </div>
        <div class="prolists">
          <image class="img1" src="/static/images/true.png"/>
          <image class="img2" src="/static/images/2.png"/>
        </div>
        <div class="prolists">
          <image class="img1" src="/static/images/true.png"/>
          <image class="img2" src="/static/images/2.png"/>
        </div>
      </div>
    </div>

    <div class="footer">
      <ul>
        <li>
          <img src="/static/images/4.png">
          <span>复制文案</span>
        </li>
        <li>
          <img src="/static/images/5.png">
          <span>朋友圈</span>
        </li>
        <li>
          <img src="/static/images/6.png">
          <span>保存到相册</span>
        </li>
        <li>
          <img src="/static/images/7.png">
          <span>微信好友</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {},

  components: {},

  methods: {}
};
</script>

<style>
.ShareWrap {
  width: 100%;
  height: 100%;
}

.ShareWrap h2 {
  font-weight: 600;
  font-size: 45rpx;
  width: 658rpx;
  margin: 0 auto;
  margin-top: 20rpx;
}

.price {
  width: 658rpx;
  height: 60rpx;
  margin: 0 auto;
  margin-top: 20rpx;
}

.center {
  width: 100%;
  height: 795rpx;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 55%;
  height: 760rpx;
  margin-left: 15rpx;
}

.left dl {
  width: 100%;
  display: flex;
  height: 80rpx;
  display: flex;
  align-items: center;
}
.left dl dt {
  width: 18%;
  text-align: center;
  margin-right: 17rpx;
}
.left dl dt img {
  width: 60rpx;
  height: 60rpx;
}

.left dl dd {
  font-size: 24rpx;
  flex: 1;
  line-height: 33rpx;
  display: flex;
  flex-direction: column;
}
.bigImg {
  margin-top: 25rpx;
}
.bigImg img {
  width: 412rpx;
  height: 400rpx;
}

.text {
  font-size: 30rpx;
}

.foot {
  height: 195rpx;
  display: flex;
  justify-content: space-between;
  margin-top: 25rpx;
  padding: 0 15rpx;
}

.footLeft p:first-child {
  display: flex;
  font-size: 24rpx;
  height: 50rpx;
  align-items: center;
}
.footLeft p:first-child span {
  margin: 0 3rpx;
  display: flex;
}
.footLeft p:first-child span i {
  margin-top: 10rpx;
}
.footLeft p:first-child span b {
  font-size: 36rpx;
  color: red;
  font-weight: bold;
}

.footLeft p:first-child span:last-child {
  color: #ccc;
  font-size: 24rpx;
  margin-top: 5rpx;
}

.footLeft p:last-child {
  font-size: 28rpx;
}

.footRight img {
  width: 120rpx;
  height: 120rpx;
}

.prolist {
  width: 580rpx;
  display: flex;
  flex-wrap: wrap;
}
.prolists {
  width: 140rpx;
  height: 140rpx;
  border: 2rpx solid #ededed;
  margin-left: 15rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 18rpx;
}
.prolists .img1 {
  width: 42rpx;
  height: 42rpx;
  position: absolute;
  top: 2px;
  right:2px;
}
.prolists .img2 {
  width: 100rpx;
  height: 100rpx;
}

.footer {
  height: 175rpx;
}

.footer ul {
  display: flex;
  justify-content: space-around;
}

.footer ul li {
  text-align: center;
  font-size: 30rpx;
  display: flex;
  flex-direction: column;
}

.footer ul li img {
  width: 100rpx;
  height: 100rpx;
  margin: 15rpx auto;
}
</style>
