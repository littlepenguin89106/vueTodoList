<template src="./template.html"></template>
<script>
export default {
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
                        context:this.todo,
                        complete:false
                    }
                )
                this.todo=''
            }
        }
    }
}
</script>