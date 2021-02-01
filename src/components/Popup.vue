<template>
  <div>
    <!-- THIS IS ONE MODAL, ADD IMAGE OF IT TO GOOGLE AND SHARE WITH BILLECTA TECH -->
      <v-dialog max-width="600px" v-if="type == 'contact'" v-model="dialog" persistent>
        <template v-slot:activator="{ on, attrs }">
        <billecta-button v-bind:onclick="on" v-bind:attrss="attrs" class="success navb-btn" btnColor="success" text="Kontakta oss" hasIcon="false"></billecta-button>
        </template>
        <v-card>
          <v-card-title class="d-flex flex-column">
            <modal-icon size="100" type="person"></modal-icon>
            <h2>Kontakta oss</h2>
          </v-card-title>
          <v-card-text>
            <v-form class="px-3" ref="form">
              <v-text-field v-model="title" label="Title" prepend-icon="folder" :rules="inputRules"></v-text-field>
              <v-textarea v-model="content" label="Information" prepend-icon="edit" :rules="inputRules"></v-textarea>
              <v-spacer></v-spacer>
              <div class="d-flex justify-end">
                <v-btn text @click="submit" class="success text-right mx-0 mt-3 darkmode-succes-btn">Skicka</v-btn>
                <v-btn color="red" class="text-right mx-0 mt-3 darkmode-succes-btn" text @click="dialog = false" style="margin-left:7px !important;">Stäng</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- END OF FIRST MODAL -->

    <!-- THIS IS SECOND MODAL, ADD IMAGE OF IT TO GOOGLE AND SHARE WITH BILLECTA TECH -->
      <v-dialog max-width="600px" v-if="type == 'correctInfo'" v-model="dialog" persistent>
        <template v-slot:activator="{ on, attrs }">
          <billecta-button v-bind:onclick="on" v-bind:attrss="attrs" class="darkmode-succes-btn" btnColor="success" iconColor="white" text="Begär rättelse av uppgifter" hasIcon="true" iconType="edit" side="left"></billecta-button>
        </template>
        <v-card>
          <v-card-title class="d-flex flex-column">
            <modal-icon size="100" type="person"></modal-icon>
            <h2>Begär rättelse av uppgifter</h2>
          </v-card-title>
          <v-card-text>
            <v-card color="#f8fafb" class="fill-width">
              <v-card-text>
                <p>Du kan be om en ändring av de registrerade uppgifterna om dig genom 
                   att skriva de korrekta uppgifterna nedan. 
                   Vänligen skriv ett meddelande med det du vill ändra och tryck på skicka.
                </p>

                <v-form class="px-3" ref="form">
                  <v-text-field v-model="title" label="Title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                  <v-textarea v-model="content" label="Information" prepend-icon="edit" :rules="inputRules"></v-textarea>
                  <v-spacer></v-spacer>
                  <div class="d-flex justify-end">
                    <v-btn text @click="submit" class="success text-right mx-0 mt-3 darkmode-succes-btn">Skicka</v-btn>
                    <v-btn color="red" class="text-right mx-0 mt-3 darkmode-succes-btn" text @click="dialog = false" style="margin-left:7px !important;">Stäng</v-btn>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- END OF SECOND MODAL -->
  </div>
</template>

<script>
import format from 'date-fns/format';
import ModalIconVue from '../components/ModalIcon.vue';
import Button from '../components/Button.vue'

export default {
  props: ['type'],
  components: {
    'modal-icon': ModalIconVue,
    'billecta-button': Button
  },
  data() {
    return {
      dialog: false,
      title: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        // Here add the item to the state array
        console.log(this.title, this.content)
      }
    }
  },
  computed: {
    formattedDate () {
      console.log(this.due)
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  }
}
</script>
