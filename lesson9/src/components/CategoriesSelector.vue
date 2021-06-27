<template>
   <v-select
      class="ml-4 mr-4 mb-1"
      hide-details
      filled
      rounded
      dense
      single-line
      append-icon="mdi-dots-horizontal"
      :items="getCategoryList"
      label="Type"
      v-model="selected"
    ></v-select>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
 
export default {
    props: ["currentItem"],
    data () {
      return {
          selected: []
      }
    },

    watch: {

      currentItem(currentItem) {
          this.selected = currentItem;
      },

      selected(selected) {
      this.$emit('changeType', selected)
      },
     
    },

 computed: {
   ...mapGetters([
     'getCategoryList'
   ])
 },
 methods: {
   ...mapActions([
     'loadCategories'
   ])
 },
 mounted () {
   if (!this.getCategoryList.length) {
     this.loadCategories()
   }

        if (this.selected !== this.currentItem){
          this.selected = this.currentItem;
        }


 }
}
</script>