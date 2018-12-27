<template>
  <v-navigation-drawer floating fixed app touchless v-model="isActive" dark>
    <v-list dark>
      <v-list-tile ripple exact :to="{name: 'dashboard'}">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile ripple :to="{name:'course', query: { view: 'calendar'}}">
        <v-list-tile-action>
          <v-icon>event_available</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Belegungsplan</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile ripple exact :to="{name:'course'}">
        <v-list-tile-action>
          <v-icon>event_note</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Terminplan</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile ripple excat :to="{name:'course', query: { view: 'climbing'}}">
        <v-list-tile-action>
          <v-icon>terrain</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Kletterkursverwaltung</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile ripple exact :to="{name: 'customer'}">
        <v-list-tile-action>
          <v-icon>account_box</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Kunden</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile ripple exact :to="{name: 'user'}">
        <v-list-tile-action>
          <v-icon>portrait</v-icon>
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
        <v-list-tile ripple :to="{ name: 'settings' }">
          <v-list-tile-content>
            <v-list-tile-title>Allgemein</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile ripple :to="{ name: 'settings', query: { tab: 'courseType'} }">
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
  computed: {
    isActive: {
      get() {
        return this.$store.state.common.sidebar.visible;
      },
      set(val) {
        this.$store.dispatch("common/updateSidebar", { visible: val });
      }
    }
  }
};
</script>

<style scoped>
</style>
