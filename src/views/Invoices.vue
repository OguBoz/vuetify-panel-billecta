<template>
  <div class="invoices">
    <page-header titleText="Mina sidor för Ztorage Sverige AB" infoText="Vill du se eventuella ärenden från andra fakturaavsändare kan du logga ut och logga in med mobilt BankID. Observera då att om fakturaavsändarens kundregister inte har ditt personnummer kommer inte dessa fakturor att synas. I det fallet kan du logga in igen med fakturanummer och OCR från er faktura."></page-header>

    <v-container fluid class="my-5">

     <v-layout column justify-center class="mb-3">
        <v-card class="mb-5">
              <h3 class="subheading grey--text invoices-heading">Obetalda fakturor (1)</h3>

        <v-card-title>
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
        </v-card-title>

        <v-data-table
            :headers="headers"
            :items="invoices"
            :search="search"
        >
        <template #item.title="{ value }">
            <a target="_blank" :href="value">
              {{ value }}
            </a>
        </template>
              <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here
        </v-alert>
      </template>
        </v-data-table>
        </v-card>

        <v-card>
              <h3 class="subheading grey--text invoices-heading">Avslutade (9)</h3>

        <v-card-title>
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="invoices"
            :search="search"
        >
        <template #item.title="{ value }">
            <a target="_blank" :href="value">
              {{ value }}
            </a>
        </template>
      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here
        </v-alert>
      </template>
        </v-data-table>
        </v-card>

      </v-layout>

    </v-container>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'

export default {
  components: {
    'page-header': PageHeader
  },
 data() {
   return {
    search: '',
    loading: true,
    headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Title', value: 'title' },
        { text: 'Body', value: 'body' },
        { text: 'User Id', value: 'userId' },
      ],
      invoices: [
      ],
    }
  },
    watch: {
    options: {
      handler() {
        this.readDataFromApi();
      },
    },
    deep: true,
  },
  methods: {
    getInvoices() {
        const baseURI = 'https://jsonplaceholder.typicode.com/posts/'
        this.$http.get(baseURI)
          .then(response => {
              this.loading = false;
              this.invoices = response.data;
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => console.log("Done"))
        }
  },
  beforeMount () {
      this.getInvoices();
     }
  }
</script>

<style scoped>
  .invoices-heading {
    margin-top: 20px;
    margin-left: 10px;
  }
</style>>
