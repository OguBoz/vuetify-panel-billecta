<template>
  <div class="invoice-container" style="margin-left:0 !important; margin-right:0 !important;">
        <v-card class="pa-8 mb-5">
            <v-layout row justify-space-around wrap>
                <v-flex xs12 sm12 md5><h1 :class="{'text-h6': $vuetify.breakpoint.mdAndDown}">Faktura 25363 från Billecta AB</h1></v-flex>
                <v-flex xs12 sm12 md5 text-right>
                    <billecta-button class="success navb-btn" btnColor="success" text="Ladda ner PDF-faktura" hasIcon="true" iconType="file_download" side="left" iconColor="white"></billecta-button>
                </v-flex>
            </v-layout>
            <v-layout row justify-space-around wrap class="mt-7">
                <v-flex xs12 sm12 md5 class="mb-3 mb-md-0">
                    <v-card elevation="9" outlined class="sucess-top-border">
                        <v-card-title>Billecta AB</v-card-title>
                        <v-card-subtitle>
                            Mailbox 2320
                            <br>
                            11175 Stockholm
                        </v-card-subtitle>
                        <v-card-text>
                            <a href="mailto:Alexander.Lindqvist@billecta.com">Alexander.Lindqvist@billecta.com</a>
                            <br>
                            08-400 20 290
                            <br>
                            Avsändarens referens: Jonas Ahlberg
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm12 md5>
                    <v-card elevation="9" outlined class="sucess-top-border">
                        <v-card-title>Bisfront AB</v-card-title>
                        <v-card-subtitle>
                            Linnégatan 87A
                            <br>
                            11523 Stockholm
                        </v-card-subtitle>
                        <v-card-text>
                            <a href="mailto:mailto:invoice@bisfront.se">invoice@bisfront.se</a>
                            <br>
                            +46086601770
                            <br>
                            Er referens: Inkassomailadress Bisfront
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>

            <v-alert
                text
                prominent
                type="error"
                icon="error_outline"
                class="mt-7"
            >
                Fakturan har förfallit. Full betalning skulle vara oss tillhanda senast 2020-11-20. 
                Vänligen betala fakturan omgående för att undvika eventuella förseningskostnader. 
                Eventuella invändningar ska ske till Billecta AB.
            </v-alert>
        </v-card>
    <v-container fluid>
        <v-card class="mb-7">
            <v-card-title class="pt-7 pl-7">
                Betalningsuppgifter
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-7">
                <span class="grey--text">Belopp att betala senast 2020-11-20</span>
                <h3>248,00 SEK</h3>
                <span>Ange <strong>00000000000000</strong> som referens/OCR-nummer på betalningen. Betalning ska ske till bankgiro <strong>0000-0000</strong></span>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="pl-7 pa-5">
                <billecta-button class="success navb-btn" btnColor="success" text="Betala nu"></billecta-button>
                <billecta-button class="success navb-btn" btnColor="success" text="Anmäl autogiro"></billecta-button>
            </v-card-actions>
        </v-card>


<v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Händelser</v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-timeline
            align-top
            dense
            >
            <v-timeline-item
                color="pink"
                icon="calendar_today"
                fill-dot
            >
                <v-row class="pt-1">
                <v-col cols="12" sm="12">
                    <strong>2020-11-20</strong>
                </v-col>
                <v-col cols="12" sm="12">
                    <strong>Fakturan förföll den 2020-11-20</strong>
                </v-col>
                </v-row>
            </v-timeline-item>
    

    
            <v-timeline-item
                color="teal lighten-3"
                icon="send"
                fill-dot
            >
                <v-row class="pt-1">
                <v-col cols="12" sm="12">
                    <strong>2020-11-01 kl. 01:37</strong>
                    <br>
                    <span>System (system)</span>
                </v-col>
                <v-col cols="12" sm="12">
                    <strong>Fakturan skickades</strong>
                    <div class="caption">
                    Med e-post till invoice@bisfront.se.
                    </div>
                </v-col>
                </v-row>
            </v-timeline-item>
            </v-timeline>
        </v-expansion-panel-content>
      </v-expansion-panel>
   </v-expansion-panels>


    </v-container>
  </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
  components: {
    'billecta-button': Button
  },
data() {
 return {
   panel: [0]
 }
},
  methods: {

  }
}
</script>

<style scoped>
.v-application #main {
    margin-left: 0 !important;
    margin-right: 0 !important;
}
</style>
