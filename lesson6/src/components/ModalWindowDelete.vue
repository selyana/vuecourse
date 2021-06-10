<template v-slot:top>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Вы точно хотите удалить эту запись?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialogDelete = !dialogDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm(itemID)">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>

<script>


  export default {
    props: ["dialogDelete", "itemID"],
    data() {
      return {
        payments: [],
      }
    },

    methods: {

  }};
</script>
