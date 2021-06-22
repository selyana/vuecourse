<template>
<div>

  <v-data-table
    :headers="headers"
    :items="getPaymentsList"
    :items-per-page="itemsPerPage"
    hide-default-footer
    :page.sync="page"
    @page-count="pageCount = $event"
    class="elevation-1 ma-3 mt-0"
    width="300px"
  
  >
    <template v-slot:[`item.actions`]="{ item, idx }">
    <v-btn
        icon>
      <v-icon
        small
      >
      mdi-pencil
      
      </v-icon>
    </v-btn>
    <ModalWindowDelete
    :itemIdx="idx">
    </ModalWindowDelete>
    </template>
  </v-data-table>
        <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ModalWindowDelete from './ModalWindowDelete'


  export default {
    components: {ModalWindowDelete},
    props: [],
    data () {
      return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 1,
        headers: [
          { text: 'Amount', value: 'value' },
          { text: 'Type', value: 'category' },
          { text: 'Date', value: 'date' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },

  computed: {
    ...mapGetters([
      'getPaymentsList',
      'getFullPaymentValue'
    ]),

  },

    //   methods: {
    //   showDeletePopUp (id) {
    //       this.itemID = id;
    //       this.dialogDelete = !this.dialogDelete
    //   },
    // },

  }
</script>