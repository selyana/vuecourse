<template v-slot:top>
        <v-dialog v-model="formShown" max-width="500px">
          <v-card>
            <v-card-title class="headline">Добавить запись</v-card-title>
            <v-card-actions>
                <v-form>
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
      <CategoriesSelector @changeType="changeType"></CategoriesSelector>
      <datePicker
      @updateDate="updateDate"
      ></datePicker>
              <v-btn color="blue darken-1" text @click="formShown = !formShown">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="onSaveClick()">OK</v-btn>
              </v-form>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>

<script>
import CategoriesSelector from '../components/CategoriesSelector'
import datePicker from '../components/datePicker'

import { mapMutations } from 'vuex'




  export default {
    components: {CategoriesSelector, datePicker},
    props: ["formShown", "itemID"],
    data() {
      return {
        payments: [],
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

      updateDate(dateFormatted){
        this.date = dateFormatted
      },

     changeType(selected) {
       this.type = selected
     },
   ...mapMutations([
      'addDataToPaymentsList',
    ]),

    onSaveClick () {
      const data = {
        value: +this.amount,
        category: this.type,
        date: this.date || this.getCurrentDate,
      }
      this.addDataToPaymentsList(data)
      this.formShown = false
      console.log(this.formShown)
    },


  }};
</script>
