import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS={
  load(){
    return JSON.parse(localStorage.getItem('vue-todos')) || []
  },
  save(data){
    localStorage.setItem('vue-todos',JSON.stringify(data))
  }
}

const filter={
  all(todos){
    return todos
  },
  complete(todos){
    return todos.filter(todo=>{
      return todo.complete
    })
  },
  active(todos){
    return todos.filter( todo =>{
      return !todo.complete
    })
  }
}

export default new Vuex.Store({
  state: {
    todos:[
    ]
  },
  getters:{
    todoIndex: state =>{
      return filter[state.route.name](state.todos).map(todo=>{
        return state.todos.indexOf(todo)
      })
    }
  },
  mutations: {
    setTodos(state,data){
      state.todos=data
      LS.save(state.todos)
    },
    addTodos(state,data){
      state.todos.push(data)
      LS.save(state.todos)
    },
    deleteTodos(state,index){
      state.todos.splice(index,1)
      LS.save(state.todos)
    },
    updateTodos(state,{index,data}){
      state.todos[index]=data
      LS.save(state.todos)
    }
  },
  actions: {
    initTodos({commit}){
      commit('setTodos',LS.load())
    }
  },
  modules: {
  }
})
