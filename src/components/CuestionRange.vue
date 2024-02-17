<template>
   
</template>


<script>
export default {
  data:()=>{
    return{
        data:{
          icon:'null'
        }
    }
  },
  methods:{
    changeOption(value){
      this.$emit('changedata', value);
    }
  }
}
</script>