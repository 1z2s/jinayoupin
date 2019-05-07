import {getDatail} from "@/api/index"
const state={
    count:1,
    detailList:[]
}
const getters={
}
const actions={
    detailData:function(){
        let data=getDatail()
        console.log(state.detailList,222)
    }
}
const mutations={

}
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
    
}