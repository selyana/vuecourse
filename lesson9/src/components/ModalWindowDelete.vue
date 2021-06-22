<template v-slot:top>
<div>
    <v-btn
    icon
    @click="dialogDelete=true">
      <v-icon
        small
        >
      >
        mdi-delete
      </v-icon>
      </v-btn>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Вы точно хотите удалить эту запись?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialogDelete = !dialogDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm(itemIdx)">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </div>
</template>

<script>
  import { mapMutations } from 'vuex'


  export default {
    props: ["itemIdx"],
    data() {
      return {
        dialogDelete: false,
      }
    },

    methods: {
    ...mapMutations([
      'deleteFromPaymentsList',
    ]),

      deleteItemConfirm (idx) {
      console.log(idx)
      // this.deleteFromPaymentsList(id)
      // this.dialogDelete = false
    },

  }};
</script>
