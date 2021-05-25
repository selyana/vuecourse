<template>
  <div>
     <div class="display">
       <input type="number" v-model="operand1"/>
       <input type="number" v-model="operand2"/>
       = {{result}}
       <br/>
      <!-- fib(<input v-model.number="operand1" />)
      fib(<input v-model.number="operand2" />)
      = {{ fibResult }} -->
     </div>
     <div class="keyboard">
   <v-btn 
   :key="operand" 
   :title="operand" 
   :disabled="operand1 === '' || operand2 === '' || (operand === '/' &&  operand2 == 0)"
   v-for="operand in operands" 
   @click="calculate(operand)">
     {{ operand }}
   </v-btn>
         <v-btn @click="newField = !newField">Возвести в степень</v-btn>
  </div>
    <v-checkbox
      v-model="checkbox"
      label="Отобразить экранную клавиатуру"
    ></v-checkbox>
  <div v-if="checkbox">
  <v-btn 
   :key="calcButton" 
   v-for="calcButton in calcButtons" 
   @click="addNumber(calcButton)">
     {{ calcButton }}
   </v-btn>
     <v-btn 
   @click="deleteNumber">
   Удалить</v-btn>
            <v-radio-group
              column
              v-model="picked"
            >
              <v-radio
                label="Операнд 1"
                value="operand-1"
              ></v-radio>
              <v-radio
                label="Операнд 2"
                value="operand-2"
              ></v-radio>
            </v-radio-group>
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

         <!-- <div class="logs">
     <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
   </div> -->
  </div>
</template>
 
<script>
 export default {
   name: 'Calculator',
   data(){
       return {
           operands: ['+', '-', '/', '*'],
           calcButtons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
           operand1: "",
           operand2: "",
           operand3: "",
           result: "",
           result2: "",
           exponentNumber: "",
           newField: false,
           checkbox: false,
           picked: null,
          //  logs: {},
       }
   },

   

   methods: {
  //   fib(n) {
  //    return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
  //  },

    addNumber(calcButton){
      if (this.picked == "operand-1") {
        let str = this.operand1.toString();
        this.operand1 = str += calcButton;
      }
      if (this.picked == "operand-2") {
        let str = this.operand2.toString();
        this.operand2 = str += calcButton;
      }
    },

    deleteNumber(){
      console.log(this.operand1)
        if (this.picked == "operand-1") {
          this.operand1 = this.operand1.slice(0, -1);
        }
        if (this.picked == "operand-2") {
          this.operand2 = this.operand2.slice(0, -1);
        }
    },

    calculate (operation) {
     switch (operation) {
       case '+':
         this.add()
         break;
       case '-':
         this.substract()
         break;
       case '*':
         this.multiply()
         break;
       case '/':
         this.divide()
         break;
     }
  // const key = Date.now()
  // const value = `${this.operand1}${operation}${this.operand2}=${this.result}`
  // this.$set(this.logs, key, value)
    },
      add() {
      this.result=+this.operand1+ +this.operand2
      // this.fibResult = this.fibb1 + this.fibb2

    },
      substract() {
      this.result=+this.operand1- +this.operand2
      // this.fibResult = this.fibb1 - this.fibb2

    },
      divide() {
      this.result=Math.floor(+this.operand1/ +this.operand2)
      // this.fibResult = Math.floor(this.fibb1/this.fibb2)

    },
      multiply() {
      this.result=+this.operand1* +this.operand2
      // this.fibResult = this.fibb1*this.fibb2

    },
      calc() {
      this.result2=Math.pow(+this.operand3, +this.exponentNumber)
    }
   },

//    computed: {
//    fibb1 () {
//      return this.fib(this.operand1)
//    },
//    fibb2 () {
//      return this.fib(this.operand2)
//    },
//  },
 }

 

</script>

<style scoped>


</style>