<template lang="pug">
div
  v-toolbar(fixed='', app='', color=' blue darken-4', dark='')
    v-toolbar-side-icon(@click.stop='toggleSidebar()')
    v-toolbar-title(v-text='title')
    v-spacer
</template>

<script>
export default {
  name: "AppToolbar",
  data() {
    return {
      title: "[cityrock]",
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch("common/updateSidebar", {
        visible: !this.$store.state.common.sidebar.visible,
      });
    },
  },
};
</script>

<style scoped>
</style>
