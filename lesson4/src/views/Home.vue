<template>
  <div>
    <header>
      <h1>My personal costs</h1>
    </header>
    <main>
      <AddButton @showForm="showForm"/>
      <AddPaymentForm @addNewPayment="addNewPayment" :formShown="formShown" />
      <PaymentsTable/>
    </main>
  </div>
</template>

<script>
  import AddPaymentForm from '../components/AddPaymentForm'
  import AddButton from '../components/AddButton'
  import PaymentsTable from '../components/PaymentsTable'
  import { mapMutations } from 'vuex'



  export default {
    name: 'Home',
    components: {
      AddPaymentForm,
      AddButton,
      PaymentsTable
    },
    data(){
       return {
         paymentsList: [],
         formShown: false
       }
   },

   methods: {

    ...mapMutations([
    'setPaymentsListData',
    ]),


    showForm(){
    this.formShown = !this.formShown
    },

    addNewPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
    },


  fetchData () {
    return [
      {
        date: '28.03.2020',
        category: 'Food',
        value: 169,
      },
      {
        date: '24.03.2020',
        category: 'Transport',
        value: 360,
      },
      {
        date: '24.03.2020',
        category: 'Food',
        value: 532,
      },
    ]
  },
},
created () {
    this.setPaymentsListData(this.fetchData())
},

  }
</script>
