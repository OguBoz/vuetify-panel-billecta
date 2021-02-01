<template>
      <v-card class="mt-3">
      <v-card-title class="grey--text">{{ titleText }}</v-card-title>
      <v-card-text>
          {{ infoText }}
      </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ['titleText', 'infoText'],
}
</script>

<style>

</style>