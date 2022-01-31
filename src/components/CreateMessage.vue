<template>
    
		<footer>
			<!-- HELLO T -->
			<textarea placeholder="Type your message" v-model="state.messageContent"/>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="">
			<router-link to="#">Send</router-link>
			{{state.messageContent}}
		</footer>

</template>

<script>
import { reactive } from 'vue'
export default {
	name: "CreateMessage",
	setup() {
		const state = reactive({
			messageContent: '',
		})
		
	return {
		state,
	}

	},
}
</script>
<style scoped>

/* Footer */
footer{
	height:155px;
	padding:20px 30px 10px 20px;
}
footer textarea{
	resize:none;
	border:none;
	display:block;
	width:100%;
	height:80px;
	border-radius:3px;
	padding:20px;
	font-size:16px;
	margin-bottom:13px;
}
footer textarea:focus {
	outline: none !important;
	border: 2px solid #cae5ff;
	
}
footer textarea::placeholder{
	color:rgb(153, 156, 158);
	font-size: 16px;
}
footer img{
	height:30px;
	cursor:pointer;
}
footer a{
	text-decoration:none;
	text-transform:uppercase;
	font-weight:bold;
	color:#6fbced;
	vertical-align:top;
	margin-left:333px;
	margin-top:5px;
	display:inline-block;
}
</style>