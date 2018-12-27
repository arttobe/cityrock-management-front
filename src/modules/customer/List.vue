<template>
  <div>
    <v-container fluid>
      <h1 class="display-1 primary--text">
        <p>Kunden</p>
      </h1>
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-data-table :headers="headers" :items="customers">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.first_name}}</td>
                <td>{{ props.item.last_name }}</td>
                <td>{{ props.item.institution }}</td>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CustomerService from "./customer.service.js";
import CustomerEdit from "./Edit"
export default {
  name: "List",
  components: {CustomerEdit},
  created() {
    CustomerService.fetchCustomers();
  },

  data() {
    return {
      headers: [
        { text: "Vorname", value: "first_name" },
        { text: "Name", value: "last_name" },
        { text: "institution", value: "institution" }
      ],
    };
  },

  computed: {
    customers() {
      return this.$store.state.customer.customers;
    }
  }
};
</script>

<style scoped>
</style>
