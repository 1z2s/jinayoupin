<template>
  <div>
    <!-- header -->
    <header>
      <div class="search">
        <div class="search-bg">
          <img src="/static/seek/search.png" alt="">
          <div class="search-input">
            <input type="text" placeholder="搜索">
          </div>
        </div>
        <div class="search-text">
          取消
        </div>
      </div>
    </header>
    <History :history=history />
    <!-- <Nthing />
    <seekdetali></seekdetali> -->
  </div>
</template>
<script>
// import Nthing from '@/components/seek/nothing'
import History from '@/components/seek/history'
// import seekdetali from '@/components/seek/seekdetali.vue'

export default {
    data() {
      return {
        history:['一次一次一次','一次一次一次','一次一次一次']
      }
    },
    components:{
      History,
      // Nthing,
      // seekdetali
    }
  }

</script>


</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  header {
    background: rgb(249, 249, 249);
    height: 128rpx;
    box-sizing: border-box;
    padding-top: 52rpx;

  }

  .search {
    display: flex;
    font-size: 14px;
    height: 60rpx;
  }

  .search-bg {
    width: 191px;
    height: 28px;
    box-sizing: border-box;
    display: flex;
    background: #EDEDED;
    overflow: hidden;
    border-radius: 5px;
    margin-left: 46px;
    img {
      height: 16px;
      width: 16px;
      margin: 7px;
    }
    .search-input {
      line-height: 30px;
      border: none;
      height: 30px;
      background: rgba(237, 237, 237, 1);
      border-radius: 5px;
    }
  }

  .search-text {
    width: 28px;
    height: 14px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 157, 162, 1);
    line-height: 14px;
    margin-top: 8px;
    margin-left: 16px;
  }
</style>
