<template>
			<li class="you">
				<div class="entete">
					<span class="status green"></span>
					<h2>Peace-pro</h2>
					<h3>10:12AM, Today</h3>
				</div>
				<div class="triangle"></div>
				<div class="message">
					OMG! I've been sitting on the same chair since 4:00 am, I think I need a break but I've got a bug to kill
				</div>
			</li>

			<li class="me">
				<div class="entete">
					<span class="status green"></span>
					<h2>Peace-pro</h2>
					<h3>10:12AM, Today</h3>
				</div>
				<div class="triangle"></div>
				<div class="message">
					<!-- {{message}} --> Aww:( I feel ya bro, I'm having ma break tho
				</div>
			</li>			
</template>

<script>
export default {
	name: 'Message',
	props: {
		username: {
			type: String,
			// required: true
		},
		message: {
			type: Object,
			// required: true
		}
	}
}
</script>

<style scoped>

</style>