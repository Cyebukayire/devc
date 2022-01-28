<template>
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
		</ul>
</template>

<style scoped>

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
#chat .entete h3 {
	margin: 0px 10px;
}
#chat .message{
	padding:20px;
	color:#fff;
	line-height:25px;
	max-width:90%;
	display:inline-block;
	text-align:left;
	border-radius:5px;
	font-size: 16px;
}
#chat .me{
	text-align:right;
}
#chat .you {
  text-align: left;
}
#chat .you .message{
	background-color:#58b666;
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

</style>