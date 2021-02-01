<template>
  <div class="myinfo">
    <page-header titleText="Min information" infoText="Här kan du se vilka uppgifter som finns lagrade om dig i vårt system. Anser du att en uppgifter är felaktig kan du genom att begära en rättelse. Rättelsen kommer skickas till bolaget du begär rättelse hos för ändring."></page-header>


    <v-container fluid class="my-5">

     <v-layout row justify-center class="mb-3">
        <v-card class="full-width-card">
        <v-card-title>
          Billecta AB
        </v-card-title>
          <v-card-text>
            <p class="gray">556971-6011</p>
            <h4>Information hos Billecta AB</h4>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Org. No</v-list-item-title>
                <v-list-item-subtitle>556982-2413</v-list-item-subtitle>
                <v-list-item-title>Företagsnamn</v-list-item-title>
                <v-list-item-subtitle>Ztorage Sverige AB</v-list-item-subtitle>
                <v-list-item-title>Addressuppgifter</v-list-item-title>
                <v-list-item-subtitle>C/o Oscar Hentschel</v-list-item-subtitle>
                <v-list-item-subtitle>Döbelnsgatan 58</v-list-item-subtitle>
                <v-list-item-subtitle>11352 Stockholm SE</v-list-item-subtitle>
                <v-list-item-title>Telefonnummer</v-list-item-title>
                <v-list-item-subtitle>08-410 718 00</v-list-item-subtitle>
                <v-list-item-title>Mejl</v-list-item-title>
                <v-list-item-subtitle>hello@ztorage.se</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          <Popup type="correctInfo"/>


          </v-card-text>
        </v-card>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import Popup from '../components/Popup'

export default {
  components: { 
    Popup,
    'page-header': PageHeader
  },
 data() {
   return {
     dialog: false
   }
 }
}
</script>

<style scoped>
  .invoices-heading {
    margin-top: 20px;
    margin-left: 10px;
  }
</style>>
