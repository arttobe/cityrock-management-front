import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router ({
    routes: [

        {
            path: "/",
            name: "home",
            component: () => import("../modules/dashboard/Dashboard"),

        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../modules/dashboard/Dashboard"),
        },
        {
            path: "/course",
            component:() => import("../modules/course/Course"),
            children: [

                {
                    path: "calendar",
                    name: "course-calendar",
                    component: () => import("../modules/course/Calendar")
                },
                {
                    path: "list",
                    name: "course-list",
                    component: () => import("../modules/course/List")
                },
                {
                    path: "climbing-list",
                    name: "course-climbing-list",
                    component: () => import("../modules/course/ClimbingList")
                },
            ]
        },
        {
            path: "/customer",
            name: "customer-list",
            component: () => import("../modules/customer/List")
        }

    ]
})
