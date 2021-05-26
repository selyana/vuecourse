<template>
<div v-if="formShown"> 
      <v-text-field
      class="ma-4"
      hide-details
      label="Amount"
      filled
      rounded
      dense
      single-line
      v-model="amount" 
      append-icon="mdi-currency-usd"></v-text-field>
            <v-text-field
      class="ma-4"
      hide-details
      label="Type"
      filled
      rounded
      dense
      single-line
      v-model="type" 
      append-icon="mdi-dots-horizontal"></v-text-field>
            <v-text-field
      class="ma-4"
      hide-details
      label="Date"
      filled
      rounded
      dense
      single-line
      v-model="date" 
      append-icon="mdi-calendar-range"></v-text-field>
      <v-btn class="ma-4" @click="onSaveClick">Save</v-btn>
</div>
</template>
 
<script>
 export default {
   name: 'AddPaymentForm',
   props: ["formShown"],
   data(){
       return {
      amount: '',
      type: '',
      date: '',
       }
   },

     computed: {
    getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },


   methods: { 
    onSaveClick () {
      const data = {
        value: +this.amount,
        category: this.type,
        date: this.date || this.getCurrentDate,
      }
      this.$emit('addNewPayment', data)
    }

  }
 }

 

</script>

<style scoped>

.v-text-field{
    width: 200px;  }


</style>