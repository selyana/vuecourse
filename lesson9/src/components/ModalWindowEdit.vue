<template v-slot:top>
<div>
    <v-btn
    icon
    @click="dialogEdit = true">
      <v-icon
        small
        >
      >
        mdi-pencil
      </v-icon>
      </v-btn>
        <v-dialog v-model="dialogEdit" max-width="500px">
          <v-card>
            <v-card-title class="headline">Редактировать запись</v-card-title>
            <v-card-actions>
                <v-form>
                          <v-text-field
      class="ma-4"
      hide-details
      label="Amount"
      filled
      rounded
      dense
      single-line
      v-model="item.value" 
      append-icon="mdi-currency-usd"></v-text-field>
      <CategoriesSelector :currentItem="item.category" @changeType="changeType"></CategoriesSelector>
      <datePicker
      :datePicked="item.date"
      @updateDate="updateDate"
      ></datePicker>
              <v-btn color="blue darken-1" text @click="dialogEdit = !dialogEdit">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="saveItem()">OK</v-btn>
              </v-form>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import CategoriesSelector from './CategoriesSelector'
  import datePicker from '../components/datePicker'


  export default {
    props: ["item"],
    components: {CategoriesSelector, datePicker},
    data() {
      return {
        dialogEdit: false,
        newItem: {
      amount: '',
      type: '',
      date: '',
        }
      }
    },

    mounted(){
    },

    watch: {
    },


    methods: {
    ...mapMutations([
      'editItem',
    ]),


      changeType (type) {
        this.newItem.type = type;
        },

      updateDate(dateFormatted){
        this.newItem.date = dateFormatted
      },

      findItemFunction(){
      this.dialogEdit = true
      },
  
      saveItem () {
      const data = {
        value: +this.item.value,
        category: this.newItem.type,
        date: this.newItem.date,
        id: this.item.id
      }
      this.editItem(data)
      this.dialogEdit = false
    }

  }};
</script>
