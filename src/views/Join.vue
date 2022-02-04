<template>
    <div class="join">
      <form @submit.prevent="joinChat()">
         <div class="box">
          <h1>Dev C</h1>
          <input type="text" name="" v-model="state.active_user" placeholder="Username">
            <button type="submit">Join</button>
            <span class="joining_error">{{state.joining_error}}</span>
        </div>
      </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { users } from '../assets/users'
import router from '../router/index'

export default {
  name: "Join",
  setup() {
    const state = reactive({
      active_user: '',
      joining_error: '',
      user: users[0]
    })
    
    function joinChat(){
      if(state.active_user != null && state.active_user.length >= 3 && state.active_user.length <= 20) {
        state.user.username = state.active_user
        this.$store.commit('user', state.username)
        state.active_user = ''
        state.joining_error = ''
        // this.$router.push('/chat')       
        router.push({ name: 'chat'})
      } else {
        state.joining_error = "Please! Use a valid username."
      }
    }

    return {
      state,
      joinChat
    }
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
.box input[type = "text"]{
  border:0;
  background: none;
  display: block;
  margin: 5px auto;
  text-align: center;
  border: 2px solid #cae5ff;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: rgb(107, 112, 119);
  border-radius: 24px;
  transition: 0.5s;
  font-size: 16px;
}
.box input[type = "text"]:focus{
  border-color: #87bfff;
  width: 250px;
}
.box input[type = "text"]::placeholder{
  opacity: 0.6;
}
.box button[type = "submit"]{
  border:0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #cae5ff;
  padding: 14px 40px;
  outline: none;
  font-style: normal;
  font-size: 18px;
  color: rgb(107, 112, 119);
  transition: 0.25s;
  cursor: pointer;
}
.box button[type = "submit"]:focus{
  border-color: #87bfff;
}
.box button[type = "submit"]:hover{
  /* background: #D4AC0D; */
  border-radius: 24px;
}
button{
  text-decoration: none;
}

.joining_error {
  color: red;
}

</style>
