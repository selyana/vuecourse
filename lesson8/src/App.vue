<template>
  <v-app>
    <Bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Bar from "./components/Bar";



export default {
  name: 'App',
  components: {Bar},

   data(){
       return {
       }
   },
};
</script>
