import {identify, login} from '@/api/index'

const state = {
  code: '',
  userInfo: {},
  wxOauthJson: {},
  trackId: ''
}

const mutations = {
  updateState(state, payload){
    for (let key in payload){
      state[key] = payload[key];
    }
  }
}

const actions = {
  async identify({commit}, payload){
    console.log('payload...', payload);
    let result = await identify(payload);
    return result;
  },

  async login({commit, state}, payload){
    console.log('payload...', payload);
    payload = {...payload, code: state.code}
    let result = await login(payload);
    console.log('result...', result);
    commit('updateState', {
      trackId: result.data.result.trackId,
      userInfo: result.data.result.userInfo,
      wxOauthJson: result.data.result.wxOauthJson
    })

    return result.data;
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
