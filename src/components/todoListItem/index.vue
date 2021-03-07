<template src="./template.html"></template>

<script>
export default {
    name:'todoListItem',
    data(){
        return {
            edit:null
        }
    },
    props:{
        index:{
            type: Number,
            required: true
        }
    },
    computed:{
        todo(){
            return this.$store.state.todos[this.index]
        },
        complete: {
            get(){
                return this.todo.complete
            },
            set(val){
                this.$store.commit('updateTodos',{
                    index: this.index,
                    data:{
                        complete: val,
                        content: this.todo.content
                    }
                })
            }
        }
    },
    methods:{
        destroyHandler(){
            if(confirm(`delete ${this.todo.content}?`))
            this.$store.commit('removeTodos',this.index)
        },
        editHandler(){
            this.edit=this.todo.content
        },
        submitHandler(){
            if(!this.edit){
                this.destroyHandler()
            }
            else{
                this.$store.commit('updateTodos',{
                    index: this.index,
                    data:{
                        complete: this.todo.complete,
                        content: this.edit
                    }
                })
                this.cancelHandler()
            }
        },
        cancelHandler(){
            this.edit=null
        }
    }
}
</script>