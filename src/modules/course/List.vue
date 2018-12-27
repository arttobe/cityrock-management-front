<template lang="pug">
div
  v-container(fluid='')
    h1.display-1.primary--text
      p Terminplan
    h2.headline
      p {{ month }}
    v-btn-toggle(v-model='courseFilter')
      v-btn(flat='') Alle
      v-btn(flat='') Noch offen
      v-btn(flat='') Meine Kurse
    v-layout.mt-4(row='')
      v-flex(xs12='')
        v-card
          v-data-table(:items='dates', hide-actions='', hide-headers)
            template(slot="items" slot-scope="props")
              tr
                td.icon-cell
                  v-icon.icon-color(:color="props.item.course.course_type.color") lens
                td
                  template(v-if="props.item.course.title") {{ props.item.course.title}}
                  template(v-else) {{ props.item.course.course_type.title }}
                td {{ props.item.date }}
                td {{ props.item.start_time }} - {{ props.item.end_time }}
                td 
                  v-icon input
                  v-icon visibility
                  v-icon edit


</template>

<script>
export default {
  name: "CourseList",
  data () {
    return {
      courseFilter: null,
      month: "Dezember"
    };
  },
  computed: {
    dates () {
      // Here put the filter in
      return this.$store.state.course.dates
    }
  }
};
</script>

<style lang="scss">
.icon-color {
  font-size: 50px;
}
table.v-table td:first-child.icon-cell {
  padding: 0;
  width: 50px;
}
.warn-trainer {
  background-color: beige;
}
</style>

