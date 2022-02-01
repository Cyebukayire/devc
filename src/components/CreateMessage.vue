<template>
    
		<footer>
			<!-- HELLO T -->
			<div class="character-counter" :class="{ '--exceeded-color': msg_character_counter > 180}">{{msg_character_counter}}/180</div>
			<textarea placeholder="Type your message" :class="{ '--exceeded-border': msg_character_counter > 180}" v-model="state.messageContent"/>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="">
			<router-link @submit="createMessage()" to="#">Send</router-link>
		</footer>

</template>

<script>
import { reactive, computed } from 'vue'
export default {
	name: "CreateMessage",
	setup(props, ctx) {
		const state = reactive({
			messageContent: '',
		})
		const msg_character_counter = computed( () => state.messageContent.length)
		function createMessage() {
			if((state.messageContent.length <= 180 && state.messageContent.length != 0)) {
				ctx.emit('new-message', state.messageContent)
				state.messageContent = ""
			}			
		}
	return {
		state,
		msg_character_counter,
		createMessage
	}

	},
}
</script>
<style scoped>

/* Footer */
.character-counter {
	text-align: right;
	padding-bottom: 5px;
}

.--exceeded-border {
	border: 2px solid red !important;
}
.--exceeded-color {
	color: red;
}
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