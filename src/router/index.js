import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/login",
            name: "login"
        },

        {
            path: "/",
            name: "dashboard",
            component: () => import("../modules/dashboard/Dashboard"),
            isPublic: false,
            layout: 'DefaultLayout'
        },
        {
            path: "/course/:slug?",
            name: "course",
            component: () => import("../modules/course/Course"),
            isPublic: false,
            layout: 'DefaultLayout',
        },
        {
            path: "/customer/:id?",
            name: "customer",
            isPublic: false,
            layout: 'DefaultLayout',
            component: () => import("../modules/customer/Customer")
        },
        {
            path: "/user",
            component: () => import("../modules/user/User"),
            isPublic: false,
            layout: 'DefaultLayout',
            name: 'user',
            children: [{
                path: "",
                name: "user-list",
                component: () => import("../modules/user/List")
            }]
        },
        {
            path: "/settings",
            name: "settings",
            isPublic: false,
            layout: 'DefaultLayout',
            component: () => import("../modules/settings/Settings.vue")
        }

    ]
})