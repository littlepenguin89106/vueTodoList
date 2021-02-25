<template src="./template.html"></template>

<script>
export default {
    props:{
        index:{
            type: Number,
            required: true
        }
    },
    computed:{
        todo(){
            return this.$store.state.todos[this.index]
        }
    }
}
</script>