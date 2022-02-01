<template>
			<li class="you">
				<div class="entete">
					<span class="status green"></span>
					<h2>{{username}}</h2>
					<h3>10:12AM, Today</h3>
				</div>
				<div class="triangle"></div>
				<div class="message">
					{{message}}
				</div>
			</li>
</template>

<script>
export default {
	name: 'Message',
	props: {
		username: {
			type: String,
			required: true
		},
		message: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>

</style>