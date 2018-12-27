<template lang="pug">
  div
    template(v-if="view=='calendar'")
      course-calendar
    template(v-else-if="view=='climbing'")
      course-climbing-list
    template(v-else)
      course-list
    v-btn(color="primary" @click.native="openNewCourseDialog()" dark fab fixed bottom right)
      v-icon add
</template>

<script>
import CourseCalendar from "./Calendar";
import CourseList from "./List";
import CourseClimbingList from "./ClimbingList";
import CourseView from "./View";
import CourseService from "./course.service";

export default {
  name: "Course",
  components: {
    CourseCalendar, CourseList, CourseClimbingList, CourseView,
  },
  data() {
    return {
      view: this.$route.query.view,
    };
  },
  computed: {
    courses() {
      // implement filter here
      return this.$store.state.course.courses;
    },
    dialog: {
      get() {
        return this.$store.state.common.dialog;
      },
      set(val) {
        this.$store.dispatch("common/updateDialog", val);
      },
    },
  },
  created() {
    CourseService.fetchDates();
    CourseService.fetchCourseTypes();
    // CourseService.fetchDates();
    if (this.$route.params.slug) {
      CourseService.fetchCourse(this.$route.params.slug);
      this.openInDialog(this.$route.params.slug);
    }
  },

  beforeRouteUpdate(to, from, next) {
    this.view = to.query.view;
    if (to.params.slug) {
      CourseService.fetchCourse(to.params.slug);
      this.openInDialog(to.params.slug);
    }
    next();
  },
  methods: {
    openNewCourseDialog() {
      console.log("OpenDialog")
      this.dialog.visible = true
      this.dialog.component = "CourseAdd"
      this.dialog.title = "Kurs anlegen"
    },
  },
};
</script>

<style scoped>
</style>
