<template>
    <div class="wrap">
      <!-- <Login/> -->
      <from @submit="submit" report-submit>
          <ul class="sm_input">
            <li class="line">
              <lable for="">真实姓名</lable>
              <input type="text" placeholder="请输入身份证姓名" focus v-model="idName">
            </li>
            <li>
              <lable for="">身份证号</lable>
              <input type="number" placeholder="请输入身份证号" v-model="idNumber">
            </li>
          </ul>
          <camera class="camera" v-if="right"></camera>
          <button v-if="right" @click="tabphoto" class="take">
            <p></p>
          </button>
          <div class="sm_img" v-else>
             <h1>上传身份证照片<span>(图片png、jpg,大小不超过5M)</span></h1>
             <div>
                <div class="img_left" @click="takePic('front')">
                  <img :src="front.path?front.path:'/static/images/creame.png'" alt="" mode="withFix">
                </div>
                <div class="img_right" @click="takePic('back')">
                  <img :src="back.path?back.path:'/static/images/creame.png'" alt="" mode="withFix">
                </div>
             </div>
           </div>
           <div>
             <h2 class="sm_h2">为什么需要实名认证</h2>
             <ol class="sm_list">
               <li>根据海关规定,购买跨境商品需要办理清关手续,请您配合进行实名认证,以确保您购买分的商品顺利通过·海关检查。(积纳有品海购承诺所传身份证明只用于办理跨境商品的清关手续,不做他途使用,其他任何人均法查看</li>
               <li>实名认证的规则:购买跨境商品需填写积纳账号注册·人的真实姓名、身份证号码及与实名一致的手机号,部分商品下单时需提供收货人的实名信息(含身份证照片)，具体请以下单时的提示为准。</li>
             </ol>
           </div>
          <button form-type="submit" class="save" @click="submit">保存</button>
      </from>
      <div :class="show?'mask show':'mask'"></div>
      <div :class="show?'imgove show':'imgove'">
        <image :src="src" alt="" mode="widthFix"/>
      </div>
      <button :class="show?'show upfile':'upfile'" @click="upfile">上传图片</button>
      <!-- <button @click='classify'>分类</button> -->
    </div>
</template>

<script>
import Login from '@/components/user/login.vue'
import {mapState, mapMutations, mapActions} from 'vuex'
import {getAuth} from '@/utils/index'

export default {
  config: {
    navigationBarTitleText: "实名认证"
  },
  data () {
    return {
      src:[],
      front: {},
      back: {},
      idNumber: '',
      idName: '',
      right: false,
      show: false
    }
  },
  components: {
    Login
  },
  computed: {
    ...mapState({
      src: state => state.upPicture.src
    })
  },
  methods: {
    ...mapMutations({
      updataState: 'upPicture/updataState'
    }),
    ...mapActions({
      identify: 'user/identify'
    }),
    classify(){
      wx.navigateTo({
        url: '../classify/main'
      })
    },
    getUserInfo(res){
      console.log('res...', res);
    },
    takePic (type) {
      // this.right = true
      wx.chooseImage({
        count: '1', //最多可以选择的图片张数,
        success: res => {
          console.log('res...', res);
          this[type] = res.tempFiles[0];
        }, //返回图片的本地文件路径列表 tempFilePaths,

      });
    },
    async submit(){
      // if (!this.idName){
      //   wx.showToast({
      //     title: '请输入身份证姓名', //提示的内容,
      //     icon: 'none', //图标,
      //   });
      //   return;
      // }

      // if (!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(this.idNumber)){
      //    wx.showToast({
      //     title: '请输入真实身份证号码', //提示的内容,
      //     icon: 'none', //图标,
      //   });
      //   return;
      // }

      // if (!this.front.path){
      //   wx.showToast({
      //     title: '请上传身份证正面照片', //提示的内容,
      //     icon: 'none', //图标,
      //   });
      //   return;
      // }

      // if (!this.back.path){
      //    wx.showToast({
      //     title: '请上传身份证反面照片', //提示的内容,
      //     icon: 'none', //图标,
      //   });
      //   return;
      // }

      // 读取本地图片
      let manager = wx.getFileSystemManager();
      let id_img_positive = manager.readFileSync(this.front.path, 'base64');
      let id_img_opposite = manager.readFileSync(this.back.path, 'base64');
      // console.log(id_img_positive, id_img_opposite);
      // formData.append('id_img_positive', id_img_positive);
      // formData.append('id_img_opposite', id_img_opposite);
      // formData.append('trueName', this.idName);
      // formData.append('idNumber', this.idNumber);

      let result = await this.identify({
        id_img_positive,
        id_img_opposite,
        trueName: this.idName,
        idNumber: this.idNumber
      });
      console.log('result...', result);
    },
    tabphoto () {
        this.right = false
        const ctx=wx.createCameraContext();
        ctx.takePhoto({
        quality:'high',
        success:(res)=>{
          this.src = res.tempImagePath
          console.log(res)
        }
      })
      this.show = true
    },
    upfile () {
      this.show = false;
    }

  },
}
</script>

<style lang='scss' scoped>
.show{
  display: block!important;
}
.wrap{
  width: 828rpx;
  display: flex;
  flex-direction: column;
  background: #F3F7F7;
  height: 1180rpx;
  position: relative;
}
.line{
  border-bottom: 2rpx solid #f6f6f6;
}
.sm_input{
   border-bottom: 1rpx solid #eee;
   background: #fff;
  li{
    width: 100%;
    height: 112rpx;
    display: flex;
    lable{
      padding: 48rpx 0;
      margin-left: 26rpx;
      font-size: 32rpx;
      font-weight: bold;
    }

    input{
      margin: 40rpx 0;
      margin-left:40rpx;
      font-size: 32rpx;
    }
  }
}
.sm_img{
  width: 100%;
  height: 340rpx;
  background: #fff;
  display: flex;
  flex-direction: column;
   margin-top: 15rpx;
  h1{
    box-sizing: border-box;
    font-size: 32rpx;
    display: flex;
     padding: 30rpx 28rpx;
    box-sizing: border-box;
    span{
     margin-left:30rpx;
     display: inline-block;
     color: #999DA2;
    }
  }
  div{

     display: flex;
     .img_left{
       width:330rpx;
       height: 220rpx;
       border-radius:10rpx;
       border: 1rpx dashed #64E1D3;
       margin-left: 34rpx;
       image{
         width:100% !important;
       }
       >button{
         border-radius:50%;
         width: 92rpx;
         height: 92rpx;
         display: inline-block;
         border-radius: 50%;
         margin:22% auto;
         background: #64E1D3;
         overflow: hidden;
          img{
            width: 39rpx;
            height: 39rpx;
            display: inline-block;
           margin-right: 30rpx;
           margin-bottom: 10rpx;
         }
       }
     }
      .img_right{
       width:330rpx;
       height: 220rpx;
       border-radius:10rpx;
       border: 1rpx dashed #64E1D3;
       margin-left: 34rpx;
       >button{
         border-radius:50%;
         background: #64E1D3;
         width: 92rpx;
         height: 92rpx;
         display: inline-block;
         border: 50%;
         border-radius: 50%;
         margin:22% auto;
         overflow: hidden;
          img{
          width: 39rpx;
          height: 39rpx;
          display: inline-block;
           margin-right: 30rpx;
           margin-bottom: 10rpx;
        }
       }
       image{
         width:100% !important;
       }
     }
  }
}
.sm_h2{
  margin:38rpx 246rpx;
  font-size: 32rpx;
}
.sm_list{
  // list-style-type: disc;
  // list-style: decimal;
  display: flex;
  flex-direction: column;
  margin-top:10rpx;
  list-style-type: disc;
  li{
    width: 594rpx;
    font-size: 28rpx;
    color: #999DA2;
    line-height: 44rpx;
    margin: 0 78rpx;

    li:nth-child(1){
      margin: 10rpx 78rpx
    }
     li:nth-child(1){
      margin-bottom: 5rpx;
    }
  }
}
.camera{
  width:100%;
  height:1000rpx;
  position: absolute;
  top:0;
  left:0;
  z-index:1;
}
.take{
  width: 100rpx;
  height:100rpx;
  position: absolute;
  top:1020rpx;
  left:300rpx;
  border-radius: 50%;
  background: #ccc;
  p{
    width:94rpx;
    height:94rpx;
    background: #fff;
    border-radius: 50%;
    margin:2rpx 0 2rpx -30rpx;
  }
}
.mask{
  width:100%;
  height:100%;
  position: absolute;
  top:0;
  left:0;
  background: #000;
  opacity: .5;
  z-index: 1;
  display: none;
}
.imgove{
  width: 90%;
  position: absolute;
  top:100rpx;
  left:5rpx;
  background: #fff;
  border-radius: 20rpx;
  z-index: 2;
  display: none;
  image{
    width:100%;
  }
}
.upfile{
  position: absolute;
  display: none;
  background: #0f0;
  color:#fff;
  z-index: 2;
  top:840rpx;
  left:4%;
  width:84%;
}
.save{
  height: 80rpx;
  width: 80%;
  background: #64E1D3;
  color: #fff;
  font-size: 36rpx;
  // padding:20rpx 324rpx;
  line-height: 80rpx;
  border-radius: 17rpx;
  margin-left:50rpx;
  margin-top: 20rpx;
}
</style>
