import {groupName} from "@/api/index"

const state={
    visitor:{
        imgSrc:"",
        name:""
    }
}

const actions = {
    renewState(state,payload){
        let data = groupName(payload);
        state.visitor={}
    }
},

const mutations={

}


export default {
    namespaced:true,
    state,
    actions,
    mutations
}