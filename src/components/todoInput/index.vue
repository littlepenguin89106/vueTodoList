<template src="./template.html"></template>
<script>
export default {
    name:'todoInput',
    data(){
        return {
            todo:''
        }
    },
    methods:{
        submitHandler(){
            if(!this.todo){
                return
            }
            else{
                this.$store.commit(
                    'addTodos',
                    {
                        content:this.todo,
                        complete:false
                    }
                )
                this.todo=''
            }
        }
    }
}
</script>