<template>
  <div>
    <header>
      <h1 class="ma-4">My personal costs</h1>
    </header>
     <AddPopularExpense>
    </AddPopularExpense>
    <main>
    <AddPaymentPopUp>
    </AddPaymentPopUp>
      <PaymentsTable></PaymentsTable>
      <Chart
      :chartData="chartData"
      :options="options"
      ></Chart>
    </main>
  </div>
</template>

<script>
  import AddPaymentPopUp from '../components/AddPaymentPopUp'
  import PaymentsTable from '../components/PaymentsTable'
  import AddPopularExpense from '../components/AddPopularExpense'
  import Chart from '../components/Chart'
  import { mapGetters, mapActions, mapMutations } from 'vuex'


  
  export default {
    name: 'Home',
    components: {
      PaymentsTable,
      AddPaymentPopUp,
      AddPopularExpense,
      Chart
    },
    data(){
       return {
  paymentsList: [],
  chartData: {
          labels: [],
          datasets: [{
              borderWidth: 1,
              borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'            
              ],
              backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',                
              ],
              data: [100, 78]
            }]
  },
  options: {
  legend: {
            display: true
          },
    responsive: false,
    maintainAspectRatio: true
  }
       }
   },

     computed: {
    ...mapGetters([
      'getPaymentsList',
      'getCategoryList'
    ]),

  },

  async mounted(){

     await this.loadCategories()
     this.getCategoryList.forEach((item) => {
     this.chartData.labels.push(item)
        });

       console.log(this.chartData.datasets[0].data)
       await this.getPaymentsList.forEach((item) => {
       console.log(item.value)
     this.chartData.datasets[0].data.push(item.value)

            console.log(this.chartData.datasets[0].data)

        });



  },
   
   methods: {

        ...mapActions([
     'loadCategories'
   ]),


    ...mapMutations([
    'setPaymentsListData',
    ]),


    addNewPayment (data) {
      this.paymentsList.cater = [...this.paymentsList, data]
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
