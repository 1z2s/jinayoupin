<template>
    <div class="outbox">
        <div class="chagne_add_data">
            <div class="user_change_data">
                <input v-model="consignee" class="user_address_data" type="text" placeholder="收货人">
                <span class="user_address_right"><img src="/static/images/lt.svg" alt=""></span>
            </div>
            <div class="user_change_data">
                <input v-model="consigneePhone" class="user_address_data" type="text" placeholder="手机号码">
                <span class="user_address_right user_address_right2"><i>+ 86</i><img src="/static/images/lt.svg" alt=""></span>
            </div>
            <div class="user_change_data" @click="searchAddress">
                <input v-model="address" class="user_address_data" type="text" placeholder="所在地区">
                <span class="user_address_right"><img src="/static/images/lt.svg" alt=""></span>
            </div>
            <div class="user_change_data user_textarea">
                <textarea v-model="oldminute" placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等"></textarea>
            </div>
        </div>
        <div class="user_data_title">
            <div class="user_title_type">
                <p class="title_type_tit">标签</p>
                <div class="user_every_type">
                    <span @click="addressTag = index" :class="addressTag === index ? 'type_active' : ''" v-for="(item, index) in typeData" :key="index">{{item}}</span>
                </div>
            </div>
            <div class="user_default_address">
                <p class="set_default_address">设为默认地址</p>
                <switch @click="state = ++state % 2" color="rgba(51,214,197,1)" name="switch" :checked="state === 0" />
            </div>
        </div>
        <div v-if="flags" class="user_change_button">
            <button @click="delAddress">删除收货信息</button>
            <button @click="addNewData" class="btn_action">保存</button>
        </div>
        <button v-if="addbtn" class="submit" @click="addNewData('add')">保存</button>
        <div class="addressMask" v-if="boxFlag">
        <div class="box">
            <p>
            <span>所在地区</span><span class="close" @click="close">×</span>
            </p>
            <ul>
            <li :class="[color===ind?'color':'']"
                @click="searchLi($event, ind, val.id, val)"
                v-for="(val,ind) in range" :key="ind">
                <span>{{val.txt}}</span>
                <span :class="[color===ind?'show':'hide']"><img src="/static/images/对勾.png" alt=""></span>
            </li>
            </ul>
            <span v-if="flag" class="search">{{search}}</span>
        </div>
        </div>
    </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    data(){
        return {
            provinceId:'',   //省的Id
            cityId:'',   //市的Id
            areaId:'',   //区的Id
            provinceName:'',  //省的名称
            cityName :'',  //市的名称
            areaName :'',  //区的名称
            flags: false,
            uaid: 0,
            consignee: '',
            consigneePhone: '',
            address: '',
            oldminute: '',
            addressTag: '',
            state : 1,
            typeData: ['家', '公司', '学校', '其它'],
            range: [
                {
                    id:1,
                    txt:"北京市",
                },
                {
                    id:2,
                    txt:"西城区",
                },
                {
                    id:3,
                    txt:"东城区",
                },
                {
                    id:4,
                    txt:"朝阳区",
                },
                {
                    id:5,
                    txt:"丰台区",
                },
                {
                    id:6,
                    txt:"海淀区",
                },
                {
                    id:7,
                    txt:"门头沟区",
                },
            ],
            search: '请选择',
            flag: true,
            boxFlag: false,
            color: -1,
            addbtn: true
        }
    },
    onLoad(options){
        wx.setNavigationBarTitle({title: '收货地址'})
        if(options.id){
            this.uaid = options.id;
            this.flags = true;
            this.addbtn = false;
        } else {
            this.uaid = false;
            this.flags = false;
            this.addbtn = true;
        }
    },
    methods: {
        ...mapActions({
            addressList: 'getAddressList/addressList',
            changeUserAddress: 'getAddressList/changeUserAddress',
            addNewAddress: 'getAddressList/addNewAddress'
        }),
        delAddress(){
            this.state = 2;
            let nowData = {
                version: '1.0.0',
                uaid: this.uaid
            }
        },
        async addNewData(add){
            if(!this.consignee){
                wx.showToast({
                    title: '请输入联系人', //提示的内容,
                    icon: 'none', //图标,
                });
                return false
            }
            if (!/^1(3|4|5|7|8)\d{9}$/.test(this.consigneePhone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.consigneePhone)){
                wx.showToast({
                    title: '请输入正确的手机号', //提示的内容,
                    icon: 'none', //图标,
                });
                return false;
            }
            if(!this.address){
                wx.showToast({
                    title: '请输入收货地址', //提示的内容,
                    icon: 'none', //图标,
                });
                return false
            }
            if(!this.oldminute){
                wx.showToast({
                    title: '请输入详细地址', //提示的内容,
                    icon: 'none', //图标,
                });
                return false
            }
            let addAddressData ={
                "provinceId":this.provinceId,//省id
                "provinceName":this.provinceName,//省名称
                "cityId":this.cityId,//市id
                "cityName" :this.cityName,//市名称
                "areaId":this.areaId,//区域id
                "areaName":this.areaName,//区名称
                "address":this.oldminute,//具体地址
                "consignee":this.consignee,//收货人
                "consigneePhone":this.consigneePhone,//收货人手机号
                "addressTag":this.addressTag+'',//地址标签 1.家 2.公司 3.学校 4.其他
                "state":this.state+ '',//0默认地址 1非默认地址
                "version": '1.0.0',
                "uaid":8,
                "uid":11,
                "countryId":1,
                "countryName": '',
                "addressDetail": '',
                "createTime": '',
                "updateTime": '',

            }
            if(add) {
                let newAdd = await this.addNewAddress(addAddressData)
                console.log(newAdd)
            } else {
                let change = await this.changeUserAddress()
                console.log(change)
            }
            return true;
        },
        searchAddress() {
            this.boxFlag = true;
        },
        close() {
            this.boxFlag = false;
        },
        searchLi(e, ind, id, val) {
            this.range.forEach((v,i)=> {
                this.color = ind;
                this.flag = false;
                this.boxFlag = false;
                this.address = val.txt;
                this.provinceId = id + '';   //省的Id
                this.cityId = id + '';   //市的Id
                this.areaId = id + '';   //区的Id
                this.provinceName=val.txt + '';   //省的名称
                this.cityName =val.txt + '';   //市的名称
                this.areaName =val.txt + '';   //区的名称
            })
        }
    },
    async onShow(options){
        if(this.uaid) {
            let data = await this.addressList({uaid: this.uaid})
            console.log('data...', data)
        }
    }
}
</script>

<style lang="scss" scoped>
.outbox{
    width: 100%;
    height: 100%;
    background:rgba(243,247,247,1);
    font-family: 'PingFangSC-Regular';
}
.chagne_add_data{  /* 705.9rpx */
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-bottom: 10px;
}
.user_change_data{
    width: 351px;
    height: 45px;
    margin: 0 auto;
    display: flex;
    line-height: 45px;
    border-bottom: 1px solid #F6F6F6;
    font-size: 14px;
}
.user_address_data{
    flex: 1;
    height: 45px;
    padding-left: 5px;
}
.user_address_right{
    display: inline-block;
    color: #9CA0A5;
}
.user_address_right img{
    width:5px;
    height:9px;
}
.user_address_right2{
    display: flex;
    align-items: center;
    color: #9CA0A5;
}
.user_address_right2 i{
    margin-right: 10px;
}
.user_textarea{
    height: 88px;
    font-weight:400;
    line-height: 20px;
    font-size: 14px;
    border-bottom: 0;
}
.user_textarea textarea{
    width: 308px;
    height: 88px;
    margin: 13px 5px;
}
.user_data_title{
    width: 100%;
    height: 143px;
    background: #fff;
}
.user_title_type{
    width: 351px;
    margin: 0 auto;
    border-bottom: 1px solid #F6F6F6;
}
.title_type_tit{
    font-size:14px;
    font-weight:400;
    color:rgba(50,58,69,1);
    margin-left: 5px;
    height: 31px;
    line-height: 31px;
}
.user_every_type{
    width: 351px;
    height: 67px;
    margin: 0 auto;
    display: flex;
}
.user_every_type span{
    width: 66px;
    height: 26px;
    border-radius:150px;
    margin: 1px 7px;
    border:1px solid rgba(187,187,187,1);
    font-size:15px;
    line-height: 26px;
    text-align: center;
    color:rgba(50,58,69,1);
}
.user_every_type span.type_active{
    background:rgba(51,214,197,1);
    color:#fff;
    border: 1px solid rgba(51,214,197,1);
}
.user_default_address{
    display: flex;
    width: 351px;
    margin: 0 auto;
    height: 45px;
    line-height: 45px;
    font-size:14px;
}
.set_default_address{
    margin-left: 5px;
    flex: 1;
}
.user_change_button{
    width: 351px;
    height: 152px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.user_change_button button{
    width: 144px;
    height: 50px;
    border-radius:7px;
    border:1px solid rgba(51,214,197,1);
    font-size:18px;
    color:rgba(51,214,197,1);
}
.user_change_button button.btn_action{
    border: 0;
    color: #fff;
    background:rgba(51,214,197,1);
}
.holdAddress{
  width: 100%;
  height: 100%;
}
.addressMask{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  background:rgb(165, 164, 164);
  .box{
    width: 100%;
    height:397px;
    background:#fff;
    position: absolute;
    left:0;
    bottom: 0;
    .search{
      width: 44px;
      height:44px;
      line-height:44px;
      text-align: center;
      border-bottom:2px solid rgba(252, 93, 123, 1);
      position: absolute;
      top:52px;
      left:80px;
      font-size:14px;
      color:rgba(252, 93, 123, 1);
    }
    p{
      width: 100%;
      height:52px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 11px;
      box-sizing: border-box;
      span{
        font-size:14px;
        color:rgba(72, 72, 72, 1);
      }
      .close{
        font-size:20px;
        width:15px;
        height:15px;
        line-height:15px;
        color:rgba(72, 72, 72, 1);
        overflow: hidden;
      }
    }
    ul{
      width: 100%;
      li{
        width: 100%;
        height:44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size:14px;
        color:rgba(50, 58, 69, 1);
        padding-left:14px;
        padding-right:17px;
        box-sizing: border-box;
        span{
          img{
            width: 14px;
            height:9px;
          }
        }
      }
      .color{
        color:rgba(252, 93, 123, 1);
      }
    }
  }
}
.show{
  display: block;
}
.hide{
  display: none;
}
.holdAddressChild{
  width: 100%;
  height:44px;
  line-height: 44px;
}
.submit {
  width: 90%;
  height: 50px;
  background: rgba(51, 214, 197, 1);
  border-radius: 7px;
  color: #ffffff;
  font-size: 18px;
  margin: 0 auto;
  margin-top: 60px;
}

</style>
