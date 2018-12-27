<template lang="pug">
v-app
  app-sidebar
  app-toolbar
  v-content
    v-container(fluid)
        router-view
  app-footer
  app-dialog
</template>

<script>
import AppSidebar from "@/components/AppSidebar";
import AppToolbar from "@/components/AppToolbar";
import AppFooter from "@/components/AppFooter";
import AppDialog from "@/components/AppDialog";

export default {
  name: "DefaultLayout",
  components: {
    AppSidebar, AppToolbar, AppFooter, AppDialog,
  },
};
</script>

<style scoped>
</style>
