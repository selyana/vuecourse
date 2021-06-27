<template v-slot:top>
<div>
    <div class="ma-5">
      <h2>Popular expenses</h2>
      <v-btn
      outlined
      color="primary"
      @click="editExpense"        
      class="ma-2"
      v-for="({category, value}, i) in getPopularExpenses"
      :key="i"
      :to="`/add/payment/${category}?value=${value}`">
      {{category}} {{value}}$</v-btn>
    </div>
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
      <CategoriesSelector :currentItem="type" @changeType="changeType"></CategoriesSelector>
      <datePicker
      @updateDate="updateDate"
      ></datePicker>
              <v-btn color="blue darken-1" text @click="formShown = !formShown">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="onSaveClick()">OK</v-btn>
              </v-form>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </div>
</template>

<script>
import CategoriesSelector from '../components/CategoriesSelector'
import datePicker from '../components/datePicker'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'




  export default {
    components: {CategoriesSelector, datePicker},
    props: ["itemID"],
    data() {
      return {
        formShown: false,
        payments: [],
      amount: '',
      type: '',
      date: '',
      }
    },

     computed: {

 ...mapGetters(['getPopularExpenses']),



    getCurrentDate () {
      const today = new Date();
      const day = today.getDate()
      const month = today.getMonth() + 1
      const year = today.getFullYear()
      return `${year}-${month}-${day}`
    }
  },


   methods: { 

         editExpense() {
          this.formShown = true
          let getURL = document.location.search
          let searchValue = new URLSearchParams(getURL)
          let getValue = searchValue.get("value")
          this.amount = getValue
          this.type = this.$route.params.category

  },

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
    },


  }};
</script>