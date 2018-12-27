<template lang="pug">
div
  v-container(fluid='')
    v-layout(row wrap fill-height)
      v-flex(xs12)
        h1.display-1.primary--text
          p Belegungsplan
        v-btn-toggle(v-model='courseFilter')
          v-btn(flat='') Alle
          v-btn(flat='') Noch offen
          v-btn(flat='') Meine Kurse
      v-flex(xs12)
        full-calendar(:events = "events", :config="config")
  v-btn(color='blue', dark='', fab='', fixed='', bottom='', right='')
    v-icon add
</template>

<script>

// eslint-disable-next-line import/no-extraneous-dependencies
import "fullcalendar/dist/locale/de"

export default {
  name: "CourseCalendar",
  data() {
    return {
      config: {
        locale: "de",
      },
      courseFilter: null,

    }
  },
  computed: {
    events() {
      return [
      ]
    },
  },
};
</script>

<style scoped>
</style>
