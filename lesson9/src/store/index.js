import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryList: [],
    paymentsList: [],
  },
  mutations: {
    setPaymentsListData (state, payload) {
    state.paymentsList = payload
  },
    addDataToPaymentsList (state, payload) {
    state.paymentsList = [...state.paymentsList, payload]
  },
    deleteFromPaymentsList (state, payload) {
      console.log(payload)
      console.log(state.paymentsList)
      state.paymentsList = state.paymentsList.splice(payload, 1)
      console.log(state.paymentsList)
  },

  setCategories (state, payload) { 
    if (!Array.isArray(payload)) {
      payload = [payload]
    }
    state.categoryList.push(...payload)
  },
 

},
  actions: {
    async fetchData ({ commit }) {
      return new Promise((resolve) => {
         // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
         setTimeout(() => {
           resolve([
             {
               date: '28.03.2020',
               category: 'Food',
               value: 169,
               id: 0,
             },
             {
               date: '24.03.2020',
               category: 'Transport',
               value: 360,
               id: 1,
             },
             {
               date: '24.03.2020',
               category: 'Sports',
               value: 532,
               id: 2,
             },
           ])
         }, 1000)
       })
         .then(res => {
           // запускаем изменение состояния через commit
           commit('setPaymentsListData', res)
         })
    },  

    async loadCategories ({ commit }) {
      return new Promise((resolve) => {
        // имитируем работу с сетью
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment', 'Drinks'])
        }, 1000)
      })
        .then(res => {
          // запускаем изменение состояния через commit
          commit('setCategories', res)
        })
    },
   

  },
  modules: {
  },

  getters: {
  getCategoryList: state => state.categoryList,

  // получаем список paymentsList
  getPaymentsList: state => state.paymentsList,
 
  // получаем суммарную стоимость всех платежей
  getFullPaymentValue: state => {
    return state.paymentsList
      .reduce((res, cur) => res + cur.value, 0)
  },
}

})
