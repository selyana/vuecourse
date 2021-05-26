<template>

            <v-btn
              x-large
              color="primary"
              dark
              class="ma-4"
              @click="showForm"
            >
              Add a new payment
            </v-btn>

</template>

<script>
 export default {
   name: 'PaymentsDisplay',
   props: ["paymentsList"],
   data(){
       return {
       }
   },

   

   methods: { 

       showForm(){
        this.$emit('showForm')
       }

  }
 }

 

</script>

<style scoped>


</style>