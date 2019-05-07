import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// 挂载modules
import newadd from './modules/newadd'
import myorder from './modules/myorder'
import getAddressList from './modules/getAddressList'
import shopDetail from "./modules/shopDetail"
import phone from './modules/phone'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    phone,
    getAddressList,
    newadd,
    myorder,
    shopDetail
  },

  plugins: [createLogger()]
})
