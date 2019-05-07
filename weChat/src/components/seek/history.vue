<template>
  <div>
    <div class="history">
      <p>历史搜索</p>
      <img src="/static/seek/删除@2x.png" alt="">
    </div>
    <div class="choice">
      <span  v-for='(item,i) in history' :key='i'>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    history:{
      type:Array ,
      default:[]
    }
  }
}
</script>

<style lang="scss" scoped>
.history{
  display: flex;
  justify-content: space-between;
  p{
    width:56px;
    height:20px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:20px;
    margin-top:15px;
    margin-left:20px;
    margin-bottom:15px;
  }
  img{
    height: 14px;
    width: 14px;
    margin-top: 15px;
    margin-right: 20px;
  }
}
.choice{
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  box-sizing: border-box;
}
span{
font-size:14px;
font-family:PingFangSC-Regular;
font-weight:400;
color:rgba(51,51,51,1);
padding: 5px 19px 5px 17px;
background:rgba(245,245,244,1);
border-radius:6px;
margin-bottom: 15px;
margin-right: 14px;
}
</style>
