<template>
  <div class="home">
        <h1 class="text1">Good job {{name}}</h1>
        
  </div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Laststep',
  data() {
    return {
      email:'',
      name:''

    }
  },
  components: {
    
  },
  methods: {
    
  },
}
</script>

<style scoped>



  .text1{
    font-family: 'Eczar';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 102%;
text-align: center;
letter-spacing: -0.01em;
margin-top: 120px;
color: #343541;
  }





@media only screen and (min-width: 1000px) {
      .text1{

font-size: 80px;
  }
   .home{
   display: grid;
   justify-content: center;
}
  
</style>
