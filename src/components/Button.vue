<template>
<v-btn v-if="hasIcon == 'true'" v-bind="size" v-bind:color="btnColor" v-on.native="onclick" v-bind:attrs="attrss">
  <template v-if="side == 'left'">
    <v-icon left>{{ iconType }}</v-icon> 
    {{ text }}
  </template>
  <template v-else>
    {{ text }}
    <v-icon right v-bind:color="iconColor">{{ iconType }}</v-icon> 
  </template>
</v-btn>
<v-btn v-else v-bind="size" v-bind:color="btnColor" v-on.native="onclick" v-bind:attrs="attrss">
    {{ text }}
</v-btn>
</template>

<script>
export default {
    /* PROPS
            - hasIcon : bool(true=icon, false = no icon)
            - iconType: string(name of materialize icon)
            - iconColor: string(color of icon)
            - side: string(left or right alignment for the icon)
            - btnColor: string(color)
            - text: string(the text to be displayed on button)
       END PROPS 
    */
   props: ['hasIcon','iconType', 'btnColor', 'iconColor', 'text', 'side', 'onclick', 'attrss'],
    computed: {
        size () {
        const size = {xs:'x-small',sm:'small',lg:'large',xl:'x-large'}[this.$vuetify.breakpoint.name];
        return size ? { [size]: true } : {}
        }
    },
     data() {
   return {
     
   }
 }
}
</script>

<style>

</style>