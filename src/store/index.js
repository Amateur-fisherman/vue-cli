import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const defaultVal = {
    cityConfig: {
        cityName: '武汉',
        cityCode: '420100',
    }
};
const store = new Vuex.Store({
    state: defaultVal,
    mutations: {
        update(state,config){
            state[config[0]] = config[1];
        },
    },
    actions: {// 异步操作
        
    }
})
export default store
