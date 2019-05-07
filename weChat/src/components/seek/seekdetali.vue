<template>
  <div class="wrap">
    <div class="nav">
      <ul>
        <li>综合</li>
        <li>最新</li>
        <li class="li-re">价格<span class="tl-top"></span><span class="tl-bottom"></span></li> 
      </ul>
    </div>
    <div class="content"> 
      <dl class="dl-re">
        <dt>
          <span>
            <img src="/static/images/seek1.PNG" alt="">
          </span>
        </dt>
        <dd>
          <h3>【凑单6包减80】 帮宝适帮宝新…</h3>
          <div class="coupon">
            <span>包邮</span>
            <span>满299减30</span>
            <span>满299减30</span>
          </div>
          <div class="price">
            <div>
              <b>￥</b>
              <b>22.</b>
              <b>90</b>
            </div>
            <span>￥18.88</span>
          </div>
          <span class="tl-content">NEW</span>
        </dd>
      </dl>
      <dl class="dl-re">
        <dt>
          <span>
            <img src="/static/images/seek1.PNG" alt="">
          </span>
        </dt>
        <dd>
          <h3>【凑单6包减80】 帮宝适帮宝新…</h3>
          <div class="coupon">
            <span>包邮</span>
            <span>满299减30</span>
            <span>满299减30</span>
          </div>
          <div class="price">
            <div>
              <b>￥</b>
              <b>22.</b>
              <b>90</b>
            </div>
            <span>￥18.88</span>
          </div>
          <span class="tl-content">NEW</span>
        </dd>
      </dl>
      <dl class="dl-re">
        <dt>
          <span>
            <img src="/static/images/seek1.PNG" alt="">
          </span>
        </dt>
        <dd>
          <h3>【凑单6包减80】 帮宝适帮宝新…</h3>
          <div class="coupon">
            <span>包邮</span>
            <span>满299减30</span>
            <span>满299减30</span>
          </div>
          <div class="price">
            <div>
              <b>￥</b>
              <b>22.</b>
              <b>90</b>
            </div>
            <span>￥18.88</span>
          </div>
          <span class="tl-content">NEW</span>
        </dd>
      </dl>
      <dl class="dl-re">
        <dt>
          <span>
            <img src="/static/images/seek1.PNG" alt="">
          </span>
        </dt>
        <dd>
          <h3>【凑单6包减80】 帮宝适帮宝新…</h3>
          <div class="coupon">
            <span>包邮</span>
            <span>满299减30</span>
            <span>满299减30</span>
          </div>
          <div class="price">
            <div>
              <b>￥</b>
              <b>22.</b>
              <b>90</b>
            </div>
            <span>￥18.88</span>
          </div>
          <span class="tl-content">NEW</span>
        </dd>
      </dl>
      <dl class="dl-re">
        <dt>
          <span>
            <img src="/static/images/seek1.PNG" alt="">
          </span>
        </dt>
        <dd>
          <h3>【凑单6包减80】 帮宝适帮宝新…</h3>
          <div class="coupon">
            <span>包邮</span>
            <span>满299减30</span>
            <span>满299减30</span>
          </div>
          <div class="price">
            <div>
              <b>￥</b>
              <b>22.</b>
              <b>90</b>
            </div>
            <span>￥18.88</span>
          </div>
          <span class="tl-content">NEW</span>
        </dd>
      </dl>
      <dl class="dl-re">
        <dt>
          <span>
            <img src="/static/images/seek1.PNG" alt="">
          </span>
        </dt>
        <dd>
          <h3>【凑单6包减80】 帮宝适帮宝新…</h3>
          <div class="coupon">
            <span>包邮</span>
            <span>满299减30</span>
            <span>满299减30</span>
          </div>
          <div class="price">
            <div>
              <b>￥</b>
              <b>22.</b>
              <b>90</b>
            </div>
            <span>￥18.88</span>
          </div>
          <span class="tl-content">NEW</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>

export default {
 
}
</script>

<style scoped lang="scss">
  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .nav{
    width: 100%;
    height: 40px;
    background: #fff;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      li{
        flex:1;
        height: 100%;
        text-align: center;
        line-height: 40px;
        font-size:13px;
        color:#666666;
      }
    }
  }
  .content{
    width: 100%;
    height: 100%;
    background: #F3F7F7;
    padding:9px 5px 0 5px;
    box-sizing: border-box;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    dl{
      width: 363rpx;
      height: 536rpx;
      background: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      margin-top:4px;
      dt{
        // width:100%;
        height:200px;
        padding:30px 23px 15px 14px;
        span{
          display: block;
          width:295rpx;
          height: 277rpx;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      dd{
        width: 100%;
        flex:1;
        h3{
          font-size:12px;
          padding-left:5px;
          color:#323A45;
        }
        .coupon{
          width: 100%;
          display: flex;
          padding-left:6px;
          box-sizing: border-box;
          margin-top:16px;
          span{
            display: block;
            padding:0 5px;
            color: #FC5D7B;
            border:1px solid #FC5D7B;
            border-radius: 2px;
            font-size:10px;
            margin-right:5px;
          }
        }
        .price{
          width: 100%;
          display: flex;
          align-items: flex-end;
          div{
            display: flex;
            align-items: flex-end;
            padding-left:3px;
              b{
                color:#FC5D7B;
                &:nth-child(1){
                  font-size:14px;
                }
                &:nth-child(2){
                  font-size:18px;
                }
                &:nth-child(3){
                  font-size:14px;
                }
              }
          }
          span{
            font-size:11px;
            color:#A87831
          }
        }
      }
    }
  }
  .li-re{
    position: relative;
  }
  .tl-top{
    display: block;
    position: absolute;
    top:12px;
    right:36px;
    border:4px solid;
    border-color: transparent transparent #FC5D7B transparent;
  }
  .tl-bottom{
    display: block;
    position: absolute;
    bottom:12px;
    right:36px;
    border:4px solid;
    border-color: #D8D8D8 transparent transparent transparent;
  }
  .dl-re{
    position: relative;
  }
  .tl-content{
    display: block;
    width: 25px;
    height: 13px;
    border-radius: 2px;
    background: linear-gradient(to left,#FFB848, #FF7737);
    position: absolute;
    top:10px;
    right:10px;
    color:#fff;
    font-size:9px;
    text-align: center;
    line-height: 13px;
  }
</style>
