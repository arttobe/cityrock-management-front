import Vue from 'vue'
import Vuex from 'vuex'
import common from './common.module'
import customer from './customer.module'
import course from './course.module'
import user from './user.module'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common,
        customer,
        course,
        user
    }
})