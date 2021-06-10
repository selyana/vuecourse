<template>
<div>
    <ModalWindowDelete
    :dialogDelete="dialogDelete"
    :itemID="itemID">
    </ModalWindowDelete>
  <v-data-table
    :headers="headers"
    :items="getPaymentsList"
    :items-per-page="10"
    hide-default-footer
    class="elevation-1 ma-3 mt-0"
  >
    <template v-slot:[`item.actions`]="{ item }">
    <v-btn
    :to="'/admin/contacts/'+ item.id"
        icon>
      <v-icon
        small
      >
      mdi-pencil
      
      </v-icon>
    </v-btn>
    <v-btn
    icon
    @click="showDeletePopUp(item.id)">
      <v-icon
        small
        >
      >
        mdi-delete
      </v-icon>
      </v-btn>
    </template>
  </v-data-table>
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
      itemID: null,
      dialogDelete: false,
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

      methods: {
      showDeletePopUp (id) {
          this.itemID = id;
          this.dialogDelete = !this.dialogDelete
      },
    },

  }
</script>