<template>
  <div>
     <div class="display">
       <input type="number" v-model="operand1"/>
       <input type="number" v-model="operand2"/>
       = {{result}}
     </div>
     <div class="keyboard">
                <v-btn @click="plus">+</v-btn>
         <v-btn @click="minus">-</v-btn>
         <v-btn :disabled="operand2 == 0" @click="divide">/</v-btn>
         <v-btn @click="multiply">*</v-btn>
         <v-btn @click="newField = !newField">Возвести в степень</v-btn>
     </div>
                     <v-text-field 
       label="Напишите, в какую степень возвести"
       v-if="newField"
       v-model="exponentNumber"></v-text-field>
      <v-text-field 
       label="Какое число"
       v-if="newField"
       v-model="operand3"></v-text-field>
             <v-btn 
       v-if="newField" @click="calc">Посчитать</v-btn>
      {{result2}}
  </div>
</template>
 
<script>
 export default {
   name: 'Calculator',
   data(){
       return {
           operand1: "",
           operand2: "",
           operand3: "",
           result: "",
           result2: "",
           exponentNumber: "",
           newField: false,
       }
   },

   methods: {
      plus() {
      this.result=parseFloat(this.operand1)+parseFloat(this.operand2)
    },
      minus() {
      this.result=parseFloat(this.operand1)-parseFloat(this.operand2)
    },
      divide() {
      this.result=Math.floor(parseInt(this.operand1)/parseInt(this.operand2))
    },
      multiply() {
      this.result=parseInt(this.operand1)*parseInt(this.operand2)
    },
      calc() {
      this.result2=Math.pow(this.operand3, this.exponentNumber)
    }
   }
 }

</script>

<style scoped>


</style>