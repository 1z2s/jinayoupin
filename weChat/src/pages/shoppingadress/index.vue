<template>
  <div class="bigbox">
    <div class='addbigbox' v-for="(v,i) in list" :key='i' >
      <div class="addressbox">
        <div class="addlittle">
          <p class='char name'>{{v.name}}</p>
          <p class='char phone'>{{v.phone}}</p>
          <div class="addlebox">
            <div class='addimgbox'>
              <img class='addimg' :src="v.urlimg" alt="">
            </div>
            <p class='char addresstag'>[{{v.addresstag}}]</p>
            <p class='char address'>{{v.address}}</p>
          </div>
        </div>
        <div class="addribox">
          <span class="borders"></span>
          <p @click="readactAddress(0)" class='char redact'>编辑</p>
        </div>
      </div>
    </div>
    <button class='addbtn' @click="goAddress">新增收货地址</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data: {
      list: []
    },
    methods:{
      ...mapActions({
        submit:'newadd/submit'
      }),
      readactAddress(id){
         wx.navigateTo({url: './redactAddress/main?id='+id})
      },
      goAddress(){
        wx.navigateTo({url: './redactAddress/main'})
      }
    },
    async onShow(){
      this.list = await this.submit();
    }
  }
</script>

<style scoped>
  html,
  body,
  page,
  .bigbox {
    width: 100%;
    height: 100%;
    background: rgba(243, 247, 247, 1);
  }

  .addbigbox {
    width: 100%;
    background: #fff;
  }

  .addressbox {
    width: 351px;
    height: 86px;
    border-bottom: 1rpx solid #F6F6F6;
    position: relative;
    margin: 0 12px;
  }

  .char {
    font-size: 13px;
    color: #323A45;
    font-weight: 400;
  }

  .name {
    padding: 9px 0 6px 5px;
  }

  .phone {
    padding: 0 0 0 5px;
  }

  .addresstag {
    color: #FC5D7B;
  }

  .addimgbox {
    width: 26px;
    height: 13px;
    border: 1rpx dashed #323A45;
    margin: 0 2px 0 0;
    display: flex;
    align-items: center;
  }

  .addimg {
    width: 26px;
    height: 13px;
  }

  .addlebox {
    width: 296px;
    height: 18px;
    margin: 5px;
    display: flex;
    align-items: flex-end;
  }

  .borders {
    width: 1px;
    height: 30px;
    position: absolute;
    top: 28px;
    right: 48px;
    background: #F3F7F7;
  }

  .redact {
    color: #999DA2;
    position: absolute;
    top: 34px;
    right: 8px;
  }

  .addbtn {
    margin-top: 60px;
    background: #33D6C5;
    color: #fff;
    font-size: 18px;
    width: 351px;
    border: none;
    border-radius: 7px;
    height: 50px;
  }
</style>