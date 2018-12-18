<template>
    <v-app>
        <AppSidebar/>

        <v-toolbar fixed app color="blue darken-4" dark :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer :fixed="fixed" dark app>
            <span>&copy; by Moritz Rinckens 2018</span>
        </v-footer>
    </v-app>
</template>

<script>
    import AppToolbar from "./components/AppToolbar"
    import AppSidebar from "./components/AppSidebar"

    export default {
        name: "App",
        components: {
            AppToolbar,
            AppSidebar
        },
        data() {
            return {
                clipped: false,
                drawer: true,
                fixed: false,
                items: [
                    {icon: 'bubble_chart', title: 'Test'}
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: '[cityrock]'
            }
        }
    }
</script>
