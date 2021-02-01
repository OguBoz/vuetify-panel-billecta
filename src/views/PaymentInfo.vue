<template>
  <div class="myinfo">
    <page-header titleText="Min information" infoText="Här kan du se vilka uppgifter som finns lagrade om dig i vårt system. Anser du att en uppgifter är felaktig kan du genom att begära en rättelse. Rättelsen kommer skickas till bolaget du begär rättelse hos för ändring."></page-header>

    <v-container fluid class="my-5">
     <v-layout row class="mb-3">
    <v-card class="flex-grow-1">
    <h3 class="subheading grey--text invoices-heading">Autogiromedgivanden</h3>

    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th class="text-left">
              Org.nr.
            </th>
            <th class="text-left">
              Företag
            </th>
            <th class="text-left">
              Medgivande
            </th>
            <th class="text-left">
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>556971-6011</td>
            <td>Billecta AB	</td>
            <td><template class="hidden-md-and-up"><br></template>Inget medgivande finns. Klicka på <v-icon color="success">add</v-icon> för att lägga till<span class="hidden-sm-and-down"> ett.</span></td>
            <td class="text-right py-3">
                <billecta-button v-bind:onclick="on" v-bind:attrss="attrs" class="darkmode-succes-btn" btnColor="success" iconColor="white" text="Nytt medgivande" hasIcon="true" iconType="add" side="left"></billecta-button>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
         </v-card>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import PageHeader from '../components/PageHeader.vue'

export default {
    components: {
    'billecta-button': Button,
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

@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/

	td:nth-of-type(1) { padding-left: 7px; padding-top: 7px; text-align: right; }
	td:nth-of-type(2) { padding-left: 7px; padding-top: 7px; text-align: right; }
	td:nth-of-type(3) { text-align: left; }

	td:nth-of-type(1):before { text-align: left; content: "Org.nr."; }
	td:nth-of-type(2):before { text-align: left; content: "Företag"; }
	td:nth-of-type(3):before { text-align: left; content: "Medgivande"; }
	td:nth-of-type(4):before { content: " "; }
}

</style>>
