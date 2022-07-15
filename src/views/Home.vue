<template>
  <div class="home">
        <h1 class="text1">Ahoy You!</h1>
        <h1 class="text2">Care to register? </h1>

 
 <div class="FormHolder">
<form  @submit.prevent="submit()">
  
    <label for="email">Email:</label>

    <input
        id="email"
        type="text"
        minlength="3"
        maxlength="21"
        pattern="^\S+@\S+\.\S+$"
        required
        placeholder="Something ending with monterail.com"
        v-model="email"
      />

    <label for="password">Password:</label>
      <span style="position: relative;">
        <img @click="showPassword()" class="eye" alt="eye" src="../assets/eye.svg">
      <input
      class="passwordInput"
        id="password"
        :type="type"
        placeholder="Enter your password"
        required
        v-model="password"
      />
      </span>
      <div class="pwRestrict">
        <p :class="passwordCheck1">At least 8 characters</p>
        <p :class="passwordCheck2">At least one letter</p>
          <p  :class="passwordCheck3">At least one digit</p>
        </div>

    <div class="submit">

      <button name="createAcc" type="submit" >Next step</button>
        <div class="log"> Log in instead</div> 
      </div>
  </form>
  
 </div>

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      email:"",
      password:"",
      type:"password",
      errorChar:true,
      errorLetter:true,
      errorDig:true
    }
  },
  computed:{
  passwordCheck1: function () {
      if (this.password.length == 0) return;
      if (this.password.length >= 8){
        
        return "sucess";
        }else
      return "error";
    },
     passwordCheck2: function () {
      if (this.password.length == 0) return;
      let regExp = /[a-zA-Z]/g;
      if (regExp.test(this.password))
        return "sucess";
      return "error";
    },
     passwordCheck3: function () {
      if (this.password.length == 0) return;
      let regExp = /[0-9]/g;
      if (regExp.test(this.password)) return "sucess";
      return "error";
    }
  },
  methods: {
      submit(){
     if(this.passwordCheck1=="sucess" && this.passwordCheck2=="sucess"  &&this.passwordCheck3=="sucess")
      this.$router.push({  name:"Nextstep", params:{ email: this.email }});
      console.log(this.email)
    },
     showPassword() {
       if(this.type === 'password') {
          this.type = 'text'
        
       } else {
          this.type = 'password'
         
       }
     }
  },
  
}
</script>

<style scoped>
.error {
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 170%;
color: #EC1115;
letter-spacing: 0.04em;
}
.sucess {
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 170%;
color:  #27AE60;;
letter-spacing: 0.04em;
}
.log{
  font-family: 'Roboto Mono';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 100%;
align-items: center;
text-align: center;
letter-spacing: 0.015em;
color: #EC1115;
margin-top: 20px;
}

 .home{
background: #FFFFFF;
}
.eye{
  position: absolute;
right: 15px;
top: 26%;

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
font-family: 'Eczar';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 102%;
text-align: center;
letter-spacing: -0.01em;
color:  #85868d
}

form{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  background: #FFFFFF;
width: 100%;
padding: 24px;
}

label {
  display: block;
width: 100%;
height: 18px;
font-family: 'Roboto Mono';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
text-transform: uppercase;
color: #F47073;
}

input {
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px 16px 24px 24px;
gap: 10px;
width: 100%;
height: 56px;
background: #F7F7F7;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
border: none;
text-overflow: ellipsis;

}

input:hover {
 background: #E5E5E5;
}
input:focus {
background: rgba(47, 128, 237, 0.1);
border: 1px solid #2F80ED;
}

.pwRestrict{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
letter-spacing: 0.04em;

}

button {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background:#EC1115;
border: 0;
padding: 20px;
width: 100%;
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
margin-top: 30px;
}
button:hover {
  background: #A60C0E;
}
button:focus {
  background: #A60C0E;
border: 5px solid #F47073;
}

@media only screen and (min-width: 1000px) {
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

  .text1{
text-align: left;
font-size: 80px;
  }
.text2{
text-align: left;
font-size: 80px;
}

.submit{
display: flex;
flex-direction: row-reverse;
justify-content: center;
align-items: center;


}
button{
  padding: 15px;
  
}
.log{
width: 100%;
text-align: center;
margin-top: 0px;
}

}
</style>
