<template>
  <div>
    <view class='index'>
      <scroll-view scroll-x="true" class="uls">
        <li v-for="(item,index) in list" :key="index" @click="btn(index)" :class="index == ind ? 'active' : ''">{{item}}</li>
      </scroll-view>
    </view>
        <div class="nav">
            <dl>
              <dd><img src="/static/images/yifu.png" alt=""></dd>
              <dt>婴儿服装</dt>
            </dl>
            <dl>
              <dd><img src="/static/images/yifu.png" alt=""></dd>
              <dt>童装</dt>
            </dl>
            <dl>
              <dd><img src="/static/images/yifu.png" alt=""></dd>
              <dt>童鞋</dt>
            </dl>
            <dl>
              <dd><img src="/static/images/yifu.png" alt=""></dd>
              <dt>宝宝寝居</dt>
            </dl>
            <dl>
              <dd><img src="/static/images/yifu.png" alt=""></dd>
              <dt>女装</dt>
            </dl>
            <dl>
              <dd><img src="/static/images/yifu.png" alt=""></dd>
              <dt>男装</dt>
            </dl>
            <dl>
              <dd><img src="/static/images/yifu.png" alt=""></dd>
              <dt>女鞋</dt>
            </dl>
            <dl>
              <dd><img src="/static/images/yifu.png" alt=""></dd>
              <dt>男鞋</dt>
            </dl>
        </div>
       <div class="tbar">
         <span>综合</span>
         <span>最新</span>
         <span>价格</span>
       </div>

     <div class="dls">
      <dl>
        <dd><img src="/static/images/zhi.png" alt=""></dd>
        <dt>
          <p>【凑单6包减80】宝宝的心呵护</p>
           <b>￥22.00</b>
        </dt>
      </dl>
      <dl>
        <dd><img src="/static/images/zhi.png" alt=""></dd>
        <dt>
          <p>【凑单6包减80】宝宝的心呵护</p>
           <b>￥22.00</b>
        </dt>
      </dl>
       <dl>
        <dd><img src="/static/images/zhi.png" alt=""></dd>
        <dt>
          <p>【凑单6包减80】宝宝的心呵护</p>
           <b>￥22.00</b>
        </dt>
      </dl>
       <dl>
        <dd><img src="/static/images/zhi.png" alt=""></dd>
        <dt>
          <p>【凑单6包减80】宝宝的心呵护</p>
           <b>￥22.00</b>
        </dt>
      </dl>
     </div>
     <div class="footer">
         <router-link to="">首页</router-link>
         <router-link to="">购物车</router-link>
         <router-link to="">我的</router-link>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  data () {
    return{
      list:[
           "今日推荐",
           "纸尿裤",
           "母婴专区",
           "服装",
           "家具",
           "小家电"
        ],
     ind:0
    }
  },

  components: {

  },

  methods: {
     btn(index){
       console.log(index)
         this.ind=index;
     },

  },

}
</script>

<style lang="scss" scoped>
.index{
   .uls{
       width: 100%;
       display: flex;
       white-space: nowrap;
       li{
          display: inline-block;
          width: 100px;
       }
    }

}
.active{
       color: red;
}

.nav{
   width: 100%;
   height:240px;
   margin-top: 10px;
   dl{
      width: 25%;
      height: 100px;
      float: left;
      text-align: center;
      margin-top: 20px;
     dd{
       img{
          width: 44px;
          height: 44px;
       }
     }
     dt{
        font-size: 18px;
     }
   }
}
.tbar{
   width: 100%;
   height: 30px;
   display: flex;
   justify-content: space-around;
   margin-top: 10px;
   background: #ccc;
}
.dls{
   width: 100%;
   height: 100%;
   dl{
       height:230px;
       width:48%;
       float: left;
       margin-left:4px;
      dd {
        text-align: center;
        margin-top: 25px;
          img{
              width: 100px;
              height: 120px;
          }
      }
      dt{
          margin-top: 15px;
         p{
            font-size: 15px;
         }
         b{
           color: red;
         }
      }

   }
}



.footer{
   width: 100%;
   height: 40px;
   line-height: 40px;
   background: #ccc;
   display: flex;
   justify-content: space-around;

 }
</style>

