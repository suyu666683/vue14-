<template>
  <div>
  根组件{{val}}
  </div>
</template>



<script>
//导出的是一个组件的配置项
export default {
     data(){
         return{
             val:'我的国'
         }
     }
}
</script>

<style scoped>
    div{
        background-color: pink;
    }
</style>


