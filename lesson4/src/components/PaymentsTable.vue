<template>
<div>
<h2>Total {{getFullPaymentValue}}</h2>
  <v-data-table
    :headers="headers"
    :items="getPaymentsList"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: [],
    data () {
      return {
        headers: [
          { text: 'Amount', value: 'value' },
          { text: 'Type', value: 'category' },
          { text: 'Date', value: 'date' },
        ],
      }
    },

  computed: {
    ...mapGetters([
      'getPaymentsList',
      'getFullPaymentValue'
    ]),

  },

  }
</script>