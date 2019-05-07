<template>
  <!-- <div>
        <p>推荐页面</p>
        <button @click='phone'>手机</button>
    </div> -->
  <div class="wrap">
    <!-- <img src="/static/images/man_2.jpg" alt=""> -->
    <image src="/static/images/man_2.jpg" mode="widthFix" alt=""></image>
    <div class="refer">
      <input type="text" v-model="value" placeholder="请输入邀请码">
      <button :class="status?'able':''" :disabled="status?'true':''" @click="submit">提交</button>
    </div>
    <div class="visitor" :id="showGroup?'':'show'">

    </div>
    <div class="hint">- 无邀请码可选择以下团队加入 -</div>
    <ul :class="showGroup?'list low':'list'">
      <li>
        <image src="/static/images/man_1.jpg" mode="widthFix" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数: 1325638372</p>
        </div>
        <span>立即加入</span>
      </li>
      <li>
        <image src="/static/images/man_1.jpg" mode="widthFix" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数: 1325638372</p>
        </div>
        <span>立即加入</span>
      </li>
      <li>
        <image src="/static/images/man_1.jpg" mode="widthFix" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数: 1325638372</p>
        </div>
        <span>立即加入</span>
      </li>
      <li>
        <image src="/static/images/man_1.jpg" mode="widthFix" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数: 1325638372</p>
        </div>
        <span>立即加入</span>
      </li>
      <li>
        <image src="/static/images/man_1.jpg" mode="widthFix" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数: 1325638372</p>
        </div>
        <span>立即加入</span>
      </li>
    </ul>
    <div :class="{mask:tag,masks:!tag}">
        <button class="btn" open-type="getUserInfo" type="primary" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">用户登录</button>
    </div>
  </div>


</template>

<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  export default {
    data() {
      return {
        status: 0,//btn按钮是否禁用
        showGroup:false,//邀请码正确
        value:"5645",//text文本框的值
        tag : true//控制遮罩显示隐藏
      }
    },

    components: {
    },
    methods: {
      ...mapActions({
          bindPhone: "phone/bindPhone"
      }),
      //提交邀请码
      submit(){
        console.log(this.value)
      },
      //用户点击的是同意还是拒绝
      bindGetUserInfo(e) {
        // console.log(e.mp.detail.rawData)
        if (e.mp.detail.rawData) {
          //用户按了允许授权按钮
          console.log('用户按了允许授权按钮',e.mp.detail.rawData)
          this.tag = !this.tag
        } else {
          //用户按了拒绝按钮
          console.log('用户按了拒绝按钮')
        }
      },
    },
    onLoad() {
      this.bindPhone({
        userphone: 111,
        phonecode: 111,
        wxOauthJson: {}
      });
      wx.setNavigationBarTitle({
        title: '积纳有品'
      })
      wx.getSetting({
        success: function(res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
                //用户已经授权过
                console.log('用户已经授权过')

              }
            })
          } else {
            console.log('用户还未授权过')
          }
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;

    image {
      width: 100%;
    }

    .refer {
      width: 100%;
      display: flex;
      margin-top: 20px;
      margin-bottom: 10px;

      input {
        width: 299px;
        height: 50px;
        background: rgba(243, 247, 247, 1);
        border-radius: 8px 0px 0px 8px;
        text-align: center;
        line-height: 50px;
        margin-left: 17px;
      }

      button {
        width: 81px;
        height: 50px;
        background: rgba(51, 214, 197, 1);
        border-radius: 0px 8px 8px 0px;
        font-size: 16px;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 50px;
        margin-right: 17px;
      }

      .able {
        background: rgba(147, 230, 222, 1);
      }
    }

    .visitor {
      width: 340px;
      height: 84px;
      margin-left: 17px;
      margin-right: 17px;
      border-radius: 8px;
      border: 1px solid rgba(255, 224, 224, 1);
    }
    #show {
      display: none;
    }
    .hint {
      width: 220px;
      height: 20px;
      font-size: 12px;
      font-size: 14px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(153, 157, 162, 1);
      padding: 28px 94px 22px 94px;
    }
    .list {
      width: 100%;
      height:320px;
      overflow: scroll;

      li {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;

        image {
          width: 75px;
          margin-top: 13px;
          margin-left: 20px;
        }

        .content {
          flex: 1;
          box-sizing: border-box;
          padding-left: 25px;

          .name {
            font-size: 16px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(50, 58, 69, 1);
            line-height: 22px;
          }

          .group {
            font-size: 14px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(153, 157, 162, 1);
            line-height: 20px;
          }
        }

        span {
          width: 81px;
          height: 30px;
          background: rgba(51, 214, 197, 1);
          border-radius: 7px;
          text-align: center;
          line-height: 30px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-right: 14px;
        }
      }
    }
    .low{
      height:235px;
    }
    .mask {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: rgba(145, 110, 110, 0.3);
      z-index: 99;
    }
    .btn {
      width: 80%;
      margin-left: 10%;
      margin-top: 50%;
      background: skyblue;
    }
    .masks{
      display: none;
    }
  }

</style>

