<template>
  <div></div>
  <!-- <div class="wrap">
    <scroll-view class="headers" scroll-x>
      <div class="recommend">今日推荐</div>
      <ul class="ulList">
        <li v-for="(item,index) in typeList" v-bind:key="index">{{item.cname}}</li>
      </ul>
    </scroll-view> -->
    <!-- 轮播图
    <div class="swiper">
      <swiper indicator-dots="true" autoplay="true" interval="2000" duration="1000" circular="true">
        <block v-for="(item,index) in swriperData" v-bind:key="index">
          <swiper-item>
            <img :src="item.imgUrl" class="slide-image" alt>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 每日特推 --
    <div class="chart">
      <dl>
        <dt>
          <img src="../../img/1特推.png" alt>
        </dt>
        <dd>
          <span>每日特推</span>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../img/2特推.png" alt>
        </dt>
        <dd>
          <span>限时抢购</span>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../img/3特推.png" alt>
        </dt>
        <dd>
          <span>品牌特卖</span>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../img/4特推.png" alt>
        </dt>
        <dd>
          <span>超值团购</span>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../img/5特推.png" alt>
        </dt>
        <dd>
          <span>新人专享</span>
        </dd>
      </dl>
    </div>
    <!-- 全球购好物 --
    <div class="swipers">
      <img :src="arrr[0].pictUrl" alt>
    </div>
    <!-- 限时秒杀 --
    <div class="spike">
      <dl>
        <dt>
          <h3>限时秒杀</h3>
          <p>每日1000余款</p>
          <p>Go</p>
        </dt>
        <dd>
          <img src="../../img/32.png" alt>
        </dd>
      </dl>
      <dl>
        <dt>
          <h3>限时秒杀</h3>
          <p>每日1000余款</p>
          <p>Go</p>
        </dt>
        <dd>
          <img src="../../img/32.png" alt>
        </dd>
      </dl>
      <dl>
        <dt>
          <h3>限时秒杀</h3>
          <p>每日1000余款</p>
          <p>Go</p>
        </dt>
        <dd>
          <img src="../../img/32.png" alt>
        </dd>
      </dl>
      <dl>
        <dt>
          <h3>限时秒杀</h3>
          <p>每日1000余款</p>
          <p>Go</p>
        </dt>
        <dd>
          <img src="../../img/32.png" alt>
        </dd>
      </dl>
    </div>
    <!-- 今日秒杀 --
    <div class="today-list">
      <div class="today">
        <p>
          <span class="today1">今日秒杀</span>
          <span class="today2">先下单那得</span>
        </p>
        <img src="../../img/Group 2@2x.png" class="more" @tap="go2Spike" alt>
      </div>
      <!-- 秒杀列表 --
      <div class="kh-list">
        <dl v-for="(item,index) in spikeArr" v-bind:key="index"  @tap="goTodetail(item.totalStore)">
          <dt>
            <img :src="item.mainImgUrl" alt>
          </dt>
          <dd>
            <p class="over-h">{{item.title}}</p>
            <div class="present">
              <p>tiao</p>
              <span>已售完</span>
            </div>
            <div class="price">
              <p class="nprice">￥{{item.earnMoney}}</p>
              <s class="oprice">￥{{item.salesPrice}}</s>
              <img src="../../img/马上抢@2x.png" class="btn" alt>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 优选好物 --
    <div class="good-thing">
      <div class="today">
        <p>
          <span class="today1">精选好物</span>
          <span class="today2">等你来抢</span>
        </p>
        <img src="../../img/Group 2@2x.png" class="more" alt>
      </div>
      <div class="six">
        <dl v-for="(item,index) in spikeArr" v-bind:key="index">
          <dt>
            <img :src="item.mainImgUrl" alt>
          </dt>
          <dd>
            <p class="texts">{{item.title}}</p>
            <span class="price">￥{{item.totalStore}}</span>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 奶粉 --
    <div class="milk">
      <img class="bigImg" :src="arrr[1].pictUrl" alt>
      <div class="bot">
        <div class="bot-left">
          <p class="selected">精选好货</p>
          <p class="addd">
            <span class="addColor">8折</span>精选好货
          </p>
          <img src="../../img/kouhong.png" alt>
        </div>
        <div class="bot-right">
          <dl v-for="(item,index) in 2" v-bind:key="index">
            <dd>
              <p class="selected">精选好货</p>
              <p class="addd">8折精选好货</p>
            </dd>
            <dt>
              <img src="../../img/kouhong.png" alt>
            </dt>
          </dl>
        </div>
      </div>
    </div>
    <!-- 为你精选 --
    <div class="choose">
      <div class="today">
        <p>
          <span class="today1">为你精选</span>
          <span class="today2">等你来抢</span>
        </p>
      </div>
      <div class="milks">
        <div>
          <dl v-for="(item,index) in threeArr" v-bind:key="index">
            <dt>
              <img :src="item.imgUrl" alt>
            </dt>
            <dd>
              <p>{{item.title}}</p>
              <div class="discount">
                <span>包税</span>
                <span>满299减30</span>
              </div>
              <div class="milkProce">
                <span class="ft14">￥</span>
                <span class="ft22">22</span>
                <span class="ft16">.90</span>
                <span class="fcg">￥19.99</span>
                <img src="../../img/黑卡@2x.png" alt>
                <span class="ft10">赚22.44</span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="footer">
      <img :src="arrr[0].pictUrl" alt>
    </div>
  </div>-->
</template>
<script>
export default {
  data: {
    typeList: [], //顶头横滚数据
    swriperData: [], //轮播图的数据
    arrr: [], //单张数据的数组
    spikeArr: [], //精品好物数据
    threeArr: [] //三张图片
  },
  created() {
    var that = this;
    //分类列表的数据   顶部滚动条数据  (yyy)
    wx.request({
      url: "http://test.api.jinaup.com/api/open/product/category/query/1.0.0",
      data: {},
      method: "post",
      header: {
        "content-type": "application/json" // 默认值
      },
      success(res) {
        that.typeList = res.data.result;
      }
    });
    //(swiper)    轮播图   (yyy)
    wx.request({
      url: "http://test.api.jinaup.com/api/open/page/home/list/1.0.0",
      data: {},
      method: "post",
      header: {
        "content-type": "application/json" // 默认值
      },
      success(res) {
        res.data.result.map((item, index) => {
          if (item.type == "carouselImg") {
            that.swriperData = item.items;
          } else if (item.type == "spikeProduct") {
            that.spikeArr = item.spike;
            console.log(that.spikeArr)
          } else if (item.type == "adThree") {
            that.threeArr = item.items;
          } else if (item.type == "adOne") {
            that.arrr.push(item);
          }
        });
      }
    });

  },
  methods: {
    go2Spike() {
      wx.navigateTo({
        url: "/pages/spike/main"
      });
    },
    goTodetail(e) {
      console.log(e)
      wx.navigateTo({
        url: "/pages/detail/main?totalStore="+e
      });
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.headers {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.headers .recommend {
  position: absolute;
  left: 0;
  text-align: center;
  width: 20%;
  font-size: 16px;
  display: block;
  background: #fff;
  z-index: 999;
}

.headers .ulList {
  position: relative;
  width: 80%;
  display: flex;
  margin-left: 20%;
  white-space: nowrap;
}
.headers .ulList li {
  margin: 0 5px;
}
.swiper {
  width: 100%;
  height: 154px;
  margin-top: 5px;
}
.swiper img {
  width: 96%;
  height: 100%;
  margin: 0 2%;
  border-radius: 15px;
}
.chart {
  display: flex;
}
.chart dl {
  width: 20%;
  box-sizing: border-box;
  text-align: center;
  margin: 0 0 10px 0;
}
.chart dl dt {
  width: 100%;
}
.chart dl dt img {
  width: 57px;
  height: 57px;
}
.chart dl dd {
  width: 100%;
  font-size: 12px;
  line-height: 2;
}

.swipers {
  width: 100%;
  height: 104px;
}
.swipers img {
  width: 96%;
  height: 100%;
  margin: 0 2%;
  border-radius: 15px;
}
.spike {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
}
.spike dl {
  width: 46%;
  display: flex;
  justify-content: space-around;
  background: #fff3f4;
  margin: 5px 2%;
}
.spike dl:nth-child(2) {
  background: #fffcf2;
}
.spike dl:nth-child(3) {
  background: #f8f3ff;
}
.spike dl:nth-child(4) {
  background: #f1f9fd;
}
.spike dl dd img {
  width: 50px;
  height: 50px;
}
.spike dl dt h3 {
  font-size: 14px;
  color: #323a45;
}
.spike dl dt p {
  font-weight: 300;
  font-size: 12px;
  color: #757575;
}
.spike dl dt p:nth-child(3) {
  width: 40px;
  margin: 0 auto;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(255, 135, 140, 1) 0%,
    rgba(255, 99, 107, 1) 100%
  );
}

.today {
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  padding: 0 10px;
  margin: 3px 0;
  line-height: 3;
}
.today .today1 {
  font-size: 20px;
  padding-right: 10px;
}
.today .today2 {
  border-left: 2px solid #ccc;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 16px;
}
.today .more {
  width: 36px;
  height: 16px;
  margin-top: 15px;
}

.kh-list dl {
  display: flex;
  width: 100%;
}
.kh-list dl dt {
  width: 30%;
}
.kh-list dl dt img {
  width: 100%;
  height: 131px;
  padding: 20px 10px;
  box-sizing: border-box;
}
.kh-list dl dd {
  width: 70%;
}
.kh-list dl dd .over-h {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
  margin-top: 10px;
}
.kh-list dl dd .present {
  display: flex;
  justify-content: space-around;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
  color: #999da2;
}
.kh-list dl dd .price {
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  float: bottom;
  margin-top: 10px;
}
.kh-list dl dd .price .nprice {
  font-size: 22px;
  color: #fc5d7b;
}
.kh-list dl dd .price .oprice {
  text-decoration: line-through;
  line-height: 2;
  margin-top: 7px;
  font-size: 12px;
}
.kh-list dl dd .price .btn {
  width: 80px;
  height: 33px;
  margin-top: 4px;
  margin-right: 10px;
}
.good-thing .six {
  display: flex;
  flex-wrap: wrap;
}
.good-thing .six dl {
  width: 30%;
  margin: 1.5%;
}
.good-thing .six dl dt img {
  width: 123px;
  height: 123px;
}
.good-thing .six dl dd .texts {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.good-thing .six dl dd .price {
  color: #ff527f;
  font-size: 14px;
}

/* 奶粉 */
.milk {
  width: 100%;
}
.milk .bigImg {
  width: 96%;
  height: 154px;
  margin: 0 2%;
  border-radius: 15px;
}
.milk .bot {
  display: flex;
  margin-top: 20px;
  padding: 0 2%;
  box-sizing: border-box;
}
.milk .bot .bot-left {
  background: #e9e3ff;
  width: 40%;
  text-align: center;
}
.milk .bot .bot-left .selected {
  font-size: 16px;
  margin-top: 20px;
  font-weight: 600;
}
.milk .bot .bot-left .addd {
  font-size: 13px;
}
.milk .bot .bot-left .addColor {
  color: #fc5d7c;
}
/* addColor */
.milk .bot .bot-left img {
  width: 100px;
  height: 100px;
}

.milk .bot .bot-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.milk .bot .bot-right dl {
  display: flex;
  justify-content: space-around;
  line-height: 2;
  margin: 2px;
}
.milk .bot .bot-right dl:nth-child(1) {
  background: #e8f6fe;
}
.milk .bot .bot-right dl:nth-child(2) {
  background: #ffe3e0;
}
.milk .bot .bot-right dl dt img {
  width: 97px;
  height: 75px;
}
.milk .bot .bot-right dd {
  text-align: center;
}
.milk .bot .bot-right .selected {
  font-size: 16px;
}
.milk .bot .bot-right .addd {
  font-size: 13px;
}

/* 为你精选 */
.choose {
  width: 100%;
}
.choose .milks {
  width: 100%;
}
.choose .milks dl {
  display: flex;
  padding-right: 10px;
  box-sizing: border-box;
  margin: 10px 0;
}
.choose .milks dl dt img {
  width: 100px;
  height: 108px;
  margin: 10px;
}
.choose .milks dl dd p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 10px;
  line-height: 2;
}
.choose .milks dl dd .discount {
  margin-bottom: 5px;
}
.choose .milks dl dd .discount span {
  border: 1px solid #fc5d7b;
  color: #fc5d7b;
  font-size: 10px;
  padding: 1px 3px;
  box-sizing: border-box;
  margin: 0 5px;
}
.choose .milks dl dd .milkProce {
  color: #fc5d7b;
}
.choose .milks dl dd .milkProce img {
  width: 21px;
  height: 10px;
  margin: 0 3px;
}
.choose .milks dl dd .milkProce .ft14 {
  font-size: 14px;
}
.choose .milks dl dd .milkProce .ft22 {
  font-size: 22px;
}
.choose .milks dl dd .milkProce .ft16 {
  font-size: 16px;
}
.choose .milks dl dd .milkProce .fcg {
  margin-left: 5px;
  color: #a87831;
  font-size: 10px;
}
.choose .milks dl dd .milkProce .ft10 {
  font-size: 10px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(252, 93, 123, 1);
  line-height: 12px;
  background: #ffe8ed;
  margin-left: 5px;
  padding: 2px 0;
  box-sizing: border-box;
}
.footer {
  width: 100%;
}
.footer img {
  width: 100%;
  height: 154px;
  padding: 6px 10px;
  box-sizing: border-box;
  border-radius: 4px;
}
/* #A87831 */
</style>
