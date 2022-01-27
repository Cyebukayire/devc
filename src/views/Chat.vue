<template>
<div id="container">
	<!-- <aside>
		<header>
			<h1>DEV C</h1>
		</header>
		<ul>
			<li>
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="">
				<div>
					<h2>Musa_Coder</h2>
					<h3>
						<span class="status orange"></span>
						offline
					</h3>
				</div>
			</li>
			<li>
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg" alt="">
				<div>
					<h2>Hack_Prince</h2>
					<h3>
						<span class="status green"></span>
						online
					</h3>
				</div>
			</li>
		</ul>
	</aside> -->
	<main>
		<header>
			<!-- <img src="https://o.remove.bg/downloads/6a9c6e83-ae2a-4f75-9ae9-b8ffe7114d0f/msg-removebg-preview.png" alt=""> -->
			<div>
				<h2>Programmers' random chat</h2>
				<h3>Chat with a stranger</h3>
			</div>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="">
		</header>
		<ul id="chat">
			<li class="you">
				<div class="entete">
					<span class="status green"></span>
					<h2>Musa_Coder</h2>
					<h3>10:12AM, Today</h3>
				</div>
				<div class="triangle"></div>
				<div class="message">
					Yooo, I've been coding since morning, it's sad I can't feel hunger.
				</div>
			</li>
			<li class="me">
				<div class="entete">
					<h3> 10:13AM, Today </h3>
					<h2>Hack_Prince</h2>
					<span class="status blue"></span>
				</div>
				<div class="triangle"></div>
				<div class="message">
					hahahhh I get you bro
				</div>
			</li>
			<li class="me">
				<div class="entete">
					<h3> 10:12AM, Today </h3>
					<h2>Vincent</h2>
					<span class="status blue"></span>
				</div>
				<div class="triangle"></div>
				<div class="message">
					you should get out and stretch your ass
				</div>
			</li>
			<li class="you">
				<div class="entete">
					<span class="status green"></span>
					<h2>Vincent</h2>
					<h3>10:12AM, Today</h3>
				</div>
				<div class="triangle"></div>
				<div class="message">
					ohhh yeah, I need a break
				</div>
			</li>
			<li class="me">
				<div class="entete">
					<h3>10:12AM, Today</h3>
					<h2>Hack_Prince</h2>
					<span class="status blue"></span>
				</div>
				<div class="triangle"></div>
				<div class="message">
					Ama get a coffee too
				</div>
			</li>
			<li class="me">
				<div class="entete">
					<h3>10:12AM, Today</h3>
					<h2>Hack_Prince</h2>
					<span class="status blue"></span>
				</div>
				<div class="triangle"></div>
				<div class="message">
					I love this poor chat, it relaxes me in some ways
				</div>
			</li>
		</ul>
		<footer>
			<textarea placeholder="Type your message"></textarea>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="">
			<a href="#">Send</a>
		</footer>
	</main>
</div>
</template>

<style scoped>
*{
	box-sizing:border-box;
  margin: 0;
  padding: 0;
}
body{
	background-color:#abd9e9;
	font-family:Arial;
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

#chat{
	padding-left:0;
	margin:0;
	list-style-type:none;
	overflow-y:scroll;
	height:535px;
	border-top:2px solid #fff;
	border-bottom:2px solid #fff;
}
#chat li{
	padding:10px 30px;
}
#chat h2,#chat h3{
	display:inline-block;
	font-size:13px;
	font-weight:normal;
}
#chat h3{
	color:#bbb;
}
#chat .entete{
	margin-bottom:5px;
}
#chat .message{
	padding:20px;
	color:#fff;
	line-height:25px;
	max-width:90%;
	display:inline-block;
	text-align:left;
	border-radius:5px;
}
#chat .me{
	text-align:right;
}
#chat .you {
  text-align: left;
}
#chat .you .message{
	background-color:#58b666c5;
}
#chat .me .message{
	background-color:#6fbced;
}
#chat .triangle{
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 10px 10px 10px;
}
#chat .you .triangle{
		border-color: transparent transparent #58b666 transparent;
		margin-left:15px;
}
#chat .me .triangle{
		border-color: transparent transparent #6fbced transparent;
		margin-left:375px;
}

main footer{
	height:155px;
	padding:20px 30px 10px 20px;
}
main footer textarea{
	resize:none;
	border:none;
	display:block;
	width:100%;
	height:80px;
	border-radius:3px;
	padding:20px;
	font-size:13px;
	margin-bottom:13px;
}
main footer textarea::placeholder{
	color:#ddd;
}
main footer img{
	height:30px;
	cursor:pointer;
}
main footer a{
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