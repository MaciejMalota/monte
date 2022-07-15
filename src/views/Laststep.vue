<template>
  <div class="home">
        <h1 class="text1">Good job {{name}}!</h1>
        

 <div class="text2">We have sent you an email to <b>{{email}}</b>.</div>
 <div class="text3">Make sure to click the link from the message to active your account</div>
 

   <div class="submit">
      <button name="createAcc">Go to homepage</button>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Laststep',
  props:["email", "name"],
  data() {
    return {
      

    }
  },
  components: {
    
  },
  methods: {
    
  },
}
</script>

<style scoped>


 .home{
background: #FFFFFF;
}

.passwordInput{
  padding-right: 50px;
}

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

.text2{
    margin-top: 40px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #292A33;
}

.text3{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #292A33;
}

button {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background:#EC1115;
border: 0;
padding: 20px;
width: 80%;
color: white;
border-radius: 64px;
font-family: 'Roboto Mono';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 100%;
letter-spacing: 0.015em;
}
.submit{
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
}
button:hover {
background: #A60C0E;
}
button:focus {
background: #A60C0E;
border: 5px solid #F47073;
}

@media only screen and (min-width: 1000px) {
.text1{
font-size: 80px;
  }
.home{
display: grid;
justify-content: center;
}
.FormHolder{
display: flex;
justify-content: center;
  }
form{
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 30px;
background: green;
width: 600px;
padding: 64px;
background: #FFFFFF;
box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
border-radius: 24px;
}

.submit{
display: flex;
flex-direction: row-reverse;
justify-content: center;
align-items: center;

}
button{
padding: 15px;
width: 50%;
}
.log{
width: 100%;
text-align: center;
margin-top: 0px;
}
}
</style>
