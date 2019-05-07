import request from '@/utils/request';

// 登陆接口
export let login = params => {
    return request.post('api/open/user/info/oauth', {
        ...params,
        platform: 4,
    })
}

//匹配邀请码正确的群信息
export let groupName = params => {
  return request.post('/api/open/user/info/getbycode', params);
}

//获取验证码
export let identify = phoneNumber  => {
    return request.post('/api/open/user/info/send/code', {phoneNumber})
}

//绑定手机号
export let bindPhone = params => {
    return request.post('/api/open/user/info/bind/phone', {
      platform: 4,
      ...params
    })
}

//分类接口
export let fenlei = params => {
    return request.post('/api/open/product/category/query', params)
}

//获取用户收货地址列表
export let getAddressListData = code => {
  return request.post('/api/open/user/address/list', {
    code
  })
}

// 获取用户
export let addAddress = code=>{
  return request.post('/api/open/user/address/list', {
    code
  })
}

// 修改用户收货地址
export let changeUserAddress = userData => {
    return request.post('/api/open/user/address/editAddress', {
        userData
    })
}

//添加用户收货地址
export let addNewAddress = newData => {
  console.log(newData)
  return request.post('/api/open/user/address/addAddress', newData)
}

// 订单查询
export let FindOrder = (params) => {
  return request.post('/api/open/order/query',params)
}

// 商品详情
export let getDatail =function () {
  return request.post('/api/open/order/query/detail/1.0.1?orderType=1&orderId=20190218143440524194')
}


export let nmlogin = params=>{
  return request.post('/api/open/user/auth/edit', params)
}

// 用户身份认证
export let identif = params=>{
  return request.post('/api/open/user/auth/identify', params);
}
