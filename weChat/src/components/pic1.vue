<template>
  <div class="take-photo" @click="takePic1">
    <button open-type="getUserInfo" v-if="src.length===0">+</button>
    <image mode="widthFix" :src="src" alt="" v-else/>
  </div>
</template>

<script>
export default {
  props: {
      src: {
        type: Array,
        default:null
    },
    right:{
        type:null
    }
  },
  methods: {
      takePic1 () {
      this.right = true
      console.log(this)
      this.$emit('delog',this.right)
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.camera']) {
            wx.authorize({
              scope: 'scope.camera',
              success() {
                // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                this.right = true
              }
            })
          }
        }
      })
    }
  }  
}
</script>

<style lang="scss" scoped>
.take-photo{
    width:360rpx;
    height:220rpx;
    background: #ccc;
    border-radius: 20rpx;
    image{
        width:100%;
        height:100%;
    }
}
</style>
