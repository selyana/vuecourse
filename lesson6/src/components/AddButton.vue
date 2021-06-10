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
import { mapGetters } from 'vuex'

 export default {
   name: 'PaymentsDisplay',
   props: ["paymentsList"],
   data(){
       return {
       }
   },

  computed: {
    ...mapGetters([
      'getPaymentsList',
    ])
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