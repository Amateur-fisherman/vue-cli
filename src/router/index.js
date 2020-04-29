import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import City from '../components/City'


Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '*',
            component: Index
        },
        {
            path:'/City',
            name:'add',
            component:City
        },
        
    ]
})
