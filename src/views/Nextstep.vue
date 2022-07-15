<template>
  <div class="home">
        <h1 class="text1">Great!</h1>
        <h1 class="text2">Now your name</h1>

 
 <div class="FormHolder">
<form  @submit.prevent="submit()">
  
  <label for="name">First Name:</label>

   <input
      id="name"
      type="text"
      minlength="3"
      maxlength="21"
      pattern="^[a-zA-Z]{3,21}$"
      required
      placeholder="e.g. Jessica"
      v-model="name"
    />

      <label for="name">Last Name:</label>

   <input
      id="lastname"
      type="text"
      minlength="3"
      maxlength="21"
      pattern="^[a-zA-Z]{3,21}$"
      required
      placeholder="e.g. Walton"
      v-model="lastname"
    />

   
  <label for="date">Date of Birth:</label>
    <input placeholder="DD / MM / YYYY" v-model="data" required class="textbox-n" max="2022-07-14" type="text" onfocus="(this.type='date')" id="date">

    <div class="pwRestrict">
      <p :class="dataCheck">You should be minimum 18 years old</p>

      </div>
 <div class="terms">
      <input type="checkbox" id="checkbo" v-model="terms" required />
      <p>I accept <u>Privacy Policy</u></p>
    </div>

   <div class="submit">
      <button name="createAcc" type="submit">Register</button>
       <div class="log"> Log in instead</div> 
    </div>


  </form>

 </div>

  </div>

</template>

<script>
// @ is an alias to /src

export default {
  props:["email"],
  name: 'Home',
  data() {
    return {
      name:"",
      data:""
    }
  },
  computed:{
      dataCheck: function () {
       
         let x=new Date(this.data);
        let y = new Date()
       
         let limit = new Date("1922-01-01")
        if(limit>x)return "error";
      if (this.data == 0) return;
      if (x-y<= -567648000000){
       
        return "sucess";
        }else
      return "error";
    }

  },

  methods: {
      submit(){
      this.$router.push({  name:"Laststep", params:{ email: this.email , name:this.name }});
      console.log(this.email)
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
input[type="date"]::-webkit-calendar-picker-indicator {   color: transparent;   background: none;   z-index: 1; }
input[type="date"]::before {
    color: #999999;
    content: attr(placeholder);
}
input[type="date"] {
    color: #ffffff;
}
input[type="date"]:focus,
input[type="date"]:valid {
    color: #666666;
}
input[type="date"]:focus::before,
input[type="date"]:valid::before {
    content: "" !important;
}


.terms{
  display: flex;
  align-items: center;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #292A33;
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
}
#checkbo{
  width: 4%;
 margin-right: 10px;

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
