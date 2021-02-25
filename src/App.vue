<template>
  <div id="app">
    <div id="nav">
      <router-link to="/all">All</router-link> |
      <router-link to="/complete">complete</router-link> |
      <router-link to="/active">active</router-link>
    </div>
    <router-view/>
    <todoInput />
    <div>
      <todoListItem v-for="index in todoIndex" :key="index" :index="index"/>
    </div>
  </div>
</template>

<script>
import todoInput from '@/components/todoInput/index.vue'
import todoListItem from '@/components/todoListItem/index.vue'
export default {
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