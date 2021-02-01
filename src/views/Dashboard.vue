<template>
  <div class="dashboard">
    <page-header titleText="Välkommen till Billecta AB" infoText="I denna sida kan du få en snabb översikt och statistik om dina fakturor. 
        För att får mer detaljerad information kan du navigera till de andra menyalternativen 
        som du hittar i huvudmenyn."></page-header>

    <v-container fluid class="my-5">    
      <v-layout row justify-space-around wrap>
        <v-flex xs12 sm12 md5>
          <v-card text v-for="invoicegroup in invoices" :key="invoicegroup.title">
            <v-layout row wrap :class="`pa-3 project ${invoicegroup.status}`">
              <v-flex xs12 md6>
                <div class="caption grey--text">Typ</div>
                <div>{{ invoicegroup.title }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Totalt</div>
                <div>{{ invoicegroup.total }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Antal(%)</div>
                <div>{{ invoicegroup.percentage }}</div>
              </v-flex>
              <v-flex xs2 sm4 md2>
                <div class="right">
                  <v-chip small :class="`${invoicegroup.status} white--text my-2 caption`">{{ invoicegroup.status }}</v-chip>
                </div>
              </v-flex>
            </v-layout>
      </v-card>
        </v-flex>
        
        <v-flex xs12 sm12 md5 class="mt-sm-5 mt-5 mt-md-0">
          <v-card text v-for="invoicegroup in invoices" :key="invoicegroup.title">
            <v-layout row wrap :class="`pa-3 project ${invoicegroup.status}`">
              <v-flex xs12 md6>
                <div class="caption grey--text">Typ</div>
                <div>{{ invoicegroup.title }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Totalt</div>
                <div>{{ invoicegroup.total }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Antal(%)</div>
                <div>{{ invoicegroup.percentage }}</div>
              </v-flex>
              <v-flex xs2 sm4 md2>
                <div class="right">
                  <v-chip small :class="`${invoicegroup.status} white--text my-2 caption`">{{ invoicegroup.status }}</v-chip>
                </div>
              </v-flex>
            </v-layout>
      </v-card>
        </v-flex>
      </v-layout>
      

<!--       <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <v-btn small text color="grey" @click="sortBy('title')" slot="activator">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small text color="grey" @click="sortBy('person')" slot="activator">
            <v-icon small left>person</v-icon>
            <span class="caption text-lowercase">By Person</span>
          </v-btn>
          <span>Sort by project author</span>
        </v-tooltip>
      </v-layout> -->

      <!-- <v-card text v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card> -->


      

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
      invoices: [
        { title: 'Betalda fakturor', total: '50', percentage: '89.2%', status: 'complete'},
        { title: 'Öppna fakturor', total: '4', percentage: '7.2%', status: 'ongoing'},
        { title: 'Förfallna fakturor', total: '2', percentage: '3.6%', status: 'overdue'},
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.invoices.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style>

.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid #ffaa2c;
}
.project.overdue{
  border-left: 4px solid #f83e70;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}

.project {
  margin-left: 0px !important;
}

.sucess-top-border {
    background-color: #ffffff !important;
    border-top: 5px solid #1ab394 !important
}
</style>
