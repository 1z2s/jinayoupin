<template>
  <div>
    <div @click="goOrder">我的订单</div>
    <div @click="clickHandle" class="wrap">
  <!-- 导航 -->
      <div class="nav">
        <span @click="()=>active=index" v-for="(item,index) in txt" :key="index" :class="active === index ? 'active':''">{{item}}</span>
        <!-- <span>待付款</span>
        <span>待发货</span>
        <span>待收货</span> -->
      </div>
    <!-- 商品列表 -->
      <div class="shopList">
        <!-- 时间 -->
          <div class="listTop">
              <span>2019-01-17 17:18:50</span>
              <span>待收货</span>
          </div>
        <!-- 商品 -->
            <div class="listsection">
              <dl>
                <dt><img src="../../../static/images/待收货.jpg" alt=""></dt>
                <dd>
                  <p class="explain">帮宝适绿帮纸尿裤大号L164片超薄透气男女通用婴儿尿片尿不湿</p>
                  <span class="specification">规格:XL</span>
                  <p class="price"><span class="price2">￥52.50</span><span class="num">x1</span></p>
                </dd>
              </dl>
          </div>
        <!-- 按钮 -->
            <div class="listfoot">
            <p class="add">共计<span class="sum">2</span>件商品 合计:￥<span class="price3">52.50</span></p>
            <div class="btn">
              <button @click="goLogistics">查看物流</button>
              <button class="btn_pay" @click="showInputLayer">确认收货</button>
            </div>
          </div>
      </div>
    <!-- 密码输入框 -->
      <div v-if='showPayPwdInput'>
          <div class='bg_layer'></div>
          <div class='input_main'>
              <div class='input_title'>
                  <div class='input_back' @click='hidePayLayer'><text></text></div>
                  <text>输入支付密码</text>
              </div>
              <div class='input_tip'><text>使用会员卡余额支付需要验证身份，验证通过后才可进行支付。</text></div>
              <div class='input_row' catchtap='getFocus'>
                  <!-- <div class='pwd_item' v-for='6' :key='item' v-for-index='i'>
                      <text v-if='pwdVal.length>i'></text>
                  </div> -->
              </div>
              <div class='forget_pwd' @click='hidePayLayer'>忘记密码</div>
              <input class='input_control' password type='number' focus='payFocus' bindinput='inputPwd' maxlength='6'/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        active:0,
        txt:['全部','待付款','待发货','待收货'],
        showPayPwdInput: false,  //是否展示密码输入层
        pwdVal: '',  //输入的密码
        payFocus: true, //文本框焦点
      }
    },
    methods: {
      goOrder() {
        wx.navigateTo({
          url: '../orderdetails/main'
        })
      },
      goLogistics() {
        wx.navigateTo({
          url: '../logistics/main'
        })
      },
      showInputLayer:function(){
        //  this.setData({ showPayPwdInput: true, payFocus: true });
        this.showPayPwdInput = true;
      },
      hidePayLayer:function(){
        this.showPayPwdInput = false;
        // console.log(1111)
      }
    },
    onLoad(){
      wx.setNavigationBarTitle({
        frontColor: '#000',
        title: '我的订单'
      })
    },
  }
</script>
<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  background:rgba(243,247,247,1);
  /* display: flex;
  flex-direction: column; */
}
/* 头部导航 */
.nav{
  width: 100%;
  height: 40px;
  /* background: #f00; */
  padding:0 30px;
  box-sizing: border-box;
  /* line-height: 40px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.nav>span{
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  box-sizing: border-box;
  /* flex:1; */
  /* text-align: center; */
}
.active{
  border-bottom: solid 2px #33D6C5;
}

/* 商品列表 */
.shopList{
  width: 357px;
  height: 240px;
  background: #eee;
  margin-top:12px;
  border-radius: 6px;
  margin-left:9px;
}
/* 列表上半部 */
.listTop{
  width: 100%;
  height: 37px;
  display: flex;
  justify-content: space-between;
}
.listTop>span:nth-child(1){
  font-size: 12px;
  margin-left:15px;
  margin-top:12px;
  color:#323A45;
}
.listTop>span:nth-child(2){
  font-size: 14px;
  margin-top:10px;
  margin-right:10px;
  color:#323A45;
}
/* 列表中间部分 */
.listsection{
  width: 100%;
  height: 104px;
  /* background: #fff; */
  display: flex;
}
.listsection>dl{
  display: flex;
}
.listsection>dl>dt>img{
  width: 90px;
  height: 90px;
  margin:8px 0 6px 12px;
}
.listsection>dl>dd{
  padding:0 14px;
  box-sizing: border-box;
}
.listsection>dl>dd .explain{
   font-size: 14px;
   color:#484848;
   margin-top:6px;
   margin-right:14px;
}
.specification{
  font-size: 12px;
  color:#999DA2;
}
.price{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color:#323A45;
  margin-top:12px;
}

/* 列表尾部 */
.listfoot{
  width: 100%;
  height: 99px;
  display: flex;
  flex-direction: column;
  /* background: #00f; */
}
.add{
  width: 100%;
  font-size: 12px;
  margin-top:10px;
  margin-left:200px;
  color:#484848;
}
.sum{
  font-size: 12px;
}
.price3{
  font-size: 14px;
}
/* 按钮 */
.btn{
  display: flex;
  margin-top:10px;
  
}
.btn>button{
  display: block;
  width: 80px;
  height: 30px;
  border:solid 1px #bbbbbb;
  font-size: 13px;
  color:#323A45;
  line-height: 30px;
  text-align: center;
}
.btn>button:nth-child(1){
  margin-left:185px;
}

/* 密码支付 */
/* .btn_pay{
  margin: 100rpx auto; width: 600rpx; height: 100rpx; line-height: 100rpx; border-radius: 100rpx;
  background-color: #d3a95a; color: #fff; font-size: 36rpx; text-align: center; 
} */
/* 支付密码css start */
.bg_layer{
  position: fixed; 
  left: 0; 
  top: 0; 
  bottom: 0; 
  right: 0;
  background-color: rgba(0, 0, 0, 0.6); 
  z-index: 9998;
}
.input_main{
    position: fixed; 
    left: 0; 
    bottom: 500rpx; 
    width: 100%; 
    height: 394rpx;
    background-color: #fff; z-index: 9999;
}
.input_title{
    width: 100%; 
    height: 90rpx; 
    line-height: 90rpx; 
    text-align: center; 
    font-size: 32rpx; 
    border-bottom: 1rpx solid #e2e2e2;
}
.input_back{
  position: absolute; 
  left: 0; 
  top: 0;
  width: 80rpx; 
  height: 90rpx; 
  display: flex; 
  justify-content: center; 
  align-items: center;
}
.input_back text{
  width: 20rpx;
  height: 20rpx;
  background-color: white;
  border: 1rpx solid #aaa;
  border-width: 5rpx 0 0 5rpx;
  transform: rotate(-45deg);
}

.input_tip{  
  margin: 30rpx; 
  font-size: 24rpx; 
  color: #888; 
}

/* 密码掩码模拟 */
.input_row{
  width: 690rpx;
  margin: 0 auto; 
  height: 98rpx; 
  position: relative;
  display: flex; 
  align-items: center; 
  border: 1rpx solid #e2e2e2; 
  border-radius: 20rpx;
}

.input_row .pwd_item{
  flex: 1;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 100%; 
  border-right: 1rpx solid #e2e2e2; 
  position: relative;
}

.pwd_item:nth-last-of-type(1) { 
  border-right: 0; 
  } 

.pwd_item text { 
  width: 30rpx; 
  height: 30rpx;
   border-radius: 30rpx; 
   background-color: #555;
}


.forget_pwd{ 
  float: right; 
  margin: 30rpx; 
  width: 100rpx; 
  text-align: right; 
  font-size: 24rpx; 
  color: #ff7800;
}

/* 文本输入框位置: 设置到左边隐藏 */
.input_control { 
  position: relative; 
  left: -300rpx; 
  bottom: 0; 
  width: 100rpx; 
  height: 100rpx;
}
</style>