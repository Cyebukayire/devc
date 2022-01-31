<template>
<div id="container">
	<main>
		<header>
			<img src="../assets/logo1.png" alt="">
			<div>
				<h2>Developers' Random Chat</h2>
				<h3>Chat with a stranger</h3>
			</div>
		</header>
		<Messages/>
		<CreateMessage/>
	</main>
</div>
</template>

<script>
import { users } from '../assets/users'
import Messages from '../components/Messages.vue'
import CreateMessage from '../components/CreateMessage.vue'
// import { reactive } from 'vue'

export default {
	name: 'Chat',
	components: {
		Messages,
		CreateMessage
	},
	setup() {
		// const state = reactive({
		// })
		return {
			users
		}		
	},
}
</script>

<style>
*{
	box-sizing:border-box;
  margin: 0;
  padding: 0;
}
body{
	/* background-color:#abd9e9; */
	font-family:Arial;
  height: 100%;
  width: 100%;
}

#container{
	/* width:750px;
	height:800px; */
  width: 100%;
  height: 100%;
	background:#eff3f7;
	margin:0;
	font-size:0;
	border-radius:5px;
  margin-left:0px;
	overflow:hidden;
}
main{
	width:490px;
	height:800px;
	display:inline-block;
	font-size:15px;
	vertical-align:top;
}

h1 {
  color: #87bfff;
  /* text-transform: uppercase; */
  font-weight: 500;
  text-align: center;
}


h2,h3{
	margin:0;
}

.status{
	width:8px;
	height:8px;
	border-radius:50%;
	display:inline-block;
	margin-right:7px;
}
.green{
	background-color:#58b666;
}
.orange{
	background-color:#ff725d;
}
.blue{
	background-color:#6fbced;
	margin-right:0;
	margin-left:7px;
}

main header{
	height:110px;
	padding:30px 20px 30px 40px;
}
main header > *{
	display:inline-block;
	vertical-align:top;
}
main header img:first-child{
	border-radius:50%;
  width: 15%;
}
main header img:last-child{
	width:24px;
	margin-top:8px;
}
main header div{
	margin-left:10px;
	margin-right:145px;
}
main header h2{
	font-size:16px;
	margin-bottom:5px;
}
main header h3{
	font-size:14px;
	font-weight:normal;
	color:#7e818a;
}
</style>