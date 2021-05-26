<template>
  <div>
    <header>
      <h1>My personal costs</h1>
    </header>
    <main>
      <AddButton @showForm="showForm"/>
      <AddPaymentForm @addNewPayment="addNewPayment" :formShown="formShown" />
      <!-- <PaymentsDisplay :paymentsList="paymentsList"/> -->
      <PaymentsTable :paymentsList="paymentsList"/>
    </main>
  </div>
</template>

<script>
  // import PaymentsDisplay from '../components/PaymentsDisplay'
  import AddPaymentForm from '../components/AddPaymentForm'
  import AddButton from '../components/AddButton'
  import PaymentsTable from '../components/PaymentsTable'




  export default {
    name: 'Home',
    components: {
      // PaymentsDisplay,
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

        showForm(){
        this.formShown = !this.formShown
       },

    addNewPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
      console.log(data.type)
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
  this.paymentsList = this.fetchData()
},

  }
</script>
