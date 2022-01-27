<template>
    <div class="join">
         <div class="box">
      <h1>Dev C</h1>
      <input type="text" name="" placeholder="Username">
      <router-link to="/chat">
        <input type="submit" value="Join">
      </router-link>
      
    </div>
    </div>
</template>

<script>
export default {
  name: "Join",
  setup() {
    
  },
}
</script>
<style scoped>
/* .join{
    position: relative;
    width: 100vmin;
    height: 100vmin;
    top: 0;
    left: 0;
} */


.box{
  width: 300px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: white;
  text-align: center;
  border-radius: 20px 20px;
}
.box h1{
  color: #87bfff;
  /* text-transform: uppercase; */
  font-weight: 500;
  text-align: center;
}
.box input[type = "text"],.box input[type = "password"]{
  border:0;
  background: none;
  display: block;
  margin: 5px auto;
  text-align: center;
  border: 2px solid #eff3f7;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.5s;
}
.box input[type = "text"]:focus{
  border-color: #87bfff;
  width: 250px;
}
.box input[type = "submit"]{
  border:0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid white;
  padding: 14px 40px;
  outline: none;
  color: white;
  transition: 0.25s;
  cursor: pointer;
}
.box input[type = "submit"]:focus{
  border-color: #87bfff;
}
.box input[type = "submit"]:hover{
  /* background: #D4AC0D; */
  border-radius: 24px;
}


</style>
