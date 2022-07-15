<template>
<header class="nav">

 <img alt="Vue logo" src="../assets/logo.svg"> 
  <span class="caption"  >Developed with <span class="heart">♥ </span> by Monterail</span>

  
  </header>
</template>

<script>
export default {
 name:'Header'

}
</script>

<style scoped>
 .nav{
  padding: 0px;
   display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 98px;
background: #FFFFFF;

} 
  .caption {
  display: none;
   
  }



@media only screen and (min-width: 400px) {
.nav{
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 25px 48px;


}

.caption{
font-family: 'Roboto Mono';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
text-align: right;
letter-spacing: 0.03em;
text-transform: uppercase;
color: #343541;
} 


.heart{
    color: red;
    
}
  .caption {
  display: block;
   
  }

}
</style>