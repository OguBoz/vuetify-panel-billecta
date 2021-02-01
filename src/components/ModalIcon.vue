<template>
  <v-icon class="modal-icon" :style="style">{{ type }}</v-icon>
</template>

<script>
export default {
    props: ['size', 'type'],
    computed: {
      style () {
        return 'font-size: ' + this.size + 'px';
      }
    }
}
</script>

<style>

</style>