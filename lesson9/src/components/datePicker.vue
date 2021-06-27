<template>
  <v-container>
    <v-row>
      <v-col
      >
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            hide-details
            filled
            rounded
            dense
            single-line
            append-icon="mdi-calendar-range"
            v-model="dateFormatted"
            persistent-hint
            v-bind="attrs"
            @blur="date = parseDate(dateFormatted)"
            v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
          v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props:["datePicked"],
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    mounted() {
        if (this.datePicked){
          this.date = this.datePicked
          }
    },

    watch: {
      date (date) {
        this.dateFormatted = this.formatDate(date)
      },

      dateFormatted (dateFormatted) {
          if(dateFormatted !== this.datePicked){
            this.$emit('updateDate', dateFormatted)
          }},

      datePicked (datePicked) {
        if (this.dateFormatted !== datePicked){
          this.date = this.datePicked;
      }}

    },

    methods: {

      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },

    },
  }
</script>