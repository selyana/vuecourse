<template>
  <div>
    <header>
      <h1 class="ma-4">My personal costs</h1>
    </header>
    <main>
    <AddPaymentPopUp>
    </AddPaymentPopUp>
      <PaymentsTable></PaymentsTable>
    </main>
  </div>
</template>

<script>
  import AddPaymentPopUp from '../components/AddPaymentPopUp'
  import PaymentsTable from '../components/PaymentsTable'

  import { mapMutations } from 'vuex'


  export default {
    name: 'Home',
    components: {
      PaymentsTable,
      AddPaymentPopUp,
    },
    data(){
       return {
         paymentsList: [],
       }
   },

   methods: {

    ...mapMutations([
    'setPaymentsListData',
    ]),


    addNewPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
    },


  fetchData () {
    return [
      {
        date: '2020-09-08',
        category: 'Food',
        value: 169,
        id: 0
      },
      {
        date: '2020-08-21',
        category: 'Transport',
        value: 360,
        id: 1
      },
      {
        date: '2020-01-14',
        category: 'Sports',
        value: 532,
        id: 2
      },
    ]
  },
},
created () {
    this.setPaymentsListData(this.fetchData())
},

  }
</script>
