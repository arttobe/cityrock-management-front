<template>

    <v-navigation-drawer
            fixed
            app
            touchless
            v-model="isActive"
            app
            dark
    >
        <v-list dark>
            <v-list-tile ripple :to="{name: 'dashboard'}">
                <v-list-tile-action>
                    <v-icon>
                        account_box
                    </v-icon>
                </v-list-tile-action>

                <v-list-tile-content>

                    <v-list-tile-title>Dashboard</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>
            <v-list-tile ripple :to="{name: 'course-calendar'}">
                <v-list-tile-action>
                    <v-icon>
                        account_box
                    </v-icon>
                </v-list-tile-action>

                <v-list-tile-content>

                    <v-list-tile-title>Belegungsplan</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>
            <v-list-tile ripple :to="{name: 'course-list'}">
                <v-list-tile-action>
                    <v-icon>account_box</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Terminplan</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile ripple :to="{name:'course-climbing-list'}">
                <v-list-tile-action>
                    <v-icon>account_box</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Kletterkursverwaltung</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile ripple :to="{name: 'customer-list'}">
                <v-list-tile-action>
                    <v-icon>account_box</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Kunden</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile ripple>
                <v-list-tile-action>
                    <v-icon>account_box</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Mitarbeiter</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-group prepend-icon="build">

                <v-list-tile slot="activator" ripple>

                    <v-list-tile-content>
                        <v-list-tile-title>Einstellungen</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile ripple>
                    <v-list-tile-content>
                        <v-list-tile-title>Allgemein</v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>

                <v-list-tile ripple>
                    <v-list-tile-content>
                        <v-list-tile-title>Kurstypen</v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>
                <v-list-tile ripple>
                    <v-list-tile-content>
                        <v-list-tile-title>Ferien</v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>
            </v-list-group>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>exit_to_app</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Abmelden</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "AppSidebar",
        data() {
            return {
                isActive: true
            }
        }
    }
</script>

<style scoped>

</style>
