<template>
  <v-data-table
    :headers="headers"
    :items="paymentsList"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
      props: ["paymentsList"],
    data () {
      return {
        headers: [
          { text: 'Amount', value: 'value' },
          { text: 'Type', value: 'category' },
          { text: 'Date', value: 'date' },
        ],
        desserts: []
      }
    },
  }
</script>