<template>
  <div class="wrap">
    <header>
      <dl>
        <dt>
          <img src="/static/img/Group 9@2x.png" alt>
        </dt>
        <dd>
          <p class="name">
            默默许愿00
            <img src="/static/img/黄金会员-v1@2x.png" alt>
          </p>
          <p class="codeNum">
            邀请码：C5JQ7O
            <span>复制</span>
          </p>
        </dd>
      </dl>
    </header>
    <section>
      <div class="sec-top">
        <h3>我的订单</h3>
        <div class="wallet">
          <dl>
            <dt>
              <img src="/static/img/待付款.png" alt>
            </dt>
            <dd>待付款</dd>
          </dl>
          <dl>
            <dt>
              <img src="/static/img/待付款.png" alt>
            </dt>
            <dd>待付款</dd>
          </dl>
          <dl>
            <dt>
              <span class="num">12</span>
              <img src="/static/img/待付款.png" alt>
            </dt>
            <dd>待付款</dd>
          </dl>
        </div>
      </div>
      <div class="msg">
        <ul>
          <li @tap="go2yhj">
            <div>
              <img class="img1" src="/static/img/yhj.png" alt>
              <span>我的优惠卷</span>
            </div>
            <img class="img2" src="/static/img/jt.png" alt>
          </li>
          <li>
            <div>
              <img class="img1" src="/static/img/dz.png" alt>
              <span>收货地址</span>
            </div>
            <img class="img2" src="/static/img/jt.png" alt>
          </li>
          <li>
            <div>
              <img class="img1" src="/static/img/kf.png" alt>
              <span>联系客服</span>
            </div>
            <img class="img2" src="/static/img/jt.png" alt>
          </li>
          <li>
            <div>
              <img class="img1" src="/static/img/sm.png" alt>
              <span>实名认证</span>
            </div>
            <img class="img2" src="/static/img/jt.png" alt>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},
  methods: {
    go2yhj() {
      mpvue.navigateTo({
        url: "/pages/yhj/main"
      });
    }
  }
};
</script>

<style scoped>
.wrap {
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(243, 247, 247, 1);
}
header {
  width: 100%;
  height: 110px;
  background: skyblue;
  background-image: url("/static/img/32.png");
}
header dl {
  display: flex;
}
header dl dt img {
  width: 64px;
  height: 64px;
  margin: 19px;
}
header dl dd {
  margin: 11px 10px 0 10px;
}
header dl dd .name {
  font-size: 20px;
  line-height: 2;
}
header dl dd .codeNum {
  font-size: 14px;
}
header dl dd .codeNum span {
  margin-left: 5px;
  line-height: 2;
  font-size: 10px;
  background: #35cdd0;
  color: #fff;
  padding: 3px 5px;
  box-sizing: border-box;
  border-radius: 5px;
  opacity: 0.7239;
}
header dl dd img {
  width: 31px;
  height: 17px;
}
section {
  width: 100%;
  position: absolute;
  top: 90px;
}
section .sec-top {
  width: 96%;
  margin: 0 2%;
  height: 110px;
  background: #fff;
  border-radius: 5px;
}

section .sec-top h3 {
  line-height: 2;
  padding-left: 10px;
  box-sizing: border-box;
}
section .sec-top .wallet {
  display: flex;
  justify-content: space-around;
}
section .sec-top .wallet dl dt img {
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}
section .sec-top .wallet dl dt {
  position: relative;
}
section .sec-top .wallet dl dt .num {
  position: absolute;
  left: 30px;
  top: -5px;
  padding: 1px;
  font-size: 10px;
  border: 1px solid rgba(252, 93, 123, 1);
  border-radius: 50%;
  color: #fc5d7b;
}
section .sec-top .wallet dl dd {
  font-size: 12px;
  color: #70757d;
  text-align: center;
}
section .msg {
  width: 96%;
  margin: 0 2%;
  margin-top: 10px;
}
section .msg ul {
  background: #fff;
}
section .msg ul li {
  display: flex;
  height: 48px;
  justify-content: space-between;
}
section .msg ul li div {
  display: flex;
}
section .msg ul li div .img1 {
  width: 18px;
  height: 18px;
  margin: 15px;
}
section .msg ul li div span {
  font-size: 14px;
  margin: 15px 15px 0 0;
}
section .msg ul li .img2 {
  width: 8px;
  height: 12px;
  margin: 17px 18px 0 0;
}
</style>
