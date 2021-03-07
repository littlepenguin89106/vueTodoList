<template>
  <v-app id="app">
    <v-main>
      <v-container class="d-flex justify-center">
        <v-card min-width="700" max-width="750">
          <v-btn-toggle class="d-flex justify-center">
              <v-btn v-for="r in selectRoute" :to="{name:r}" :key="r">{{r}}</v-btn>
          </v-btn-toggle>
          <todoInput />
          <div>
            <todoListItem v-for="index in todoIndex" :key="index" :index="index"/>
          </div>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import todoInput from '@/components/todoInput/index.vue'
import todoListItem from '@/components/todoListItem/index.vue'
export default {
  data(){
    return {
      selectRoute:[
        'all',
        'complete',
        'active'
      ]
    }
  },
  components:{
    todoInput,
    todoListItem
  },
  computed:{
    todoIndex(){
      return this.$store.getters["todoIndex"]
    }
  },
  mounted(){
    this.$store.dispatch('initTodos')
  }
}
</script>