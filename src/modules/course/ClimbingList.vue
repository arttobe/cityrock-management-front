<template>
  <div>
    <v-container fluid>
      <h1 class="display-1 primary--text">
        <p>Kletterkursverwaltung</p>
      </h1>
      <v-select
        clearable
        multiple
        solo
        :items="courseTypes"
        item-text="title"
        item-value="value"
        label="Kurstypen"
      ></v-select>
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-data-table :items="courses" hide-actions hide-headers>
              <template slot="items" slot-scope="props">
                <tr>
                  <td>
                    <v-icon class="icon-color" :color="props.item.color">lens</v-icon>
                  </td>
                  <td>{{ props.item.title}}</td>
                  <td>
                    <v-icon>input</v-icon>
                    <v-icon>edit</v-icon>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CourseClimbingList",
  data() {
    return {
      selectedTypes: null
    };
  },
  created: {},
  computed: {
    courses() {
      //Insert filter here
      return this.$store.state.course.courses;
    },
    courseTypes() {
      let ct = this.$store.state.course.course_types;
      console.log(ct);
      return ct
        .filter(item => item.public == true)
        .map(value => {
          return { title: value.title, value: value.id };
        });
    }
  }
};
</script>

<style scoped>
</style>
