<template>
  <div id="app" class ="text-center m-5">
  <h1>word Translator</h1>
 <h5> Powerd by Vue.Js</h5>
 <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
 <TranslateOutPut v-text="translatedText"></TranslateOutPut>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TranslateForm from './components/TranslateForm'
import TranslateOutPut from './components/TranslateOutPut'
export default {
  name: 'App',
  components: {
    HelloWorld,
    TranslateForm,
    TranslateOutPut
  },
  data:function(){
    return {
      translatedText:''
    }
  },
  
  methods:{
    translateText:function(text,language){
     this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191031T081348Z.9a7429cb74f5ff72.cbe62a1c0f70204161eaf5ba0bc8b58bf2d463be&lang='+language+'&text='+text)
     .then((response)=>{
this.translatedText=response.body.text[0];
     })
    }
  }
}
</script>

<style>
body{
  background: black;
  color:wheat;
}

</style>
