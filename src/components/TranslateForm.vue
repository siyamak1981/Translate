<template>
    <div class ="row d-flex justify-content-center pt-5">
  <div id="translateForm" class="text-center">
<form action="#" class ="form-inline well pl-5" v-on:submit="formSubmit">
    <input  class="form-control" type="text" v-model="textToTranslate" placeholder="Enter a Word">
    <select class="form-control" v-model="language">
      <option value="fa">Persian</option>
      <option value="ru">Russia</option>
      <option value="zh">China</option>
      <option value="fr">French</option>
      <option value="es">Espanish</option>
    </select>
    <input type="submit" class="btn btn-primary" value="Translate">
</form>
</div>
  </div>
</template>


<script>


export default {
  name: 'translateForm',
 
data(){
    return {
        textToTranslate:'',
        language:''
    }
},
created(){
  this.language ='fa'; 
},
methods:{
    formSubmit(e){
        this.$emit('formSubmit',this.textToTranslate, this.language);
        e.preventDefault();
    }
}
}

</script>

<style>


</style>
