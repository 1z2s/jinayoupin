<template>
  <div class="conponlist">
      <div class="Top_list">
        <ul class="uls">
          <li  v-for="(item,index) in List" :class="ind==index?'size active':'size'" :key="index" @click="activeClass(index)">{{item}}</li>
        </ul>
      </div>

      <!-- 此处开始进入优惠券的列表 -->

      <div class="List">
          <ul class="conponList_title">
            <li class="title_list">
                <div class="left_info">
                    <div class="top">
                       <p class="price">￥</p>
                        <p class="price1">180</p>
                    </div>
                    <p class="manzu">满 ￥1000使用</p>
                </div>
                <div class="right">
                  <p class="new">新人礼满 1000减180</p>
                  <div class="bottom">
                    <p class="time">2018.12.31到期</p>
                    <b class="add">立即使用</b>
                  </div>
                </div>
            </li>
            <div class="info">
                <p class="p">指定仓库\商家部分分类商品使用</p>
            </div>
          </ul>
           <ul class="conponList_title">
            <li class="title_list">
                <div class="left_info">
                    <div class="top">
                       <p class="price">￥</p>
                        <p class="price1">180</p>
                    </div>
                    <p class="manzu">满 ￥1000使用</p>
                </div>
                <div class="right">
                  <p class="new">新人礼满 1000减180</p>
                  <div class="bottom">
                    <p class="time">2018.12.31到期</p>
                    <b class="add">立即使用</b>
                  </div>
                </div>
            </li>
            <div class="info">
                <p class="p">指定仓库\商家部分分类商品使用</p>
            </div>
          </ul>
      </div>

  </div>
</template>
<script>
export default {
  data:{
    List:['未使用','已使用','已过期'],
    ind:0
  },
  methods:{
    activeClass(index){
      this.ind=index
    }
  }
}
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
    page{
        width:100%;
        height:100%;
        display:block;
    }
  .conponlist{
    width:100%;
    height:100%;
    display: block;
    display:flex;
    flex-direction:column;
  }
  .Top_list{
    width:100%;
    height:40px;
    box-shadow:0px 1px 0px 0px rgba(246,246,246,1);
  }
  .uls{
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:space-around;
  }
  .size{
    width:45px;
    height:100%;
    font-size:15px;
    line-height:40px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
    position: relative;;
  }
   .active::after{
      content: '';
      width:54px;
      height:3px;
      background:rgba(51,214,197,1);
      position: absolute;
      bottom:0;
      left:-2px;

    }
    .List{
      flex:1;
      background:rgba(243,247,247,1);
      display:block;
      padding-top:25px;
    }
    .title_list{
      width:95%;
      height:92px;
      display:block;
      background:linear-gradient(236deg,rgba(253,158,163,1) 0%,rgba(254,122,173,1) 100%);
      border:.5px solid rgba(252,93,123,1);;
      display:flex;
      margin:0 auto;
      border-radius:5px;
    }
    .info{
       width:95%;
       height:30px;
       background:rgba(255,255,255,1);
       display:block;
       margin:0 auto;
      border-radius:8px;
    }
    .left_info{
      width:127px;
      height:92px;
      border-right:1px dashed #fff;
    }
    .top{
      width:127px;
      display:flex;
      padding-left:25px;
    }
    .price1{
      width:58px;
      height:50px;
      font-size:36px;
      font-family:PingFangSC-Semibold;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:50px;
    }
    .price{
      width:15px;
      height:21px;
      font-size:15px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
      padding-top:22px;
    }
    .manzu{
      height:17px;
      font-size:12px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:17px;
      padding-left:25px;
    }
    .right{
      flex:1;
    }
    .new{
      height:20px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:20px;
      padding-top:19px;
      padding-left:12px;
    }
    .time{
      height:17px;
      font-size:12px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:17px;
      padding-top:11px;
      padding-left:12px;
    }
    .bottom{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-top:5px;
      padding-right:8px;
    }
    .add{
      width:70px;
      height:28px;
      background:rgba(255,255,255,1);
      border-radius:4px;
      font-size:12px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(252,93,123,1);
      display:flex;
      justify-content:center;
      line-height:28px;
    }
    .p{
      line-height:30px;
      font-size:12px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(153,157,162,1);
      padding-left:15px;
    }
    .conponList_title{
      margin-bottom:20px;
    }
</style>
